import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  // Note: Using the Rust compiler means we cannot use
  // rehype or remark plugins. 
  experimental: {
    mdxRs: false,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
