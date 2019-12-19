const openColor = require('open-color');

function generateColors() {
  const colors = {};

  Object.keys(openColor).forEach(function(name) {
    const color = openColor[name];

    if (typeof color === 'string') {
      colors[name] = color;
    } else {
      colors[name] = color.reduce(function(obj, hex, index) {
        const scale = (index + 1) * 100;
        obj[scale] = hex;

        return obj;
      }, {});
    }
  });

  return colors;
}

module.exports = generateColors;
