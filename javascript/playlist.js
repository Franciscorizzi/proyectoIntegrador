let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistWrapper') ;
console.log(playlist) ;

if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [] ;
    playlistWrapper.innerHTML += '<h2> ¡No hay canciones! </h2>' 
    console.log(playlistWrapper) ; 
}else{
    playlist.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
    });
}
function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/' ;
    let url = proxy + 'https://api.deezer.com/track/' + idTrack ;
    fetch(url)
    .then(function(response){
        return response.json() ;
    })
    .then(function(track){
        playlistWrapper.innerHTML+= '<li>' + '<a href="dTrack.html?id=' + track.id +'" class= "datos">'+ track.title_short +' '+ track.album.title +' '+ track.artist.name +'>' + '<audio controls class="audios"><source src="'+ track.preview +'"class="audios"></a></source></audio></li>'
    })
}







 {/* <p> <a href="dTrack.html?id=${track.id }" class="Song"> ${track.title_short}</p>
 <p class = "d.name"> $ {track.album.title} </p>
 <p><a href="dTrack.html?id= ${track.id } "></p>
 </div>
   });
 } */}






let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    window.localStorage.clear('playlist')
})








