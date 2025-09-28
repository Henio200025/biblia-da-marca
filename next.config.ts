/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // isso substitui o antigo next export
  basePath: "/biblia_da_marca", // nome do repositório no GitHub
  images: { unoptimized: true }, // necessário para export estático
};

module.exports = nextConfig;
