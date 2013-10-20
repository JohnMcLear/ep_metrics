var settings = require('../../src/node/utils/Settings');

exports.consoleLogStats = function () {
  setInterval(function() {
    console.log(stats.toJSON());
  }, 1000);
}

