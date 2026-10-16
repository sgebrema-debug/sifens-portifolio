// Windows restricted environments can read files but reject native canonicalization.
// Use Node's equivalent JavaScript implementation only for that specific failure.
import fs from 'node:fs';
import { syncBuiltinESMExports } from 'node:module';
if (process.platform === 'win32') {
  const native = fs.realpathSync.native;
  fs.realpathSync.native = function(path,options) {
    try { return native(path,options); }
    catch(error) { if(error.code !== 'EPERM') throw error; return fs.realpathSync(path,options); }
  };
  syncBuiltinESMExports();
}
