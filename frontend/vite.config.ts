import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 4000,
    },
    // base: process.env.NODE_ENV === 'production' ? '/31.129.49.9/' : '/',
    plugins: [react()],
});
