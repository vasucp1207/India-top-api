const express = require('express')
const router = express.Router()
const { getScientists, getHistorical,King,scientist,movies } = require('../controllers/getData')

const url = "https://www.thefamouspeople.com/indian-scientists.php"
router.get('/scientists', getScientists)
router.get('/historicalFigures', getHistorical)
router.get('/scientists/:id', scientist)
router.get('/historicalFigures/:id',King);
router.get('/movies',movies)

module.exports = router