import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

function setAlias(find: string | RegExp, RelativeReplacement: string) {
  return {
    find,
    replacement: path.resolve(__dirname, RelativeReplacement),
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: [setAlias('#', 'src')],
  },
});
