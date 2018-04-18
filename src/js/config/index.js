import _default from './default';

console.log(`config/${process.env.NODE_ENV}.js was loaded`);

const env = typeof process.env.NODE_ENV === 'undefined' ? 'development' : process.env.NODE_ENV;
let envConf = {};
try {
  /* eslint "global-require": 0, "import/no-dynamic-require": 0 */
  envConf = require(`./${env}.js`).default;
} catch (e) {
  console.error(` ${env} config file is not found. use default `);
}

export default { ..._default, ...envConf };

