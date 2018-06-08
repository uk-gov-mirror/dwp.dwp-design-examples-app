const express = require('express')
const router = express.Router()
const {getCodeFiles} = require('./functions')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/example/:example', (req, res) => {
  const example = req.params.example
  const content = require(`./views/design-examples/${example}/_page-content`)
  const code = getCodeFiles(example)
  res.render('example-page/template', {example, content, code})
})

router.get('/live-demo/:example', (req, res) => {
  const example = req.params.example
  const content = require(`./views/design-examples/${example}/_page-content`)
  const code = getCodeFiles(example)
  res.render('live-demo/template', {example, content, code})
})

module.exports = router
