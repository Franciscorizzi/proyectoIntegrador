let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idTrack = datos.get ('id');
console.log(idTrack);

let proxy = 'https://cors-anywhere.herokuapp.com/' ;
let url = proxy + 'https://api.deezer.com/track/' + idTrack

fetch(url)
 .then(function(response){
     return response.json();
 })
 .then(function(data){
     console.log(data);
     let trackT = document.querySelector ('.trackT');
     trackT.innerHTML += data.type;
     trackT.style.textTransform = "uppercase" ;

     let nombreT = document.querySelector('.nombreT') ;
     nombreT.innerHTML = data.title ;

     let artista = document.querySelector ('.artista') ;
     artista.innerHTML = "<a href= '../HTML/dArtista.html?id=" + data.artist.id + "'>" + 
     "<h5>" + data.artist.name + "</h5> </a>"

     let fecha = document.querySelector('.fechaT') ;
     fecha.innerHTML = data.release_date;
     
     let fotoGrande = document.querySelector ('.fotoAlbumT') ;
     fotoGrande.innerHTML = "<img src= '" + data.album.cover_big + "' alt='foto'></img> " ;

     let fotoChica = document.querySelector ('.album') ;
     fotoChica.innerHTML = "<a href'dAlbum.html?id= " + data.album.id + "'> " + 
     "<img src = '" + data.album.cover_medium + "' alt= 'foto'>" + "<br>" + " <h5> "
     + data.album.title + "</h5> " +" </a>" ;
     

 })
 .catch(function(error){
     console.log(error) ;
 })
 
