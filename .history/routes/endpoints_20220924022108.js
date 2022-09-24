const express = require('express')
const router = express.Router()

router.get('/scientists', (req, res) => { console.log('data about scientist') })
router.get('/historicalFigures')

// module.exports = router