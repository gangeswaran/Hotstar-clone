let movies = [
  {
    name: "falcon and the winter soldier",
    des: "the simple movie",
    image: "images/slider 2.PNG",
  },
  {
    name: "Loki",
    des: "",
    image: "./images/slider 1.PNG",
  },
  {
    name: "wanda vision",
    des: "",
    image: "./images/slider 3.PNG",
  },
  {
    name: "raya and the last dragon",
    des: "",
    image: "./images/slider 4.PNG",
  },
  {
    name: "luca",
    des: "",
    image: "./images/slider 5.PNG",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = 'slider';
  content.className = 'slider-content';
  h1.className = 'movies-title';
  p.className = 'movies-des';

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
}

for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 2500);

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers .forEach((item, i) =>{
  let containrDimensions = item.getBoundingClientRect();
  let containerWidth = containrDimensions.width;

  nxtBtns[i].addEventListener('click', () =>{
    item.scrollLeft +=containerWidth - 200 ;
  });
  preBtns[i].addEventListener('click', () =>{
    item.scrollLeft -=containerWidth + 200 ;
  });
})
