import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: 'production',
    rollupOptions: {
      input: {
        index: "index.html",
        product: "product.html",
        about: "about.html",
        request: "request.html",
      }
    }
  },
  server: {
    port: 3000
  }
})