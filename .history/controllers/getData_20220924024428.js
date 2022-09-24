const axios = require('axios')
const cheerio = require('cheerio')

const scientistData = []
const getScientists = (req, res) => {
    axios.get("https://www.thefamouspeople.com/indian-scientists.php")
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('article.feature', html).each(function() {
            const title = $('a.tileLink', this).text()
            const url = $('a.tileLink', this).attr('href')
            const birthday = $('div.desc-q', this).text()
            const birthplace = $()
            const died = $()
            const description = $('div.descEvent', this).text()
            const sign = $()

            if (title !== "") {
                scientistData.push({
                    title,
                    url,
                    birthday,
                    // birthplace,
                    // sign,
                    // died,
                    description
                })
            }
        })

        res.json(scientistData)
    })
}

module.exports = {
    getScientists,
}