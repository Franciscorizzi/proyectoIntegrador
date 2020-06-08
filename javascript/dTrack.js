let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idTrack = datos.get ('id');
console.log(idTrack);

let proxy = 'https://cors-anywhere.herokuapp.com/'
