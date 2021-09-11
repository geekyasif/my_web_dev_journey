//  'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=your_apiKey_here


const cardGroup = document.getElementById('allCards')
const apiKey = "f44fe3073fa348b488d0c8ba983d8ef9"


const request = {
    entertainment: `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`,
    business: `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`,
    health: `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`,
    science: `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${apiKey}`,
    sports: `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`,
    technology:  `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`,
}


const fetchNews = () => {
    url = request.business
    fetch(url)
    .then( res => res.json())
    .then((data) => {
        console.log(data.articles)
        data.articles.map( (article) => {
                cardGroup.innerHTML +=  
                    `  <div class="col">
                            <div class="card" >
                                <a href="${article.url}"><img src="${article.urlToImage}" class="card-img-top" alt="..." height='200'></a>
                                <div class="card-body">
                                    <a href="${article.url}"><h6><span class="badge bg-secondary">${article.source.name}</span></h6></a>
                                    <a class="text-decoration-none text-dark" href="${article.url}"> <h5 class="card-title">${article.title}</h5> </a>
                                    <p class="card-text">${article.description}</p>
                                </div>
                                <div class="card-footer">
                                        <small class="text-muted">${article.publishedAt}</small>
                                </div>
                            </div>
                        </div>
                    `

        })
    })
    .catch(err => console.log(err))
}
fetchNews()