/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return[
            {
                source:"/api/emp/:path*",
                destination:"http://localhost:4000/api/emp/:path*/"
            }
        ]
    },
    // output:"employee",
    // typescript: {},
};

export default nextConfig;
