
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

let urla = proxi+"https://api.deezer.com/genre/"+idgenero+"/artists";

fetch(urla)
.then(function(response){
    return response.json()
})
.then(function(data){

    let respuesta = data.data;
    console.log(respuesta);
    let lista = document.querySelector(".listadeautores");
    for(let i=0; i<12; i++){
        console.log(respuesta[i]);
        
    lista.innerHTML += "<li><div class='artistas'><div class='fotoArtistas'><a href='dArtista.html?id="+respuesta[i].id+"'><img src='"+respuesta[i].picture_medium+"' alt='fotito'></a></div><div class='nombreArtistas'><a href='dArtista.html?id="+respuesta[i].id+"'>"+respuesta[i].name+"</a></div></div></li>";
    }
})