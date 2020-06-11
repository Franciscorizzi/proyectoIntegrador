
let querystring = location.search;
let datos = new URLSearchParams(querystring);
let idgenero = datos.get("id");
console.log(idgenero);

let proxi = "https://cors-anywhere.herokuapp.com/";
let url = proxi +"https://api.deezer.com/genre/"+ idgenero;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let titulo = document.querySelector(".nombre");
    titulo.innerHTML = "<h1>"+data.name+"</h1>";
    let fondo = document.querySelector(".foto");
    fondo.innerHTML = "<img src='"+data.picture_medium+"' alt='foto'>";
    
})
