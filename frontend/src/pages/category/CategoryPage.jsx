import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import ProductCards from '../shop/ProductCards'

const CategoryPage = () => {

    const {categoryName} =useParams()
    // console.log(categoryName)
    const [filterdProducts,setFilterdProducts]=useState([])

    useEffect(()=>{
        const filterd=products.filter((product)=>product.category === categoryName.toLowerCase())

        setFilterdProducts(filterd)
    },[categoryName])

    useEffect(()=>{
        window.scrollTo(0,0)
    })

  return (
   <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accesories.
            Elevate your style today !
        </p>
    </section>
    {/* product card */}
    <div className='section__container'>
        <ProductCards products={filterdProducts}/>
    </div>

   </>
  )
}

export default CategoryPage
