
// Change .navbar when i scroll higher than 30px //
document.querySelector(".navbar").style.position = "fixed";
document.querySelector(".navbar").style.top = "0";


// Products //
let results = [
    {img: "./assets/img/Tee-Shirt.png", desc: "GG/Geared Gamers - White Tee-Shirt", price: "$39", label: "hot"},
    {img: "./assets/img/Nike.png", desc: "GG x Nike Therma-FIT Hooded Sweatshirt", price: "$50", label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "GG/Geared Gamers - White Tee-Shirt", price: "$29", label: "hot"},
    {img: "./assets/img/Tee-Shirt.png", desc: "GG/Geared Gamers - White Tee-Shirt", price: "$19", label: "sold"},
    {img: "./assets/img/Tee-Shirt.png", desc: "GG/Geared Gamers - White Tee-Shirt", price: "$29", label: "new"},
    {img: "./assets/img/Tee-Shirt.png", desc: "GG/Geared Gamers - White Tee-Shirt", price: "$40", label: "hot"},
];

results.forEach(element => {
  if(element.label){
      document.querySelector('.merch').innerHTML +=
    `<figure class="merch__fig">
      <a class="fig__anker" href="#">
          <div class="anker__div"><img class="anker__img" src=${element.img}></div>
          <div class="anker--${element.label}"><span class="hot--${element.label}">${element.label}</span></div>
          <figcaption class="anker__desc">${element.desc}</figcaption>
          <figcaption class="anker__price">${element.price}</figcaption>
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
