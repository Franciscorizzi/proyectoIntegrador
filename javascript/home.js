console.log("hola");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active"; 
}


let songs = document.querySelector(".canciones");
console.log(songs);

let albums = document.querySelector(".albumes");
console.log(albums);

let autores = document.querySelector(".cantores");
console.log(autores);

let element = document.querySelector(".songs");

let proxi = " https://cors-anywhere.herokuapp.com/";
let url = proxi+ "https://api.deezer.com";
console.log(url);

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(datos){
    console.log(datos);
})
.catch(function(error){
    console.log(error);
})



