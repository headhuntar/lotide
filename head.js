const assertEqual = require('./assertEqual');

const head = function (array) {
  if (array === undefined || array[0] === undefined) {
    return undefined;
  }
  return array[0];
};

module.exports = head;
