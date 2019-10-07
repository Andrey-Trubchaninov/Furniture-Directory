let item = document.getElementById('item');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let requestURL = 'https://andrey-trubchaninov.github.io/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let catalog = request.response;
    populateMain(catalog);
}

function populateMain(jsonObj) {
    let list = jsonObj['list'];
    let myPara = document.createElement('span');
    let myPara2 = document.createElement('span');
    let myPara3 = document.createElement('span');
    myPara.textContent = list[0];
    myPara2.textContent = list[1];
    myPara3.textContent = list[2];
    item.appendChild(myPara);
    item2.appendChild(myPara2);
    item3.appendChild(myPara3);
}