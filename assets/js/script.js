window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".navbar").style.position = "fixed";
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.position = "unset";
    document.querySelector(".navbar").style.top = "30px";
  }
}

// Making multiple element with multiple values inside one (let), for Products //
let results = [
    {img: "./assets/img/Tee-Shirt.png", desc: "Smart Phone", price: "$649", label: "new"},
];

// Takes info from the above (let) & adds an HTML for producs, with that info! //
results.forEach(element => {
    if(element.label){
        document.querySelector('.merch').innerHTML +=
    `<figure class="merch__fig">
        <a class="fig__anker" href="#">
            <img class="anker__img" src=${element.img}>
            <figcaption class="anker__desc">${element.desc}</figcaption>
            <figcaption class="anker__price">${element.price}</figcaption>
        </a>
    </figure>`;
    }
});