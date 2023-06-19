window.addEventListener('load', function() {
  var productList = document.getElementById("product-list");
  
  for (var i = 4; i <= 6; i++) {
    var newListItem = document.createElement("li");
    newListItem.innerText = "Product " + i;
    productList.appendChild(newListItem);
  }

  // now add event listeners to all li elements within #product-list
  var productItems = productList.getElementsByTagName('li');
  for (var i = 0; i < productItems.length; i++) {
    productItems[i].addEventListener('click', function(event) {
      var listItem = event.target;
      fetch('https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random() * 100 + 1))
      .then(response => response.json())
      .then(json => {
        var bodyPara = document.createElement('p');
        bodyPara.innerText = json.body;
        listItem.appendChild(bodyPara);
      });
    });
  }
});
