import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import UploadImage from './UploadImage'
import { useAddProductMutation } from '../../../../redux/features/products/productsApi'
import { useNavigate } from 'react-router-dom'

const categories= [
    
        {label:'Select Category',value:''},
        {label:'Accessories',value:'accessories'},
        {label:'Dress',value:'dress'},
        {label:'Jewellery',value:'jewellery'},
        {label:'Cosmetics',value:'cosmetics'}, 
        {label:'Skin Care',value:'skin-care'}, 
]
const colors= [
    
    {label:'Select Color',value:''},
    {label:'Black',value:'black'},
    {label:'Red',value:'red'},
    {label:'Gold',value:'gold'},
    {label:'Blue',value:'blue'}, 
    {label:'Silver',value:'silver'}, 
    {label:'Beige',value:'beige'}, 
    {label:'Green',value:'green'}, 

]




const AddProduct = () => {
    const {user} =useSelector((state)=>state.auth)
    const [product,setProduct]=useState({
        name:'',
        category:'',
        color:'',
        price:'',
        description:''

    })
        const [image,setImage] = useState('')

        const [AddProduct,{isLoading,error}]= useAddProductMutation()

        const handleChange = (e)=>{
            const {name,value}= e.target
            setProduct({
                ...product,
                [name]:value
            })
        }

        const navigate=useNavigate()
        const handleSubmit = async(e)=>{
            e.preventDefault()
            if(!product.name || !product.category || !product.price
                || !product.description || !product.color
            ){
                alert("Fill all the fields")
                return

            }

            try {
                await AddProduct({
                    ...product,
                    image,
                    author:user?._id
                }).unwrap()
                alert("Producr added succesfully")
                setProduct({
                name:'',
                category:'',
                color:'',
                price:'',
                description:'',
                })
                setImage('')
                navigate("/shop")
                
            } catch (error) {
                console.log("Failed to submit product",error)
                
            }


        }
  return (
    <div className='container mx-auto mt-8'>
    <h2 className='text-2xl font-bold mb-6'>Add New Product</h2>

    <form onSubmit={handleSubmit} className='space-y-4'>

        <TextInput

        label="Product name"
        name="name"
        value ={product.name}
        onChange = {handleChange}
        type="text"
        placeholder="Product Name"
        />

        <SelectInput
         label="Category"
        name="category"
        value ={product.category}
        onChange = {handleChange}
       options={categories}
       
        />

        <SelectInput
         label="Colors"
        name="color"
        value ={product.color}
        onChange = {handleChange}
       options={colors}
        />
        
        <TextInput
        label="Price"
        name="price"
        value ={product.price}
        onChange = {handleChange}
        type="Number"
        placeholder="Product Price"
        />

            <UploadImage
                name="image"
                id="image"
                value={e=>setImage(e.target.value)}
                placeholder="upload image"
                setImage={setImage}

            />
            <div>
            <label htmlFor="description" 
            className='block text-sm font-medium
             text-gray-700'>Description</label>
             <textarea name ="description" id="description" className='add-product-InputCSS' value={product.description} placeholder='Description'
             onChange={handleChange}>

             </textarea>
            </div>

          <div>
          <button type='submit'
         
          className='add-product-btn'>Add Product</button>
          </div>
    </form>
      
    </div>
  )
}

export default AddProduct
