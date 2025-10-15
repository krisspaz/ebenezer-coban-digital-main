process.env.NODE_NO_HTTP2 = '1';
process.env.WS_NO_DEFLATE = '1';

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    // Cambié el puerto a 5173 (puerto por defecto de Vite) y permito fallback
    // si está ocupado (strictPort: false). Esto evita que el servidor falle
    // cuando otro proceso ya esté usando 8080 en la máquina del desarrollador.
    port: 5173,
    strictPort: false,
    hmr: {
      protocol: "ws",
      host: "localhost",
      clientPort: 5173,
      overlay: false,
      path: "/ws",
    },
    watch: {
      usePolling: true,
    },
  },
  optimizeDeps: {
    force: true,
  },
});


