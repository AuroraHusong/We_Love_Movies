const knex = require("../db/connection");

function list(is_showing) {
    if (is_showing === "true") {
      return knex("movies")
        .whereIn(
          "movie_id",
          knex("movies_theaters")
            .select("movie_id")
            .where("is_showing", true)
        );
    } else {
      return knex("movies");
    }
  }

  function read(movieId) {
    return knex("movies")
    .select("*").where({movie_id: movieId}).first()
  }


  function getMovieTheaters(movieId){
    return knex("theaters")
    .join("movies_theaters", "theaters.theater_id", "movies_theaters.theater_id")
    .where({"movies_theaters.movie_id": movieId})
    .select("*")
  }

  function getMovieReviews(movieId){
    return knex('reviews')
    .join("critics", "reviews.critic_id", "critics.critic_id")
    .select("reviews.*")
    .where({"reviews.movie_id": movieId})
    
  }
  function getCritic(criticId){
    return knex("critics")
    .select("*")
    .where({"critic_id": criticId})
  }

module.exports = {
  list,
  read,
  getMovieTheaters,
  getCritic,
  getMovieReviews,
};