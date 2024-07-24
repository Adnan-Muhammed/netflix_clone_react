import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
})



// export default defineConfig({
//   plugins: [react()],
//   server: {
//       proxy: {
//           '/api': {
//               target: 'https://api.themoviedb.org/3',
//               changeOrigin: true,
//               rewrite: (path) => path.replace(/^\/api/, ''),
//           },
//       },
//   },
// });