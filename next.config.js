/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'phucv2376/Ky2' : ''

}
module.exports = {
  reactStrictMode: true,
}
