module.exports = {
  reactStrictMode: true
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://d000-34-135-72-108.ngrok.io/:path*'
      },
    ];
  },
};
