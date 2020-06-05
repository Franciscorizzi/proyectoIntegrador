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



let proxi = "https://cors-anywhere.herokuapp.com/";
let url = proxi +"https://api.deezer.com/chart/0";
console.log(url);

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let tracks = data.tracks.data;
    let charts = document.querySelector(".topsongs");
    let artist = data.artists.data;
    let  chartar = document.querySelector(".topartists");
    let albums = data.albums.data;
    let chartal = document.querySelector(".topalbums");
    console.log(tracks);
    tracks.forEach(function(canciones) {
        console.log(canciones.title);
        charts.innerHTML += '<div class="songs"><a href="dtrack.html?id='+ canciones.id +'">'+canciones.position +". " + canciones.title + '</a></div>'
    });
    artist.forEach(function(cantantes){
        chartar.innerHTML += '<div class="songs"><a href="dartista.html">'+cantantes.position +". " + cantantes.name + '</a></div>'
    });
    albums.forEach(function(albumes){
        chartal.innerHTML += '<div class="songs"><a href="dalbum.html">'+albumes.position +". " + albumes.title + '</a></div>'
    })
})