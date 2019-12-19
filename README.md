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

## Basic usage

`tailwindcss-open-color` uses Open color's naming convention `{color}-{number}`. Here are examples of how you can use the color palette with Tailwind CSS's utilities:

```html
<h1 class="text-grape-5">Hello, world</h1>

<button class="bg-blue-0">Button</button>

<div class="border-orange-7">...</div>
```

Black `#000` and white `#fff` can be accessed the same way when using the default color palette with postfixes `-black` and `-white`:

```html
<h1 class="text-black bg-white">...</h1>
```

To browse all available colors, see https://yeun.github.io/open-color/.
