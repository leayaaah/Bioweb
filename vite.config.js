import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Bioweb/', // Thay 'BIOWEB' bằng đúng tên repository trên GitHub của bạn nếu khác nhé
})