/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // isso substitui o antigo next export
  basePath: "/biblia_da_marca", // nome do repositório no GitHub
  assetPrefix: "/biblia-da-marca/",
  images: { unoptimized: true }, // necessário para export 
};

module.exports = nextConfig;
