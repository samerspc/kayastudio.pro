import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // base: '/kaya.pro/',
  plugins: [react()],
  preview: {
    host: '0.0.0.0',        
    port: 4173,              
    allowedHosts: ['kayastudio.pro', 'www.kayastudio.pro'],
  },
})
