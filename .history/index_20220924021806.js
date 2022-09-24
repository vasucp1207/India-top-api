const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const port = 5000

app.use('/api', require('./'))

app.listen(() => {
    console.log(`app is running on server ${port}`)
})