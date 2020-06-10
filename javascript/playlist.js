let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistWrapper') ;


if(recuperoStorage == null || recuperoStorage.length <= 0){
    playlist = [] ;
    playlistWrapper.innerHTML += '<li> No hay canciones </li>' 
    console.log(playlistWrapper) ; 
}else{
    playlist.forEach(track => {

        playlistWrapper.innerHTML += '<li>' + '<a href="dTrack.html?id=' + track.id + '">' +  '<audio controls><source src="'+ track.preview +'"></source> </audio>  </li>'
       
    });
        
}
let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    window.localStorage.clear('playlist')
})
//  function buscarYMostrarTrack(){
     
//      return playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + this.id + '">' + this.title + '</li>'
        
    // let proxy = 'https://cors-anywhere.herokuapp.com/' ;
    // let url = proxy + 'https://api.deezer.com/track/' + this.id ;

    // fetch(url)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(track){
        // playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + 
        // this.id + '">' + this.title + '</li>'
    
    // .catch(function(errors){
    //     console.log(errors);
    // })
// };

