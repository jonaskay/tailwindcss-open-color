const openColor = require('open-color');

function reducer(obj, hex, index) {
  obj[index] = hex;

  return obj;
}

function generateColors() {
  const colors = {};

  Object.keys(openColor).forEach(function(name) {
    const color = openColor[name];

    if (typeof color === 'string') {
      colors[name] = color;
    } else {
      colors[name] = color.reduce(reducer, {});
    }
  });

  return colors;
}

module.exports = generateColors;
