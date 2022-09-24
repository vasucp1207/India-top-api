const express = require('express')
const router = express.Router()

router.get('/scientists', (req, res) => { res.json('data about scientist') })
router.get('/historicalFigures')

module.exports = router