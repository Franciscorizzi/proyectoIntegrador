console.log("hola");

let proxi = "https://cors-anywhere.herokuapp.com/";
let url = proxi + "https://api.deezer.com/genre";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(datos){
    let albums = datos.data;
    let columnader = document.querySelector(".der");
    let columnaizq = document.querySelector(".izq");
    console.log(albums);
    for(let i =0 ; i<14 ; i++){
        columnader.innerHTML += "<a href='dgenero.html?id="+albums[i].id+"'>" +"<div class='genre'><h2>" +albums[i].name+"</h2></div></a>";
        let genre = document.querySelectorAll(".genre");
        genre[i].style.backgroundImage = "url('"+albums[i].picture_big+"')";
    }
    for(let i =14 ; i<28 ; i++){
        columnaizq.innerHTML += "<a href='dgenero.html?id="+albums[i].id+"'>" +"<div class='genre'><h2>" +albums[i].name+"</h2></div></a>";
        let genre = document.querySelectorAll(".genre");
        genre[i].style.backgroundImage = "url('"+albums[i].picture_big+"')";
    }

})