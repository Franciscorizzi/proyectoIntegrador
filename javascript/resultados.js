location.search
let querystring = location.search
console.log(querystring);

let querystringobj = new URLSearchParams(querystring);
console.log(querystringobj);

let busqueda = querystringobj.get("search");
console.log(busqueda);

let proxi = " https://cors-anywhere.herokuapp.com/";
let url = proxi+ "https://api.deezer.com/search/artist?q="+ busqueda;
console.log(url);

let titulo = document.querySelector(".enunciado");
console.log(titulo);


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(datos){
   let lista = document.querySelector(".lista");
   let resultados = datos.data;
    console.log(datos);
   resultados.forEach(function(resultado){
    lista.innerHTML += "<li style='height: 50px;'>" + resultado.name +"</li>"
   });
   titulo.innerHTML += "Estos fueron los resultados para '" + busqueda +"'";
})
.catch(function(error){
    console.log(error);
})

