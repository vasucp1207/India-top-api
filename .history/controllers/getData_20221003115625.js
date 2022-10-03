const axios = require('axios')
const cheerio = require('cheerio')

let scientistData = []
let famousData = []

const sendResponse = (html, $) => {
    let data = []
    $('article.feature', html).each(function () {
        const title = $('a.tileLink', this).text()
        const url = $('a.tileLink', this).attr('href')
        const img = $('img.img-responsive', this).attr('src')
        const birthday = $('div.desc-q:nth-child(1)', this).text()
        const sign = $('div.desc-q:nth-child(2)', this).text()
        const birthplace = $('div.desc-q:nth-child(3)', this).text()
        const died = $('div.desc-q:nth-child(4)', this).text()
        const description = $('div.descEvent', this).text()

        if (title !== "") {
            data.push({
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

    return data
}

const getScientists = (req, res) => {
    axios.get("https://www.thefamouspeople.com/indian-scientists.php")
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            scientistData = sendResponse(html, $)
            res.status(200).json(scientistData)
        })
        .catch(err => res.status(404).json({ message: 'No Scientists Data Found' }))
}

const getHistorical = (req, res) => {
    axios.get("https://www.thefamouspeople.com/indian-historical-personalities.php")
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            famousData = sendResponse(html, $)
            res.status(200).json(famousData)
        })
        .catch(err => res.status(404).json({ message: 'No Historical Figures Data Found' }))
}

const King = (req, res) => {
    const id = req.params.id;
    let ScientistsData = [];
    axios.get("https://www.thefamouspeople.com/indian-historical-personalities.php")
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $("article.feature", html).each(function () {
                const title = $("a.tileLink", this).text();
                const url = "https:" + $("a.tileLink", this).attr("href");
                const img = "https:" + $("a.tileLink > img", this).attr("src");
                const birthday = $("div.desc-q:nth-child(1)", this).text();
                const sign = $("div.desc-q:nth-child(2)", this).text();
                const birthplace = $("div.desc-q:nth-child(3)", this).text();
                const died = $("div.desc-q:nth-child(4)", this).text();
                const description = $("div.descEvent", this).text();
                const birth = {
                    birthday: birthday,
                    sign: sign,
                    birthplace: birthplace,
                    died: died,
                };
                if (title !== "")
                    ScientistsData.push({
                        img,
                        title,
                        url,
                        birth,
                        description,
                        description,
                    });
            });

            const scnt = ScientistsData.filter(data => data.title == id)
            res.json(scnt)
        });

}
const scientist = (req, res) => {
    const id = req.params.id;
    let ScientistsData = [];
    axios.get("https://www.thefamouspeople.com/indian-scientists.php")
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $("article.feature", html).each(function () {
                const title = $("a.tileLink", this).text();
                const url = "https:" + $("a.tileLink", this).attr("href");
                const img = "https:" + $("a.tileLink > img", this).attr("src");
                const birthday = $("div.desc-q:nth-child(1)", this).text();
                const sign = $("div.desc-q:nth-child(2)", this).text();
                const birthplace = $("div.desc-q:nth-child(3)", this).text();
                const died = $("div.desc-q:nth-child(4)", this).text();
                const description = $("div.descEvent", this).text();
                const birth = {
                    birthday: birthday,
                    sign: sign,
                    birthplace: birthplace,
                    died: died,
                };
                if (title !== "")
                    ScientistsData.push({
                        img,
                        title,
                        url,
                        birth,
                        description,
                        description,
                    });



            });
            const scnt = ScientistsData.filter(data => data.title == id)
            res.json(scnt)

        });


}

const movies = (req, res) => {
    const moviesData = [];

    axios.get("https://www.timeout.com/film/the-100-best-bollywood-movies-the-list")

        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);
            $("article.tile", html).each(function () {
                let img = $("div._imageWrap_1p2xe_229> img", this).attr('src');
                let name = $("div._title_1p2xe_9 > a", this).text();
                let director = $("p:nth-child(1)", this).text();
                let cast = $("p:nth-child(2)", this).text();
                let genre = $("p:nth-child(3)", this).text();
                let summary = $("p:nth-child(4)", this).text();
                let the_big_scene = $("p:nth-child(5)", this).text();

                moviesData.push({
                    img,
                    name,
                    director,
                    cast,
                    genre,
                    summary,
                    the_big_scene
                })

            })

            res.json(moviesData)

        })
}

module.exports = {
    getScientists,
    getHistorical,
    King,
    scientist,
    movies
}