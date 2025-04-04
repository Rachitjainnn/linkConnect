/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'*.googleusercontent.com'
            },
            {
                hostname:'linktree-fillers.s3.ap-south-1.amazonaws.com'
            }
        ]
    }
};

export default nextConfig;
