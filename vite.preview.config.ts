import {defineConfig} from 'vite';
import vinext from 'vinext';
// Node preview for hosts that cannot start the Cloudflare Workers emulator.
// Production uses vite.config.ts and its Sites/Cloudflare integration.
export default defineConfig({plugins:[vinext()],server:{host:'127.0.0.1',port:5173}});
