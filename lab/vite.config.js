import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Theory_of_algorithms_Lab1/" // название репозитория
});
