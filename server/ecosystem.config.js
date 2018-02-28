/* @flow */
module.exports = {
  script:
    process.env.NODE_ENV === 'production' ? './build/server.js' : './server.js',
  name: 'laufsteg',
  interpreter: process.env.NODE_ENV === 'production' ? 'node' : 'babel-node',
  watch: process.env.NODE_ENV === 'production' ? false : ['server.js'],
  env:
    process.env.NODE_ENV === 'production'
      ? {
          // simulate production environment variables
        }
      : {
          NODE_ENV: 'development',
          POSTMARK_SERVER_TOKEN: 'abs123',
        },
};
