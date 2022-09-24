const express = require('express')
const router = express.Router()
const { getScientists } = require('../controllers/getData')

router.get('/scientists', getScientists)
router.get('/historicalFigures')

module.exports = router