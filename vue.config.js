/* eslint-disable no-undef */
const fs = require('fs');

module.exports = {
  baseUrl: '/ai-explorer/',
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/variables.scss', 'utf-8')
      }
    }
  }
};
