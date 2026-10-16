const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const ts=require('typescript');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'lib/content.json'),'utf8'));
function load(filename,modules){const source=fs.readFileSync(path.join(root,filename),'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;const exports={};vm.runInNewContext(js,{exports,require:id=>{if(id in modules)return modules[id];throw Error('Unexpected import '+id)},URL,Response,console},{filename});return exports;}
const portfolio=load('lib/portfolio.ts',{'./content.json':data});
const {GET}=load('app/api/portfolio/route.ts',{'@/lib/portfolio':portfolio});
(async()=>{
assert.equal(data.length,44);
assert.equal(new Set(data.map(p=>p.slug)).size,44);
for(const page of data)for(const image of page.images)assert.ok(fs.existsSync(path.join(root,'public',image.src)),'Missing image '+image.src);
const all=await GET(new Request('https://portfolio.test/api/portfolio')).json();
assert.equal(all.total,34);
const search=await GET(new Request('https://portfolio.test/api/portfolio?q=LandChain')).json();
assert.ok(search.pages.some(p=>p.slug==='hackathons/african-blockchain-championship'));
const category=await GET(new Request('https://portfolio.test/api/portfolio?category=projects')).json();
assert.equal(category.total,4);
assert.ok(category.pages.every(p=>p.slug.startsWith('projects/')));
const detail=await GET(new Request('https://portfolio.test/api/portfolio?slug=about')).json();
assert.equal(detail.title,'About');
assert.equal(GET(new Request('https://portfolio.test/api/portfolio?slug=missing')).status,404);
assert.equal(GET(new Request('https://portfolio.test/api/portfolio?category=missing')).status,400);
const empty=await GET(new Request('https://portfolio.test/api/portfolio?q=impossible-query-92741')).json();
assert.equal(empty.total,0);
console.log('PASS: 44 unique pages, 106 local images, collection/search/category/detail API, empty results, and 400/404 handling.');
})().catch(error=>{console.error(error);process.exitCode=1});

