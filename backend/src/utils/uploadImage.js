const cloudinary=require('cloudinary').v2

const cloud_name=process.env.CLOUDINARY_CLOUD_NAME
const api_key=process.env.CLOUDINARY_API_KEY
const api_secret= process.env.CLOUDINARY_API_SECRET
cloudinary.config({ 
    cloud_name: cloud_name, 
    api_key:api_key , 
    api_secret: api_secret,
  });

  const opts = {
    overwrite:true,
    invalidate:true,
    resource_type:"auto"
  }

module.exports=(image)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(image,opts,(error,result)=>{

            if(result && result.secure_url){
                return resolve(result.secure_url)
            }
            return reject({message:error.message})
        })


    })
    
}








// const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with environment variables
// const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
// const api_key = process.env.CLOUDINARY_API_KEY;
// const api_secret = process.env.CLOUDINARY_API_SECRET;

// cloudinary.config({
//   cloud_name: cloud_name,
//   api_key: api_key,
//   api_secret: api_secret,
// });

// // Cloudinary upload options
// const opts = {
//   overwrite: true,
//   invalidate: true,
//   resource_type: "auto",  // "auto" for automatic detection of file type
// };

// // Function to upload an image to Cloudinary
// module.exports = (image) => {
//   return new Promise((resolve, reject) => {
//     // Log the image to check it's being received as base64
//     console.log("Uploading image to Cloudinary:", image);

//     // Make sure the image is in base64 format, if it's a buffer or file type, adjust the code
//     cloudinary.uploader.upload(image, opts, (error, result) => {
//       if (error) {
//         console.error("Cloudinary upload error:", error); // Log the error to the server console for debugging
//         return reject({ message: error.message || "Error occurred during image upload" });
//       }

//       if (result && result.secure_url) {
//         // Return the URL of the uploaded image
//         console.log("Image uploaded successfully:", result.secure_url);
//         return resolve(result.secure_url);
//       }

//       return reject({ message: "No result returned from Cloudinary" });
//     });
//   });
// };
