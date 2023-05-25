const knex = require("../db/connection")


function list(){
    return knex("theaters")
    .select("*")
}

function getMovies(theaterId){
    return knex('movies_theaters as mt')
    .join('movies', 'movies.movie_id', 'mt.movie_id')
    .where({theater_id: theaterId})
    .select('movies.*', 'mt.is_showing', 'mt.theater_id' )
}

function getTheaters(movieId){
    return knex('theaters')
    .join('movies_theaters', 'theaters,theater_id', 'movies_theaters.theater_id')
    .where({movie_id:movieId})
    .select('theaters.*', "mt.is_showing", "mt.movie_id")
}


module.exports = {
    list,
    getMovies,
    getTheaters,
}