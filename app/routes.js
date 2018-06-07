const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/example/:example', (req, res) => {
  const example = req.params.example
  const content = require(`./views/design-examples/${example}/_page-content`)
  res.render('example', {example, content})
})

router.get('/live-demo/:example', (req, res) => {
  const example = req.params.example
  const content = require(`./views/design-examples/${example}/_page-content`)
  res.render('live-demo', {example, content})
})

module.exports = router
