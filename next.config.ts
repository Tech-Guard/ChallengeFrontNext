const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/app/components');
    return config;
  },
};
