// const a=require('random-fruits-name');
// console.log(a());
// console.log(a('es'));

const movieArt = require('movie-art')

movieArt('Oceans Eleven', (error, response) => {
    console.log(response)
    //=> http://path/to/oceans_eleven.jpg
})