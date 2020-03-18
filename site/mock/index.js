const delay = require('mocker-api/utils/delay');
const feature = require('./feature');

const proxy = {
  ...feature
}

module.exports = delay(proxy, 1000);