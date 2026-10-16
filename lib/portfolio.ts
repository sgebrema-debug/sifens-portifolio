import content from './content.json';
export type PortfolioPage = {title:string;slug:string;url:string;blocks:{type:string;text:string}[];images:{src:string;alt:string;original:string}[];embeds:string[];links:{text:string;url:string}[]};
export const pages = content as PortfolioPage[];
export const groups = [
 {slug:'projects',title:'Engineering projects',description:'Practical solutions, from hardware to mobile applications.'},
 {slug:'hackathons',title:'Hackathons',description:'Rapid innovation, collaborative teams, and working prototypes.'},
 {slug:'internship',title:'Professional experience',description:'UI/UX design and development at Phoenixopia Solutions.'},
 {slug:'entrepreneurial-journey',title:'Entrepreneurship',description:'Sustainable ventures and the journey from idea to impact.'},
 {slug:'leadership-programs',title:'Leadership & service',description:'Growing through mentorship, fellowship, and community.'},
 {slug:'aastu-recognitions',title:'Awards & recognition',description:'Academic achievements and leadership at AASTU.'},
 {slug:'physical-fitness',title:'Taekwondo',description:'A foundation of discipline, resilience, and respect.'},
 {slug:'events',title:'Events & community',description:'Connecting with innovators and celebrating Africa.'},
 {slug:'certificates-of-achievement-from-elementary-to-highschool',title:'Achievement certificates',description:'The milestones that shaped an ongoing learning journey.'},
 {slug:'english-proficiency',title:'English proficiency',description:'Original language proficiency documentation.'}
];
export const getPage=(slug:string)=>pages.find(p=>p.slug===slug.toLowerCase());
export const groupFor=(p:PortfolioPage)=>groups.find(g=>p.slug===g.slug || p.slug.startsWith(g.slug+'/'));
export const childrenOf=(slug:string)=>pages.filter(p=>p.slug.startsWith(slug+'/'));
export const summaries:Record<string,string>={
 'entrepreneurial-journey/sekela-sustainable-fashion':'Turning textile waste into value. A social enterprise and winner of the LLEA business idea competition.',
 'hackathons/african-blockchain-championship':'LandChain: a blockchain-based land registration system, built with team AuFive.',
 'projects/ietp':'Eco-Nest: a multidisciplinary sustainable housing project integrating clean energy generation.',
 'projects/medico-automatic-pill-dispenser-and-reminder':'Original project materials for Medico, an automatic pill dispenser and reminder.'
};
export const summaryFor=(p:PortfolioPage)=>summaries[p.slug] || p.blocks.find(b=>b.type==='p'&&b.text.length>70)?.text || `Explore the original materials from ${p.title}.`;
