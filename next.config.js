/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // https://github.com/vercel/next.js/issues/26799
  // https://nextjs.org/docs/advanced-features/compiler#styled-components
  experimental: {
    styledComponents: true,
  },
}
