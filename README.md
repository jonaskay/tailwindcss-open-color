# tailwindcss-open-color

Replace Tailwind CSS's default color palette with [Open color](https://yeun.github.io/open-color/).

## Installation

To install the package, run

    npm install tailwindcss-open-color

To active the color palette, modify your Tailwind CSS config file:

```javascript
module.exports = {
  theme: {
    colors: require('tailwindcss-open-color')
  }
}
```

To learn more about how to customize colors for your Tailwind CSS project, see https://tailwindcss.com/docs/customizing-colors/.
