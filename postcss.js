const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const fs = require('fs')
const atImport = require("postcss-import")

fs.readFile('css/styles.css', (err, css) => {
  if (err) {
    return console.log('oye leo hubo un errorts')
  }
  postcss([
    autoprefixer,
  ])
    .use(atImport())
    .process(css, { from: 'css/styles.css', to: 'dest/app.css' })
    .then(result => {
      fs.writeFile('dest/app.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dest/app.css.map', result.map.toString(), () => true)
      }
    })
})