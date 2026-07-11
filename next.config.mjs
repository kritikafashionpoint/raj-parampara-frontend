import ip from "ip";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  allowedDevOrigins: [
    ip.address(), // Current local IP automatically detect karega
  ],
};

export default nextConfig;