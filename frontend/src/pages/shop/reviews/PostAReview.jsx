// // import React, { useState } from 'react'
// // import { useSelector } from 'react-redux'
// // import { useParams } from 'react-router-dom'
// // import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi'
// // import { usePostReviewMutation } from '../../../redux/features/reviews/reviewsApi'

// // const PostAReview = ({isModalOpen,handleClose}) => {
// //     const {id}=useParams()
// //     const {user}=useSelector((state)=>state.auth)
// //     const [rating,setRating]=useState(0)
// //     const [comment,setComment]=useState('')

// //     const {refetch}=useFetchProductByIdQuery(id,{skip:!id})
// //     const [postReview] =usePostReviewMutation();

// //     const handleRating = (value)=>{
// //         setRating(value)

// //     }
// //     const handleSubmit = async(e)=>{
// //         e.preventDefault()
// //         const newComment ={
// //             comment:comment,
// //             rating:rating,
// //             userId:user?._id,
// //             productId:id
// //         }
// //        try {
// //         const response = await postReview(newComment).unwrap()

// //         alert("comment posted")
// //         setComment('')
// //         setRating(0)
// //         refetch()
        
// //        } catch (error) {
// //         alert(error.message)
        
// //        }
// //     }
// //   return (
// //     <div className={`fixed inset-0 bg-black/90 flex items-center justify-center z-40 px-2 
// //        ${isModalOpen ? 'block' : 'hidden'} `}>
// //        <div className='bg-white p-6 rounded-md shadow-lg w-96 z-50'>
// //        <h2 className='text-lg font-medium mb-4'>Post A Review</h2>

// //         <div className='flex items-center mb-4'>
// //         {
// //             [1,2,3,4,5,].map((star)=>(
// //                 <span key={star} 
// //                 onClick={()=>handleRating(star)}
                
// //                 className='cursor-pointer text-yellow-500 text-lg '>
// //                     {
// //                        [1,2,3,4,5].map((star)=>(
                        
// //                         <span className='cursor-pointer text-yellow-500 text-xl'>
// //                             {
// //                                 rating >= star && ? (<i className='ri-star-fill'></i>) : 
// //                                 (<i className='ri-star-line'></i>)
// //                             }
// //                         </span>

// //                        ))
// //                     }
// //                 </span>
// //             ))
// //         }

// //         </div>
// //         <textarea value={comment}
// //         onChange={(e)=>setComment(e.target.value)}
// //         rows="4"
// //         className='w-ful border border-gray-400 p- rounded-md mb-4'>

// //         </textarea>
// //         <div className='flex justify-end gap-2'>
// //             <button
// //                 onClick={handleClose}
// //              className='px-4 py-2 bg-gray-300'>Cancel</button>
// //             <button 
// //             onClick={handleSubmit}
            
// //             className='px-4 py-2 bg-primary text-white rounded-md'>Submit</button>
// //         </div>
// //        </div>
    
      
// //     </div>
// //   )
// // }

// // export default PostAReview
// // import React, { useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import { useParams } from 'react-router-dom';
// // import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
// // import { usePostReviewMutation } from '../../../redux/features/reviews/reviewsApi';

// // const PostAReview = ({ isModalOpen, handleClose }) => {
// //     const { id } = useParams();
// //     const { user } = useSelector((state) => state.auth);
// //     const [rating, setRating] = useState(0);
// //     const [comment, setComment] = useState('');

// //     const { refetch } = useFetchProductByIdQuery(id, { skip: !id });
// //     const [postReview] = usePostReviewMutation();

// //     const handleRating = (value) => {
// //         setRating(value);
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const newComment = {
// //             comment: comment,
// //             rating: rating,
// //             userId: user?._id,
// //             productId: id,
// //         };

// //         try {
// //             await postReview(newComment).unwrap();
// //             alert("Comment posted");
// //             setComment('');
// //             setRating(0);
// //             refetch();
// //         } catch (error) {
// //             alert(error.message);
// //         }
// //     };

// //     return (
// //         <div className={`fixed inset-0 flex items-center justify-center z-40 px-2 
// //             ${isModalOpen ? 'block' : 'hidden'}`} 
// //             style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} // Added this style
// //         >
// //             <div className='bg-white p-6 rounded-md shadow-lg w-96 z-50'>
// //                 <h2 className='text-lg font-medium mb-4'>Post A Review</h2>

// //                 <form onSubmit={handleSubmit}>
// //                     <div className='flex items-center mb-4'>
// //                         {[1, 2, 3, 4, 5].map((star) => (
// //                             <span key={star} onClick={() => handleRating(star)} className='cursor-pointer text-yellow-500 text-xl'>
// //                                 {rating >= star ? (
// //                                     <i className='ri-star-fill'></i>
// //                                 ) : (
// //                                     <i className='ri-star-line'></i>
// //                                 )}
// //                             </span>
// //                         ))}
// //                     </div>

// //                     <textarea
// //                         value={comment}
// //                         onChange={(e) => setComment(e.target.value)}
// //                         rows="4"
// //                         className='w-full border border-gray-400 p-2 rounded-md mb-4'
// //                     />

// //                     <div className='flex justify-end gap-2'>
// //                         <button
// //                             type='button'
// //                             onClick={handleClose}
// //                             className='px-4 py-2 bg-gray-300 rounded-md'
// //                         >
// //                             Cancel
// //                         </button>
// //                         <button 
// //                             type='submit'
// //                             className='px-4 py-2 bg-primary text-white rounded-md'
// //                         >
// //                             Submit
// //                         </button>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PostAReview;

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
// import { usePostReviewMutation } from '../../../redux/features/reviews/reviewsApi';

// const PostAReview = ({ isModalOpen, handleClose }) => {
//     const { id } = useParams();
//     const { user } = useSelector((state) => state.auth);
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState('');

//     const { refetch } = useFetchProductByIdQuery(id, { skip: !id });
//     const [postReview] = usePostReviewMutation();

//     const handleRating = (value) => {
//         setRating(value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newComment = {
//             comment: comment,
//             rating: rating,
//             userId: user?._id,
//             productId: id,
//         };

//         try {
//             await postReview(newComment).unwrap();
//             alert("Comment posted");
//             setComment('');
//             setRating(0);
//             refetch();
//             handleClose(); // Close the modal after posting
//         } catch (error) {
//             alert(error.message);
//         }
//     };

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (event.key === 'Escape') {
//                 handleClose();
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [handleClose]);

//     return (
//         <div className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40 ${isModalOpen ? 'block' : 'hidden'}`}>
//             <div className='bg-white p-6 rounded-md shadow-lg w-96 z-50'>
//                 <h2 className='text-lg font-medium mb-4'>Post A Review</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className='flex items-center mb-4'>
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <span key={star} onClick={() => handleRating(star)} className='cursor-pointer text-yellow-500 text-xl'>
//                                 {rating >= star ? <i className='ri-star-fill'></i> : <i className='ri-star-line'></i>}
//                             </span>
//                         ))}
//                     </div>

//                     <textarea
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                         rows="4"
//                         className='w-full border border-gray-400 p-2 rounded-md mb-4'
//                     />

//                     <div className='flex justify-end gap-2'>
//                         <button type='button' onClick={handleClose} className='px-4 py-2 bg-gray-300 rounded-md'>Cancel</button>
//                         <button type='submit' className='px-4 py-2 bg-primary text-white rounded-md'>Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PostAReview;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { usePostReviewMutation } from '../../../redux/features/reviews/reviewsApi';

const PostAReview = ({ isModalOpen, handleClose }) => {
    const { id } = useParams();
    const { user } = useSelector((state) => state.auth);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const { refetch } = useFetchProductByIdQuery(id, { skip: !id });
    const [postReview] = usePostReviewMutation();

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            comment: comment,
            rating: rating,
            userId: user?._id,
            productId: id,
        };
        try {
            await postReview(newComment).unwrap();
            alert("Comment posted");
            setComment('');
            setRating(0);
            refetch();
            handleClose();
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClose]);

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40 ${isModalOpen ? 'block' : 'hidden'}`}>
            <div className='bg-white p-8 rounded-lg shadow-lg w-96 z-50 transition-transform transform scale-100 hover:scale-105'>
                <h2 className='text-xl font-bold mb-6 text-center text-gray-800'>Post A Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex items-center mb-6 justify-center'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} onClick={() => handleRating(star)} className='cursor-pointer text-yellow-500 text-2xl transition-transform transform hover:scale-125'>
                                {rating >= star ? <i className='ri-star-fill'></i> : <i className='ri-star-line'></i>}
                            </span>
                        ))}
                    </div>

                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="4"
                        placeholder='Write your comment here...'
                        className='w-full border border-gray-300 p-4 rounded-lg mb-4 transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary'
                    />

                    <div className='flex justify-between'>
                        <button type='button' onClick={handleClose} className='px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-200'>Cancel</button>
                        <button type='submit' className='px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-200'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostAReview;
