const express = require('express')
const router = express.Router()
const Page = require('../models/index')
const User = require('../models/index')
const { addPage } = require('../views')

router.get('/', async (req, res) => {
  const allPages = await Page.findAll();
})

router.post('/', (req, res) => {
  //code to submit new page to database

})

router.get('/add', (req, res) => {
  //code to add a new page
  res.send(addPage());
})

module.exports = router;
