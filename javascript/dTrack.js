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
     nombreT.innerHTML = "<h5>" + data.title + " </h5>";

     let artista = document.querySelector ('.artista') ;
     artista.innerHTML = "<a href= '../HTML/dArtista.html?id=" + data.artist.id + "'>" + 
     "<h5>" + data.artist.name + "</h5> </a>"

     let fecha = document.querySelector('.fechaT') ;
     fecha.innerHTML = data.duration+"s";
     
     let fotoGrande = document.querySelector ('.fotoAlbumT') ;
     fotoGrande.innerHTML = "<a href = '../HTML/dAlbum.html?id= " + data.album.id + "'> " + 
      "<img src= '" + data.album.cover_big + "' alt='foto'>" + " </a> </img> " ;

     let fotoChica = document.querySelector ('.album') ;
     fotoChica.innerHTML = "<a href = '../HTML/dAlbum.html?id= " + data.album.id + "'> " + 
     "<img src = '" + data.album.cover_medium + "' alt= 'foto'>" + "<br>" + " <h5> "
     + data.album.title + "</h5> " +" </a>" ;
     let player = document.querySelector('iframe')
     player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1';


    })
    .catch(function(error){
        console.log(error) ;
})

let playlist = []
let recuperoStorage = localStorage.getItem('playlist') ;
if(recuperoStorage == null){
    playlist = [];
}else {
    playlist = JSON.parse(recuperoStorage) ;
}

if(playlist.includes(idTrack)){
    document.querySelector('.botT').innerHTML = 'REMOVE FROM PLAYLIST'
}
let agregar = document.querySelector('.botT') ;
agregar.addEventListener('click', function(){
    if(playlist.includes(idTrack)){
        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.botT').innerHTML = 'ADD TO PLAYLIST' ;
        console.log(playlist);
    } else{
     playlist.push(idTrack);
     document.querySelector('.botT').innerHTML = 'REMOVE FROM PLAYLIST' ;

    }
     let playlistParaStorage = JSON.stringify(playlist) ;
     localStorage.setItem('playlist', playlistParaStorage) ;
     console.log(localStorage) ;
})

