// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  module.exports = require('./config/webpack.production.config');
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./config/webpack.development.config');
}
