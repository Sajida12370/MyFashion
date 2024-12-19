// import React from 'react';
// import commentorIcon from '../../../assets/avatar.png';
// import { formatDate } from '../../../utils/formatDate';
// import RatingStar from '../../../components/RatingStar';

// const ReviewsCard = ({ productReviews }) => {
//     const reviews = productReviews || [];

//     return (
//         <div className='my-6 bg-white p-8'>
//             <div>
//                 {reviews.length > 0 ? (
//                     <div>
//                         <h3 className='text-lg font-medium'>All Comments</h3>
//                         <div>
//                             {reviews.map((review, index) => (
//                                 <div key={index} className='mt-4'>
//                                     <div className='flex items-center'>
//                                         <img src={commentorIcon} alt='' className='size-14' />
//                                         <div className='ml-2'>
//                                             {/* Ensure userId contains username */}
//                                             <p className='text-lg font-medium underline capitalize underline-offset-4 text-red-500'>{review.userId && review.userId.username ? review.userId.username : 'Anonymous'}</p>
//                                             <p className='text-[12px] italic'>{formatDate(review?.createdAt)}</p>
//                                             <RatingStar rating={review?.rating}/>
//                                         </div>
                                        
//                                     </div>
//                                     <div className=' text-gray-600 mt-5 border p-8'>
//                                             <p className='md:w-4/5'>{review?.comment}</p>
//                                         </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <p>No Reviews yet</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ReviewsCard;

import React, { useState } from 'react';
import commentorIcon from '../../../assets/avatar.png';
import { formatDate } from '../../../utils/formatDate';
import RatingStar from '../../../components/RatingStar';
import PostAReview from './PostAReview';


const ReviewsCard = ({ productReviews }) => {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const reviews = productReviews || [];

    const handleOpenReviewModal = ()=>{
        setIsModalOpen(true)

    }
    const handleCloseReviewModal = ()=>{
        setIsModalOpen(false)
    }

    return (
        <div className='my-6 bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105'>
            <h3 className='text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-4 mb-4'>Customer Reviews</h3>
            {reviews.length > 0 ? (
                <div>
                    {reviews.map((review, index) => (
                        <div key={index} className='flex items-start mb-6 p-4 border-b border-gray-200 last:border-none hover:bg-gray-50 transition duration-200'>
                            <img src={commentorIcon} alt='' className='w-12 h-12 rounded-full shadow-md' />
                            <div className='ml-4 flex-1'>
                                <div className='flex justify-between items-center mb-2'>
                                    <p className='text-lg font-semibold text-red-600'>{review.userId?.username || 'Anonymous'}</p>
                                    <p className='text-xs text-gray-500 italic'>{formatDate(review.createdAt)}</p>
                                </div>
                                <RatingStar rating={review.rating} />
                                <div className='mt-2 bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-md shadow-inner'>
                                    <p className='text-gray-700'>{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='text-gray-500 text-lg'>No reviews yet.</p>
            )}
            {/* add review button */}

           <div className='mt-12'>
           <button 
           onClick={handleOpenReviewModal}
           
           className='px-6 py-3 bg-primary text-white rounded-md'>Add A Review</button>
           </div>

           {/* review modal */}
           <PostAReview isModalOpen={isModalOpen} handleClose={handleCloseReviewModal}/>
        </div>

        

        
    );
};

export default ReviewsCard;

