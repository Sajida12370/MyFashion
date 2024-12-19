// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEditProfileMutation } from '../../../redux/features/auth/authApi'
// import avtarImg from '../../../assets/avatar.png'
// import { setUser } from '../../../redux/features/auth/authSlice'

// const UserProfile = () => {
//     const dispatch= useDispatch()
//     const {user} = useSelector((state)=>state.auth)
//     const [editProfile,{isLoading,isError,error,isSuccess}] =useEditProfileMutation()

//     const [formData,setFormData] = useState({
//         username:'',
//         profileImage:'',
//         bio:'',
//         profession:'',
//         userId:''

//     })
//     const [isModalOpen,setIsModalOpen] = useState(false)

//     useEffect(()=>{
//         if(user){

//             setFormData({
//                 username:user?.username || '',
//                 profileImage:user?.profileImage || '',
//                 bio: user?.bio || '',
//                 profession : user?.profession || '',
//                 userId:user?._id
//             })
           
//         }

//     },[user])

//     const handleChange=(e)=>{
//         setFormData({
//             ...formData,
//             [e.target.name]:e.target.value

//         })

//     }
//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//         const updatedUser={

//         username:formData.username,
//         profileImage:formData.profileImage,
//         bio:formData.bio,
//         profession:formData.profession,
//         userId:formData.userId

//         }

//         try {

//             const response = await editProfile(updatedUser).unwrap()
//             console.log("response",response)
//              dispatch(setUser(response.user))
//              localStorage.setItem('user',JSON.stringify(response.user))
//              alert("Profile Updated Succesfully")
            
//         } catch (error) {
//             console.error("Failed to update profile",error)
//             alert("Failed to update profile. Try again ")
            
//         }

//         setIsModalOpen(false)


//     }


//   return (
//     <div className='container mx-auto p-6'>

//     <div className='bg-white shadow-md rounded-lg p-6'>
//         <div className='flex items-center mb-4'>
//             <img src={formData?.profileImage || avtarImg} alt='' className='w-32 h-32 object-cover rounded-full'/>
//             <div className='ml-6 '>

//                 <h3 className='text-2xl font-semibold'>Username: {formData?.username ||'N/A'}</h3>
//                 <p className='text-gray-700'>User Bio: {formData?.bio || 'N/A'}</p>
//                 <p className='text-gray-700'>Profession: {formData?.profession || 'N/A'}</p>
//             </div>
//             <button 
//             onClick={()=>setIsModalOpen(true)}

          
//             className='ml-auto text-blue-500 hover:text-blue-800'>
//         Edit Profile
//             </button>

//         </div>

//     </div>

//     {/* show modal */}
//     {
//         isModalOpen && (
//             <div className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'>
//             <div className='bg-white p-6 rounded-lg md:w-96 mx-w-xl mx-auto relative'>
//             <button 
//             onClick={()=>setIsModalOpen(false)}
//             className='absolute top-2 text-gray-500 right-2 hover:text-gray-700 size-8 p-2 bg-black rounded-full'> <i className='ri-close-line'></i></button>
//             <h2 className='text-2xl font-bold mb-4'>Edit Profile</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-4'>
//                     <label htmlFor='username ' className='block text-sm font-medium text-gray-700'>Username</label>
//                     <input type='text' name='username' value={formData?.username} onChange={handleChange}
//                         className='mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm'
//                         placeholder='username'
//                         required
//                     />
//                 </div>
//                 <div className='mb-4'>
//                     <label htmlFor='profileImage' className='block text-sm font-medium text-gray-700'>Profile Image Url</label>
//                     <input type='text' name='profileImage' value={formData?.profileImage} onChange={handleChange}
//                         className='mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm'
//                         placeholder='Profile Image Url'
//                         required
//                     />
//                 </div>
//                 <div className='mb-4'>
//                     <label htmlFor='bio' className='block text-sm font-medium text-gray-700'>Bio</label>
//                     <textarea name="bio"
//                     rows="3"
//                     className='mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm'
//                     value={formData?.bio}
//                     placeholder='bio'
//                     onChange={handleChange}
//                     ></textarea>
//                 </div>
//                 <div className='mb-4'>
//                     <label htmlFor='profession' className='block text-sm font-medium text-gray-700'>Profession</label>
//                     <input type='text' name='profession' value={formData?.profession} onChange={handleChange}
//                         className='mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm'
//                         placeholder='Profession'
//                         required
//                     />
//                 </div>
                
//                 <button className={`mt-4 w-full bg-blue-500 text-white py-2 px-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} type='submit'
//                 disabled={isLoading}
//                 >{isLoading ? 'Saving... ':'Save Changes'}</button>
//                 {isError && <p className='mt-2 text-red-500'>Failed to update profile! Try Again Later</p>}
//                 {isSuccess && <p className='mt-2 text-green-600'>Profile Updated Succesfully</p>}
//             </form>
//             </div>
//             </div>
//         )
//     }
      
//     </div>
//   )
// }

// export default UserProfile
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEditProfileMutation } from '../../../redux/features/auth/authApi';
import avtarImg from '../../../assets/avatar.png';
import { setUser } from '../../../redux/features/auth/authSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [editProfile, { isLoading, isError, error, isSuccess }] = useEditProfileMutation();

  const [formData, setFormData] = useState({
    username: '',
    profileImage: '',
    bio: '',
    profession: '',
    userId: '',
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user?.username || '',
        profileImage: user?.profileImage || '',
        bio: user?.bio || '',
        profession: user?.profession || '',
        userId: user?._id,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      username: formData.username,
      profileImage: formData.profileImage,
      bio: formData.bio,
      profession: formData.profession,
      userId: formData.userId,
    };

    try {
      const response = await editProfile(updatedUser).unwrap();
      dispatch(setUser(response.user));
      localStorage.setItem('user', JSON.stringify(response.user));
      alert('Profile Updated Successfully');
    } catch (error) {
      console.error('Failed to update profile', error);
      alert('Failed to update profile. Try again');
    }

    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-lg p-8 mb-8 w-full max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <img
            src={formData?.profileImage || avtarImg}
            alt="User Avatar"
            className="w-32 h-32 object-cover rounded-full border-4 border-primary"
          />
          <div className="ml-6 flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">{formData?.username || 'N/A'}</h3>
            <p className="text-gray-700 mt-1">Bio: {formData?.bio || 'N/A'}</p>
            <p className="text-gray-700 mt-1">Profession: {formData?.profession || 'N/A'}</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-auto bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full md:w-96 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData?.username}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  name="profileImage"
                  value={formData?.profileImage}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter profile image URL"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows="4"
                  value={formData?.bio}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Tell us about yourself"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                  Profession
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData?.profession}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your profession"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-md bg-primary text-white font-semibold transition duration-300 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>

              {isError && (
                <p className="text-red-500 text-sm mt-4 text-center">Failed to update profile. Try again later.</p>
              )}
              {isSuccess && (
                <p className="text-green-600 text-sm mt-4 text-center">Profile updated successfully!</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
