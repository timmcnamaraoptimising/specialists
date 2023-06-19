window.addEventListener('load', function() {
  var newListItem = document.createElement("li");
  var newLink = document.createElement("a");
  newLink.href = "#";
  newLink.innerText = "New Item";
  newListItem.appendChild(newLink);
  
  document.querySelector("nav ul").appendChild(newListItem);
});
