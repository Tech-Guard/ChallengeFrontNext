const path = require('path');

module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/app/components');
    return config;
  },
};
