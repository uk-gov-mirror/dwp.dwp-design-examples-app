const fs = require('fs');
const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/example/:example', (req, res) => {
  const example = req.params.example
  const content = require(`./views/design-examples/${example}/_page-content`)
  const code = getCodeFiles(example)
  res.render('example', {example, content, code})
})

router.get('/live-demo/:example', (req, res) => {
  const example = req.params.example
  const content = require(`./views/design-examples/${example}/_page-content`)
  const code = getCodeFiles(example)
  res.render('live-demo', {example, content, code})
})

function getCodeFiles (example) {
  const code = {}
  if (fs.existsSync(__dirname + `/views/design-examples/${example}/index.html`)) {
    code.HTML = fs.readFileSync(__dirname + `/views/design-examples/${example}/index.html`)
  }
  if (fs.existsSync(__dirname + `/views/design-examples/${example}/scripts.js`)) {
    code.JS = fs.readFileSync(__dirname + `/views/design-examples/${example}/scripts.js`)
  }
  if (fs.existsSync(__dirname + `/views/design-examples/${example}/styles.css`)) {
    code.CSS = fs.readFileSync(__dirname + `/views/design-examples/${example}/styles.css`)
  }
  if (fs.existsSync(__dirname + `/views/design-examples/${example}/_styles.scss`)) {
    code.SASS = fs.readFileSync(__dirname + `/views/design-examples/${example}/_styles.scss`)
  }
  if (fs.existsSync(__dirname + `/views/design-examples/${example}/sketch.zip`)) {
    code.SKETCH = `/views/design-examples/${example}/sketch.zip`
  }
  return code;
}

module.exports = router
