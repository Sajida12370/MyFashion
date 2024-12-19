// const express = require('express')
// const Reviews = require('./reviews.model')
// const Products = require('../products/products.model')
// const router = express.Router()


// // post a new review

// router.post("/post-review",async(req,res)=>{

//     try {
//         const {comment,rating,productId,userId} =req.body
//         if(!comment || !rating || !productId || !userId){
//             return res.status(400).send({message:"All fields are required"})
//         }
//         const existingReview =  await Reviews.findOne({productId,userId})
//         if(existingReview){
//             //update reviews
//             existingReview.comment=comment
//             existingReview.rating=rating
//             await existingReview.save()

            
//         }else{
//             // create new review
//             const newReview=new Reviews({
//                 comment,rating,productId,userId


//             })
//             await newReview.save()
//         }

//         //avg rating
//         const reviews = await Reviews.find({productId})
//         if(reviews.length > 0){
//             const totalRating = reviews.reduce((acc,review)=>acc+review.rating,0)
//             const averageRating = totalRating / reviews.length
//             const product = await Products.findById(productId)

//             if(product){
//                 product.rating= averageRating
//                 await product.save({validateBeforeSave:false})

//             }else {
//                 return res.status(404).send({message:"Product not found"})
//             }

//         }

//         res.status(200).send({
//             message:"Review Posted Succesfully",
//             reviews:reviews

//         })

        
//     } catch (error) {

//         console.error("error posting review",error)
//         res.status(500).send({message:"Failed to post review"})
        
//     }
// })

// module.exports= router
const express = require('express');
const Reviews = require('./reviews.model');
const Products = require('../products/products.model');
const router = express.Router();
const mongoose = require('mongoose'); 

// Post a new review
router.post("/post-review", async (req, res) => {
    console.log("Received request:", req.body); // Log incoming request

    try {
        const { comment, rating, productId, userId } = req.body;

        // Validate inputs
        if (!comment || !rating || !productId || !userId) {
            return res.status(400).send({ message: "All fields are required" });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).send({ message: "Rating must be between 1 and 5" });
        }

        const existingReview = await Reviews.findOne({ productId, userId });
        let reviewResponse;

        if (existingReview) {
            // Update existing review
            existingReview.comment = comment;
            existingReview.rating = rating;
            reviewResponse = await existingReview.save();
        } else {
            // Create new review
            const newReview = new Reviews({
                comment, rating, productId, userId
            });
            reviewResponse = await newReview.save();
        }

        // Average rating calculation
        const reviews = await Reviews.find({ productId });
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = totalRating / reviews.length;

            const product = await Products.findById(productId);
            if (product) {
                product.rating = averageRating;
                await product.save({ validateBeforeSave: false });
            } else {
                return res.status(404).send({ message: "Product not found" });
            }
        }

        res.status(200).send({
            message: "Review posted successfully",
            review: reviewResponse // Return the created/updated review
        });

    } catch (error) {
        console.error("Error posting review:", error.message);
        res.status(500).send({ message: "Failed to post review" });
    }
});

// total reviews count
router.get('/total-reviews',async(req,res)=>{

    try {
        const totalReviews=await Reviews.countDocuments({})
        res.status(200).send({totalReviews})
        
    } catch (error) {
        console.error("Error getting total review:", error.message);
        res.status(500).send({ message: "Failed to count review" });
        
    }
})

// get review by userId

// router.get('/:userId',async(req,res)=>{

//     const {userId}=req.params
//     if(!userId){
//         return res.status(400).send({message:"User Id is required"})
//     }

//     try {
//         const reviews=await Reviews.find({userId:userId}).sort({createdAt:-1})
//         if(review.length === 0){
//             return res.status(404).send({message:"no reviews found"})
//         }

//         res.status(200).send(reviews)
        
//     } catch (error) {
//         console.error("Error fetching  review: by user", error.message);
//         res.status(500).send({ message: "Failed to fetch  review  by user" });
        
//     }
// })
// router.get('/:userId', async (req, res) => {
//     const { userId } = req.params;

//     // Ensure userId is valid
//     if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
//         return res.status(400).send({ message: "Invalid or missing userId" });
//     }

//     try {
//         // Convert userId to ObjectId (necessary for querying MongoDB)
//         const objectIdUserId = mongoose.Types.ObjectId(userId);

//         // Fetch reviews for the given userId
//         const reviews = await Reviews.find({ userId: objectIdUserId }).sort({ createdAt: -1 });

//         // Check if any reviews were found
//         if (reviews.length === 0) {
//             return res.status(404).send({ message: "No reviews found for this user" });
//         }

//         // Return reviews if found
//         res.status(200).send(reviews);
//     } catch (error) {
//         console.error("Error fetching reviews by user:", error.message);
//         res.status(500).send({ message: "Failed to fetch reviews" });
//     }
// });

// get review by userId
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    // Ensure userId is valid
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send({ message: "Invalid or missing userId" });
    }

    try {
        // Convert userId to ObjectId (necessary for querying MongoDB)
        const objectIdUserId = new mongoose.Types.ObjectId(userId); // This is the correct way to instantiate ObjectId

        // Fetch reviews for the given userId
        const reviews = await Reviews.find({ userId: objectIdUserId }).sort({ createdAt: -1 });

        // Check if any reviews were found
        if (reviews.length === 0) {
            return res.status(404).send({ message: "No reviews found for this user" });
        }

        // Return reviews if found
        res.status(200).send(reviews);
    } catch (error) {
        console.error("Error fetching reviews by user:", error.message);
        res.status(500).send({ message: "Failed to fetch reviews" });
    }
});

module.exports = router;
