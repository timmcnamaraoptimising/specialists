window.addEventListener('load', function() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
    document.getElementById("api-data").innerText = json.body;
  });
});