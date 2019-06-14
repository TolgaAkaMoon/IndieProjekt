
// Change .navbar when i scroll higher than 30px //
document.querySelector(".navbar").style.position = "fixed";
document.querySelector(".navbar").style.top = "0";

// Products //
let results = [
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers Magnetic Sticker", price: 1},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x SteelSeries Mousepad", price: 39, label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x Addidas", price: 20, label: "sold"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers White Hoodie 2019", price: 29},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers Black Sweatpants", price: 19, label: "hot"},
    {img: "./assets/img/Nike.png", desc: "Geared Gamers x Nike Therma Hooded Sweatshirt", price: 49, label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers - Black Tee-Shirt", price: 15},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers - White Tee-Shirt", price: 10, label: "sold"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers Skull Hoodie Black", price: 59},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x Logitech 2019 HD Webcam V1", price: 79},
    {img: "./assets/img/Nike.png", desc: "Geared Gamers Silver Necklase", price: 9, label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers 2018 League of Legends Poster", price: 5, label: "sold"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x FaZe 2018 Collection", price: 99, label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x G-Fuel (Red Lime)", price: 25},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers Logo Black Dad Hat", price: 35},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers 2019 Pro Jersey", price: 30},
    {img: "./assets/img/Nike.png", desc: "Geared Gamers 2017 Fall Hoodie Brushed", price: 199, label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers ARCTIC 1 RGB Keyboard (Black)", price: 109, label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers Skull Hoodie Gradient", price: 65},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers 2019 Summer Collection -- Jacket", price: 149},
    {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x Off-White 2019 Hoodie", price: 599, label: "new"}
];

let Sortby_low = document.querySelector('.sortby__low');
let sortby_high = document.querySelector('.sortby__high');

Sortby_low.addEventListener("click", function(){
  console.log(results.sort((a,b) =>  a.price-b.price ))
});

sortby_high.addEventListener("click", function(){
  console.log(results.sort((a,b) =>  b.price-a.price ))
});

results.forEach(element => {
  if(element.label){
      document.querySelector('.merch').innerHTML +=
    `<figure class="merch__fig">
      <a class="fig__anker" href="#">
          <div class="anker__div"><img class="anker__img" src=${element.img}></div>
          <div class="anker--${element.label}"><span class="hot--${element.label}">${element.label}</span></div>
          <figcaption class="anker__desc">${element.desc}</figcaption>
          <figcaption class="anker__price">$${element.price}</figcaption>
      </a>
  </figure>`;
  } else {
      document.querySelector('.merch').innerHTML +=
   `<figure class="merch__fig">
       <a class="fig__anker" href="#">
          <div class="anker__div"><img class="anker__img" src=${element.img}></div>
          <figcaption class="anker__desc">${element.desc}</figcaption>
          <figcaption class="anker__price">$${element.price}</figcaption>
       </a>
   </figure>`;
  }
});
