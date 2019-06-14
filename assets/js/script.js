
// Change .navbar when i scroll higher than 30px //
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".navbar").style.position = "fixed";
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.position = "absolute";
    document.querySelector(".navbar").style.top = "30px";
  }
}

// Products //
let results = [
  {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x SteelSeries Mousepad", price: 39, label: "new"},
  {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers x Addidas", price: 20, label: "sold"},
  {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers Black Sweatpants", price: 19, label: "hot"},
  {img: "./assets/img/Nike.png", desc: "Geared Gamers x Nike Therma Hooded Sweatshirt", price: 49, label: "new"},
  {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers - White Tee-Shirt", price: 10, label: "sold"},
  {img: "./assets/img/Tee-Shirt.png", desc: "Geared Gamers 2018 League of Legends Poster", price: 5, label: "sold"},
];

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
          <figcaption class="anker__price">${element.price}</figcaption>
       </a>
   </figure>`;
  }
});
