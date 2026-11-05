import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    const permanent = true;
    const posts: { source: string; destination: string }[] = [
      { source: "/index.php/2017/03/20/binnenschilderwerk", destination: "/werk/borculo-woonkamer-en-voordeur" },
      { source: "/2017/03/20/binnenschilderwerk", destination: "/werk/borculo-woonkamer-en-voordeur" },
      { source: "/index.php/2017/05/05/kitten-van-tegels-en-sanitair-markelo", destination: "/werk/markelo-kitwerk" },
      { source: "/2017/05/05/kitten-van-tegels-en-sanitair-markelo", destination: "/werk/markelo-kitwerk" },
      { source: "/index.php/2015/05/12/website-online", destination: "/" },
      { source: "/2015/05/12/website-online", destination: "/" },
      { source: "/index.php/2015/05/12/schildersbedrijfvreekamp", destination: "/over-lennart" },
      { source: "/2015/05/12/schildersbedrijfvreekamp", destination: "/over-lennart" },
      { source: "/index.php/category/binnenschilderwerk", destination: "/schilderwerk" },
      { source: "/index.php/category/buitenschilderwerk", destination: "/schilderwerk" },
      { source: "/index.php/category/glaswerken", destination: "/glaswerk" },
      { source: "/index.php/category/houtrotrenovatie", destination: "/houtrotreparatie" },
      { source: "/index.php/category/kitmontage", destination: "/kitwerk" },
      { source: "/index.php/category/wandafdekking", destination: "/behang-en-wandafwerking" },
      { source: "/index.php/category/lennart", destination: "/over-lennart" },
      { source: "/index.php/category/markelo", destination: "/" },
      { source: "/index.php/category/schilder", destination: "/" },
      { source: "/index.php/category/vreekamp", destination: "/" },
      { source: "/index.php/category/geen-categorie", destination: "/" },
      { source: "/index.php", destination: "/" },
    ];
    return posts.map((item) => ({ ...item, permanent }));
  },
};

export default nextConfig;
