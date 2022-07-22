import solidPlugin from 'vite-plugin-solid';
import { defineConfig, loadEnv } from 'vite'
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      BRAND:JSON.stringify("JS BLOG"),
      NAV_MENU:[{caption:"Home",path:"/"},{caption:"Category",path:"/tag"},{caption:"About",path:"/About"}],

          },
    plugins: [solidPlugin()],
   build: {
     target: 'esnext',
     polyfillDynamicImport: false,
   },
  }
})

