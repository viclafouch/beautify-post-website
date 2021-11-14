/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/download',
        destination:
          'https://chrome.google.com/webstore/detail/linkedin-formatter/kdanpggknenhnbpajgeckelhgkghlmjp'
      }
    ]
  }
}
