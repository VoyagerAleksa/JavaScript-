const form = document.querySelector('form');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const value = document.getElementById('query').value.trim();

  if (!value) {
    console.log("Enter the title of the series");
    return;
  }

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("=== Search results ===");
    console.log(data);

  } catch (error) {
    console.error("Request error:", error);
  }
});
