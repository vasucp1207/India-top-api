const express = require('express')
const router = express.Router()
const { getScientists, getHistorical } = require('../controllers/getData')

const url = ""
router.get('/scientists', getScientists(req, res, url))
router.get('/historicalFigures', getHistorical)

module.exports = router