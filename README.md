# tailwindcss-open-color
[![Build Status](https://travis-ci.com/jonaskay/tailwindcss-open-color.svg?branch=master)](https://travis-ci.com/jonaskay/tailwindcss-open-color)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5114f73f33df3766c76f/test_coverage)](https://codeclimate.com/github/jonaskay/tailwindcss-open-color/test_coverage)

Replace Tailwind CSS's default color palette with [Open color](https://yeun.github.io/open-color/).

## Installation

To install the package, run

    npm install tailwindcss-open-color

To activate the color palette, modify your Tailwind CSS config file:

```javascript
module.exports = {
  theme: {
    colors: require('tailwindcss-open-color')
  }
}
```

To learn more about how to customize colors for your Tailwind CSS project, see https://tailwindcss.com/docs/customizing-colors/.
