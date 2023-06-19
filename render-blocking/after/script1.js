function getRandomColor() {
  for (var e = "#", n = 0; n < 6; n++)
    e += "0123456789ABCDEF"[Math.floor(16 * Math.random())];
  return e;
}
window.addEventListener("load", function () {
  setInterval(function () {
    document.body.style.backgroundColor = getRandomColor();
  }, 5e3);
}),
  window.addEventListener("load", function () {
    document.getElementById("random-number").innerText =
      "Random number: " + Math.floor(100 * Math.random());
  }),
  window.addEventListener("load", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((e) => e.json())
      .then((e) => {
        document.getElementById("api-data").innerText = e.body;
      });
  }),
  window.addEventListener("load", function () {
    var e = document.createElement("li"),
      n = document.createElement("a");
    (n.href = "#"),
      (n.innerText = "New Item"),
      e.appendChild(n),
      document.querySelector("nav ul").appendChild(e);
  }),
  window.addEventListener("load", function () {
    document.querySelector("footer p").innerText = "New Footer Content";
  }),
  window.addEventListener("load", function () {
    for (var e = document.getElementById("product-list"), n = 4; n <= 6; n++) {
      var t = document.createElement("li");
      (t.innerText = "Product " + n), e.appendChild(t);
    }
    for (var o = e.getElementsByTagName("li"), n = 0; n < o.length; n++)
      o[n].addEventListener("click", function (e) {
        var n = e.target;
        fetch(
          "https://jsonplaceholder.typicode.com/posts/" +
            Math.floor(100 * Math.random() + 1)
        )
          .then((e) => e.json())
          .then((e) => {
            var t = document.createElement("p");
            (t.innerText = e.body), n.appendChild(t);
          });
      });
  });
