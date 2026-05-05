const result = document.querySelector('#clock');
setInterval(function () {
  let date = new Date();
  result.innerHTML = date.toLocaleDateString();
}, 1000);