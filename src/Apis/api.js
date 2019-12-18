
let axios = require('axios')

apikey="&apiKey=561be8faf679420599109e2f11cd4ac3"

export function getContents(key, limit) {
    return new Promise((resolve, reject) => {
        baseUrl = "https://newsapi.org/v2/top-headlines"
        country="?country=jp"
        key="?q="+key
        limitPage = "&num=" + limit
        accessUrl = baseUrl + country + apikey
        axios({
            method:"GET",
            url:accessUrl,
        })
            .then(res=>{
                resolve(res.data.articles)
            })
            .catch(res=>{
                console.log("error")
                reject()
            })
    })
}



