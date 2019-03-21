/* eslint-disable global-require,import/no-dynamic-require */
/**
 * Entry point for the application.
 * */
const cp = require('child_process');
const pm2 = require('pm2');
const async = require('async');
const { apps } = require('../manifest.json');

// if role variable is set just run that script
pm2.connect(() => {
  async.each(
    apps,
    (app, cb) => {
      console.log(app.script, app.instances);
      pm2.start(
        app.script,
        {
          instances: app.instances,
          restartDelay: 10000
        },
        err => {
          if (err) {
            // Log the error and continue
            console.error(err);
          }
          cb();
        }
      );
    },
    err => {
      if (err) {
        console.error(err);
      }
      pm2.disconnect();
    }
  );
});
// Clean up the logs once an hour
setInterval(() => pm2.flush(), 3600 * 1000);
