/* eslint-disable no-undef */
const fs = require('fs');

module.exports = {
  publicPath: '/ai-explorer/',
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/variables.scss', 'utf-8')
      }
    }
  }
};
