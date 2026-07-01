import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project1: resolve(__dirname, 'project_1.html'),
        project2: resolve(__dirname, 'project_2.html'),
        project3: resolve(__dirname, 'project_3.html'),
        project4: resolve(__dirname, 'project_4.html'),
        project5: resolve(__dirname, 'project_5.html'),
      },
    },
  },
});
