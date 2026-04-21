document.getElementById('searchForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const query = document.getElementById('query').value;
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      const results = document.getElementById('results');
      results.innerHTML = '';

      data.forEach(function(tvShow) {
        const name = tvShow.show.name;
        const url = tvShow.show.url;
        const image = tvShow.show.image ? tvShow.show.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
        const summary = tvShow.show.summary;

        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.textContent = url;

        const img = document.createElement('img');
        img.src = image;
        img.alt = name;

        const div = document.createElement('div');
        div.innerHTML = summary;

        article.appendChild(h2);
        article.appendChild(a);
        article.appendChild(img);
        article.appendChild(div);

        results.appendChild(article);
      });
    });