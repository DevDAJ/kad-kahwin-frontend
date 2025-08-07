import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  // depending on your application, base can also be "/"
  build: {
    outDir: '../build',
  },
  base: '/',
  plugins: [react(), viteTsconfigPaths(), tailwindcss()],
  server: {
    // this sets a default port to 3000
    port: 3000,
  },
});
