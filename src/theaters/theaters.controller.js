const service = require("./theaters.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function list(req, res, next){
    const theaters = await service.list();

    const theatersWithMovies = await Promise.all(
      theaters.map(async (theater) => {
        const movies = await service.getMovies(theater.theater_id);
        theater.movies = movies;
        return theater;
      })
    );

   res.json({data:theatersWithMovies})
  }




module.exports = {
    list: [asyncErrorBoundary(list)]
}