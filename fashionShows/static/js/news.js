
const container = document.getElementById('news-container');
const socket = new WebSocket('ws://' + window.location.host + '/ws/fashion_news/');

socket.onopen = function(e) {
    console.log('WebSocket connection established');
    socket.send("Send some news")
};

socket.onmessage = function(e) {
    const data = JSON.parse(e.data);

    if (data.type === 'news') {
        const articles = data.articles;

        if (articles.length > 0) {
            container.innerHTML = '';

            for (let i = 0; i < articles.length; i++) {
                const article = articles[i];
                const title = document.createElement('h2');
                const description = document.createElement('p');
                const publishedAt = document.createElement('p');
                const readMore = document.createElement('a');

                title.innerText = article.title;
                description.innerText = article.description;
                publishedAt.innerText = new Date(article.publishedAt).toLocaleString();
                readMore.innerText = 'Read More';
                readMore.href = article.url;
                readMore.target = '_blank';

                container.appendChild(title);
                container.appendChild(description);
                container.appendChild(publishedAt);
                container.appendChild(readMore);
            }
        } else {
            container.innerHTML = '<p>No news found</p>';
        }
    }
};

socket.onclose = function(e) {
    console.error('Socket closed unexpectedly');
};
