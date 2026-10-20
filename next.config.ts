import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/inicio', permanent: false },
      { source: '/consultas', destination: '/consultas/calendario', permanent: false },
      { source: '/exames', destination: '/exames/resultados', permanent: false },
      { source: '/ultra', destination: '/ultra/ultrassons', permanent: false },
    ];
  },
};

export default nextConfig;
