import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    unoptimized: true, // ✅ desativa o otimizador automático
  },
};



export default nextConfig;
