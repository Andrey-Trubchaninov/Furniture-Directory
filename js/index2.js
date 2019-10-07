let desc = document.getElementById('desc');
let img = document.getElementById('img');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let select = document.getElementsByClassName('selected');
let requestURL = 'https://andrey-trubchaninov.github.io/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let catalog = request.response;
  addText(catalog);
}

function addText(jsonObj) {
  let list = jsonObj['list'];
  let myPara = document.createElement('span');

  myPara.textContent = list[3];
  desc.appendChild(myPara);
}