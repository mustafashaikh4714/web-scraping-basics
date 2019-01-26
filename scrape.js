const request = require('request')
const cheerio = require('cheerio')

request('http://mustafashaikh.ga', (err, res, html) => {
    if(!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        const footer = $('footer')
        // console.log("Html of footer",footer.html());
        // console.log("text of footer",footer.text());
        
        // console.log(footer.children().text());
        // console.log(footer.find('h1').parent().text());
        console.log(footer.find('h1').next().text());
        
        
    }
})