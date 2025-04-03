import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    hmr: {
      host: '3764-2c0f-f698-c204-f180-30ff-3895-e223-13e8.ngrok-free.app',
      protocol: 'wss' // Important for Ngrok
    },
    cors: {
      origin: [
        'https://3764-2c0f-f698-c204-f180-30ff-3895-e223-13e8.ngrok-free.app',
        // Add other allowed origins if needed
      ],
      credentials: true
    }
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "https://3764-2c0f-f698-c204-f180-30ff-3895-e223-13e8.ngrok-free.app",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  }
});