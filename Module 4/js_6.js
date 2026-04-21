document.getElementById('searchForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const query = document.getElementById('query').value;
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      const results = document.getElementById('results');
      results.innerHTML = '';

      data.result.forEach(function(joke) {
        const article = document.createElement('article');

        const p = document.createElement('p');
        p.textContent = joke.value;

        article.appendChild(p);
        results.appendChild(article);
      });
    });