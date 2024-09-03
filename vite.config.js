import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio_Yamini/",
  plugins: [react()],
  css:{
    modules:{
      localsConvention: "camelCase",
    }
  }
})
