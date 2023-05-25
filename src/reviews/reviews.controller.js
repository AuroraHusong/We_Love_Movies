const service = require("./reviews.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function reviewExists(req, res, next){
    const {reviewId} = req.params
    const foundReview = await service.read(Number(reviewId))
    if(foundReview){
        res.locals.review = foundReview
        return next()
    } else{
        return res.status(404).json({error:"Review cannot be found"})
    }
}

async function update(req, res, next){
    
    const updatedReview = {
        ...res.locals.review,
        ...req.body.data,
    }
    await service.update(updatedReview)
      const updatedRev = await service.read(updatedReview.review_id)
      updatedRev.critic = await service.getCritic(updatedReview.critic_id)
      res.json({data: updatedRev})

}

async function destroy(req, res, next){
    const {reviewId} = req.params
    await service.delete(Number(reviewId))
    .then(()=> res.sendStatus(204))
}




module.exports = {
update: [reviewExists, asyncErrorBoundary(update)],
delete: [reviewExists, asyncErrorBoundary(destroy)],
};