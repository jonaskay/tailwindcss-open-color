const generateColors = require('../src/generate-colors');

test('#generateColors() returns colors ojbect', function() {
  expect(generateColors()).toMatchSnapshot();
});
