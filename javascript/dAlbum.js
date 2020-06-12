console.log("hola");

let querystring = location.search;
let datos = new URLSearchParams(querystring);
let idAlbum = datos.get("id");
console.log(idAlbum);

let proxi = "https://cors-anywhere.herokuapp.com/";
let url = proxi +"https://api.deezer.com/album/"+ idAlbum;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let nombre = document.querySelector(".nombre");
    nombre.innerHTML= "<h1>"+ data.title + "</h1>";
   let fotoAl = document.querySelector(".fotoAl");
   fotoAl.innerHTML = '<div>' + '<img src="' +data.cover+ '"' + 'alt="">' + '</div>';
   let artista = document.querySelector('.artista');
   artista.innerHTML = '<a href="dArtista.html?id=' + data.artist.id + '">' + '<h5>' + data.artist.name + '</h5>' + '</a>';
    let fecha = document.querySelector(".fecha");
    fecha.innerHTML = '<h5>' + data.release_date +'</h5>';
   
    let datos = data.tracks.data;
    let listados = document.querySelector('.listados ol');
   
    datos.forEach(function(canciones){
        listados.innerHTML += '<div class="linea"> <div class="line"></div></div>' +'<div>'+'<a href="dtrack.html?id='+ canciones.id +'">' + '<li>' + canciones.title + '</li>' + '</a>' + '</div>';
    })
    
    


    
   
})