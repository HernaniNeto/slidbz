'use strict'

let images = [
  {'id': '1', 'url':'./img/gohan.jpg'},
  {'id': '2', 'url':'./img/goku.jpg'},
  {'id': '3', 'url':'./img/trunks.jpg'},
  {'id': '4', 'url':'./img/goten.jpg'},
  {'id': '5', 'url':'./img/vegetassj2.jpeg'},
  {'id': '6', 'url':'./img/gotenks.jpg'},
]

let containerItems = document.querySelector('#container-items')



let loadImages = (images, container) => {
  images.forEach (image => {
    container.innerHTML += `
     <div class="item">
        <img src='${image.url}'
        </div>
     `

  })

}





loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

let previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
}

let next = () => {
  let lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);