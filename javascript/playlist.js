let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistWrapper') ;

if(recuperoStorage == null || recuperoStorage.length <= 0){
    playlist = [] ;
    playlistWrapper.innerHTML += '<li> No hay canciones </li>' 
    console.log(playlistWrapper) ; 
}else{
    playlist.array.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack) ;
    });
        
}
function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/' ;
    let url = proxy + 'https://api.deezer.com/track/' + idTrack ;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(track){
        playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + 
        track.id + '">' + track.title + '</li>'
    })
    .catch(function(errors){
        console.log(errors);
    })
};
