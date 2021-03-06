var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})

// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name': 'Foo' })
})

// Branching

router.get('/examples/over-18', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18

  if (over18 === 'false') {
    // redirect to the relevant page
    res.redirect('/examples/under-18')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18')
  }
})

// add your routes here

// rep-check branch
router.get('/rep-add', function (req, res) {
  var addRep = req.query.addRep
  var oisc = req.query.oisc

  if (addRep === 'false') {
    res.redirect('/sponsor-numbers')
  } else if (oisc === 'true') {
    res.redirect('/rep-add-oisc')
  } else {
    res.render('rep-add')
  }
})

// 'not on Companies House' branch
router.get('/company-searchresult', function (req, res) {
  var isOnCompaniesHouse = req.query.onCompHouse

  if (isOnCompaniesHouse == 'No') {
    res.redirect('/org-type')
  } else {
    res.render('company-searchresult')
  }
})

module.exports = router
