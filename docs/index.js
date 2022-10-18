const api = "https://newsapi.org/v2/everything?q=keyword&apiKey=fd6c34dff05b41799992fc63f99efbb1";
let newsData = "";

let thumbnail = document.getElementById('thumbnail');
let title = document.getElementById('title');
let news = document.getElementById('news');
let newsAuthor = document.getElementById('newsAuthor');
let thumb = "";
let next = document.getElementById('next');

const printnews = () => {
    const random = Math.floor(Math.random() * 100);
    const fullNews = [newsData][0].articles[random];
    
    thumb = fullNews.urlToImage;
    if (thumb == null) {
        console.log("image not found");
    }
    thumbnail.src = thumb;
    title.innerText = fullNews.title;
    news.innerText = fullNews.content;
    newsAuthor.innerText = fullNews.author;
    
    console.log(fullNews);
}

const getNews = async () => {
    try {

        let news = await fetch(api);
        newsData = await news.json();
        
        // console.log(newsData);

        printnews();
    } catch (error) {

        console.log(error);
        
    }
    
}

getNews();

next.addEventListener('click', printnews);

