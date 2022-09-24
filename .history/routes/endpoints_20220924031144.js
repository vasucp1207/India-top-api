const express = require('express')
const router = express.Router()
const { getScientists, getHistorical } = require('../controllers/getData')

const url = "https://www.thefamouspeople.com/indian-scientists.php"
router.get('/scientists', getScientists(req, res, url))
router.get('/historicalFigures', getHistorical)

module.exports = router