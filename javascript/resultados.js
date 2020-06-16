location.search
let querystring = location.search
console.log(querystring);

let querystringobj = new URLSearchParams(querystring);
console.log(querystringobj);

let busqueda = querystringobj.get("search");
console.log(busqueda);

let proxi = " https://cors-anywhere.herokuapp.com/";
let urlar = proxi+ "https://api.deezer.com/search/artist?q="+ busqueda;
console.log(urlar);

let titulo = document.querySelector(".enunciado");
console.log(titulo);


fetch(urlar)
.then(function(response){
    return response.json();
})
.then(function(datos){
   let lista = document.querySelector(".listaAr");
   let resultados = datos.data;
    console.log(datos);
   resultados.forEach(function(resultado){
    lista.innerHTML += "<li style='height: 50px;'>"+"<a href='dartista.html?id="+resultado.id+"'>" + resultado.name +"</a>"+"</li>";
   });
   titulo.innerHTML += "Estos fueron los resultados para '" + busqueda +"'";
   if(busqueda !== resultados){
       alert("¡Uy! ¡Que canción rara que quisiste buscar!");
   }
})
.catch(function(error){
    console.log(error);
})





let urlt = proxi+ "https://api.deezer.com/search/track?q="+ busqueda;

fetch(urlt)
.then(function(response){
    return response.json();
})
.then(function(datos){
   let listat = document.querySelector(".listat");
   let resultados = datos.data;
    console.log(datos);
   resultados.forEach(function(resultado){
    listat.innerHTML += "<li style='height: 50px;'>"+"<a href='dtrack.html?id="+resultado.id+"'>" + resultado.title+"</a>" +", "+"<a href='dArtista.html?id="+ resultado.artist.id +"'>" + resultado.artist.name +"</a>"+"</li>";
   });
})
.catch(function(error){
    console.log(error);
})







let urlal = proxi+ "https://api.deezer.com/search/album?q="+ busqueda;

fetch(urlal)
.then(function(response){
    return response.json();
})
.then(function(datos){
   let listaal = document.querySelector(".listaal");
   let resultados = datos.data;
    console.log(datos);
   resultados.forEach(function(resultado){
    listaal.innerHTML += "<li style='height: 50px;'>"+"<a href='dalbum.html?id="+resultado.id+"'>" + resultado.title+"</a>" +", "+"<a href='dartista.html?id="+resultado.artist.id+"'>" + resultado.artist.name +"</a>"+"</li>";
   });
})
.catch(function(error){
    console.log(error);
})