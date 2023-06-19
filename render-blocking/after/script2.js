window.addEventListener('load', function() {
  var randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("random-number").innerText = "Random number: " + randomNumber;
});
