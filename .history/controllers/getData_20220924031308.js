const axios = require('axios')
const cheerio = require('cheerio')

const scientistData = []
const famousData = []

const sendResponse = () => {
    
}
const getScientists = (req, res,) => {
    sendResponse()
    axios.get("https://www.thefamouspeople.com/indian-scientists.php")
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('article.feature', html).each(function() {
            const title = $('a.tileLink', this).text()
            const url = $('a.tileLink', this).attr('href')
            const img = $('img.img-responsive', this).attr('src')
            const birthday = $('div.desc-q:nth-child(1)', this).text()
            const sign = $('div.desc-q:nth-child(2)', this).text()
            const birthplace = $('div.desc-q:nth-child(3)', this).text()
            const died = $('div.desc-q:nth-child(4)', this).text()
            const description = $('div.descEvent', this).text()

            if (title !== "") {
                scientistData.push({
                    title,
                    url: "https:" + url,
                    img: "https:" + img,
                    birthday,
                    birthplace,
                    sign,
                    died,
                    description
                })
            }
        })

        res.json(scientistData)
    })
}

const getHistorical = (req, res) => {
    axios.get("https://www.thefamouspeople.com/indian-historical-personalities.php")
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('article.feature', html).each(function() {
            const title = $('a.tileLink', this).text()
            const url = $('a.tileLink', this).attr('href')
            const img = $('img.img-responsive', this).attr('src')
            const birthday = $('div.desc-q:nth-child(1)', this).text()
            const sign = $('div.desc-q:nth-child(2)', this).text()
            const birthplace = $('div.desc-q:nth-child(3)', this).text()
            const died = $('div.desc-q:nth-child(4)', this).text()
            const description = $('div.descEvent', this).text()

            if (title !== "") {
                famousData.push({
                    title,
                    url: "https:" + url,
                    img: "https:" + img,
                    birthday,
                    birthplace,
                    sign,
                    died,
                    description
                })
            }
        })

        res.json(famousData)
    })
}

module.exports = {
    getScientists,
    getHistorical
}