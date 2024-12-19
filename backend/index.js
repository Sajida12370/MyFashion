const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
require('dotenv').config()
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const port = process.env.PORT || 5000

//middleware

app.use(express.json({limit: "25mb"}))
app.use((express.urlencoded({limit: "25mb"})))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

// image upload 

const uploadImage = require('./src/utils/uploadImage')

// all routes
const authRoutes=require('./src/users/user.route')
const productRoutes=require('./src/products/products.route')
const contactRoutes=require('./src/contact/contact.route')
const reviewRoutes=require('./src/reviews/reviews.router')
const orderRoutes= require('./src/orders/orders.router')
const statsRoutes=require('./src/stats/stats.route')

app.use('/api/auth', authRoutes)
app.use('/api/products',productRoutes)
app.use('/api/contact', contactRoutes); 
app.use('/api/reviews', reviewRoutes);
app.use('/api/orders',orderRoutes)
app.use('/api/stats',statsRoutes)






main().then(()=>console.log("Succesfully connected"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL)
      
  }
  app.get('/', (req, res) => {
    res.send('Server Runing')
  })
app.post("/uploadImage",(req,res)=>{
  // console.log("Received image:", req.body.image); 
  uploadImage(req.body.image)
  .then((url)=>res.send(url)).
  catch((error)=>res.status(500).send(error))
  

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})