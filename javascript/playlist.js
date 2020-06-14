let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistWrapper') ;
console.log(playlist) ;

if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [] ;
    playlistWrapper.innerHTML += '<h2> No hay canciones </h2>' 
    console.log(playlistWrapper) ; 
}else{
    playlist.forEach(track => {
    playlistWrapper.innerHTML += `<li>  <a href="dTrack.html?id= ${track.id } "> <audio controls><source src="${track.preview}"> </source> </audio> </li>`
         //{/* <p class = "id.name"> $ {track.album.title} </p> */}
              
     });
}






let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    window.localStorage.clear('playlist')
})








// if(recuperoStorage == null || recuperoStorage.length <= 0){
//     playlist = [] ;
//     playlistWrapper.innerHTML += '<li> No hay canciones </li>' 
//     console.log(playlistWrapper) ; 
// }else{
//     playlist.forEach(function(idTrack){
//         buscarYMostrarTrack(idTrack) ;
//     }) ;
// }
// function buscarYMostrarTrack(idTrack){
//     let proxy = 'https://cors-anywhere.herokuapp.com/' ;
//     let url = proxy + 'https://api.deezer.com/track/' + idTrack ;
//     fetch(url)
//     .then(function(response){
//         return response.json() ;
//     })
//     .then(function (trackT){
//         playlistWrapper.innerHTML+= '<li>' + '<a href="track.html?id=' + track.id + '">' + track.title + '</li>'
//     })
//     .catch(function(errors){
//         console.log(errors) ;
//     })

// }
//------------

    // playlist.forEach(trackT => {
    //     playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + track.id + '">' +  '<audio controls><source src="'+track.preview +'"type="audio/mp3"></audio> '+ '</li>'
    // })
        

// let clear = document.querySelector('.clear')
// clear.addEventListener('click', function(){
//     window.localStorage.clear('playlist')
// })
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

