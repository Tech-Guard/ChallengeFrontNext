const path = require('path');

module.exports = {
  trailingSlash: false,
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/app/components');
    return config;
  },
  async redirects() {
    return [];
  },
};
