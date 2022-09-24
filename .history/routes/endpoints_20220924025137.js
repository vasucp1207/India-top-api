const express = require('express')
const router = express.Router()
const { getScientists, getHistorical } = require('../controllers/getData')

router.get('/scientists', getScientists)
router.get('/historicalFigures', getHistorical)

module.exports = router