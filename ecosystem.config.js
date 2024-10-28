/**
 * Config file
 * 
 * https://pm2.keymetrics.io/docs/usage/watch-and-restart/
 */

module.exports = {
  apps : [{
    name   : "this-api",
    script : "./this-api/app.js",
    watch: ["this-api"],  //pm2 inbuild function to Auto restart apps on file change
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}
