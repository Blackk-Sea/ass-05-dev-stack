import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you ever serve the dev server behind a port-mapped proxy (a cloud IDE or a
// hosted preview sandbox), uncomment the `hmr` block below so live reload can
// find its way back through the proxy. Local development does not need it.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    allowedHosts: true,
    // hmr: { clientPort: 443, protocol: 'wss' },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
