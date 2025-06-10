import { defineConfig } from "vite"
import * as path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  resolve: {alias: {"@": path.resolve(__dirname, "src")}},
  plugins: [react(), tailwindcss()],
})
