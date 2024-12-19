// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useGetReviewsByUserIdQuery } from '../../../redux/features/reviews/reviewsApi'
// import { useNavigate } from 'react-router-dom'

// const UserReviews = () => {
//     const {user}= useSelector((state)=>state.auth)
//     const {data:reviews,error,isLoading}=useGetReviewsByUserIdQuery(user?._id)
//     const navigate=useNavigate()
//     if(isLoading) return <div>Loading...</div>
//     if(error) return <div>Failed to Load Reviews</div>

//     const handleCardClick = ()=>{
//         navigate('/shop')
//     }

//   return (
//     <div className='py-6'>
//     <h2 className='text-2xl font-bold mb-8'>Your Given Reviews</h2>
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8'>
//         {
//             reviews && reviews.map((review,index)=>(
//                 <div key={index} className='bg-white shadow-md rounded-lg p-4 border-gray-200 cursor-pointer hover:scale-105 transition-all duration-200'>
//                 <p className='text-lg font-semibold mb-2'>Rating: {review?.rating}</p>
//                 <p className='mb-2'><strong>Comment:</strong>{review?.comment}</p>
//                 <p className='text-sm text-gray-500'><strong>ProductId:</strong>{review?.productId}</p>
//                 <p className='mb-2'><strong>Date:</strong>{new Date (review?.createdAt).toLocaleDateString()}</p>
//                 </div>

//             ))
//         }

//         <div 
//         onClick={handleCardClick}
//         className='bg-gray-300 text-black flex items-center justify-center rounded-lg
//         p-6 border cursor-pointer hover:bg-primary hover:text-white transition-all duration-200'>
//             <span>+</span>
//             <p>Add New Reviews</p>
//         </div>
//     </div>
      
//     </div>
//   )
// }

// export default UserReviews
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetReviewsByUserIdQuery } from '../../../redux/features/reviews/reviewsApi';
import { useNavigate } from 'react-router-dom';

const UserReviews = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: reviews, error, isLoading } = useGetReviewsByUserIdQuery(user?._id);
  const navigate = useNavigate();

  if (isLoading) return <div className="text-center py-8 text-xl text-gray-600">Loading...</div>;
  if (error) return <div className="text-center py-8 text-xl text-red-600">Failed to Load Reviews</div>;

  const handleCardClick = () => {
    navigate('/shop');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">Your Reviews</h2>
      
      {/* Display Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className={`text-white text-sm font-semibold py-1 px-3 rounded-full ${getRatingColor(review?.rating)}`}>
                  {review?.rating} ★
                </div>
                <p className="text-sm text-gray-600">Review Date: {new Date(review?.createdAt).toLocaleDateString()}</p>
              </div>

              {/* Review Comment */}
              <p className="text-lg font-medium text-gray-800 mb-4">
                <strong>Comment:</strong> {review?.comment}
              </p>

              {/* Product ID */}
              <p className="text-sm text-gray-500">
                <strong>Product ID:</strong> {review?.productId}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-lg text-gray-500 col-span-full">No reviews found.</div>
        )}

        {/* Add New Review Card */}
        <div
          onClick={handleCardClick}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center flex flex-col items-center justify-center rounded-lg p-6 cursor-pointer hover:bg-indigo-600 transition-all duration-300"
        >
          <span className="text-4xl font-bold mb-2">+</span>
          <p className="text-xl font-medium">Add New Review</p>
        </div>
      </div>
    </div>
  );
};

// Helper function to get the background color for the rating badge
const getRatingColor = (rating) => {
  if (rating >= 4) return 'bg-green-500'; // 4 and 5 stars - green
  if (rating === 3) return 'bg-yellow-400'; // 3 stars - yellow
  return 'bg-red-500'; // 1 and 2 stars - red
};

export default UserReviews;
