
import React, { useEffect, useState } from 'react';
import productsData from '../../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity },
    ]
};

const ShopPage = () => {
    
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });

    // // Filtering functions
    // const applyFilters = () => {
    //     let filteredProducts = productsData;

    //     // Filter by category
    //     if (filtersState.category && filtersState.category !== 'all') {
    //         filteredProducts = filteredProducts.filter(product => product.category === filtersState.category);
    //     }

    //     // Filter by color
    //     if (filtersState.color && filtersState.color !== 'all') {
    //         filteredProducts = filteredProducts.filter(product => product.color === filtersState.color);
    //     }

    //     if(filtersState.priceRange){
    //         const [minPrice,maxPrice]=filtersState.priceRange.split('-').map(Number);
    //         filteredProducts = filteredProducts.filter(product => product.price >= minPrice
    //             && product.price <= maxPrice)
            
    //     }
        

    //     setProducts(filteredProducts);
    // };

    // useEffect(() => {
    //     applyFilters();
    // }, [filtersState]);

    const [currentPage,setCurrentPage] = useState(1)
    const [ProductsPerPage]=useState(8)
    const {category,color,priceRange}= filtersState
    const [minPrice,maxPrice]=priceRange.split('-').map(Number)

    const {data:{products= [],totalPages,totalProducts}={},error,isLoading}=
    useFetchAllProductsQuery({
        category :category !== 'all' ? category : '', 
        color: color !== 'all' ? color :'', 
        minPrice:isNaN(minPrice) ? '' : minPrice, 
        maxPrice : isNaN(maxPrice)? '': maxPrice, 
        page : currentPage, 
        limit :ProductsPerPage

    })


    // Clear filters
    const clearFilters = () => {
        setFiltersState({
            category: 'all',
            color: 'all',
            priceRange: ''
        });
        setProducts(productsData); // Reset products when filters are cleared
    };

    // pagination

    const handlePageChange= (pageNumber)=>{
        if(pageNumber > 0 && pageNumber <= totalPages){
            setCurrentPage(pageNumber)

        }

    }

    if(isLoading) return 
    <div>Loading...</div>
    if(error) return <div>Error loading products</div>

    const startProduct=(currentPage -1) * ProductsPerPage +1
    const endProduct = startProduct +products.length-1

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>
                    Discover the latest trends and express your unique style with our Women's Fashion website. Explore a
                    curated collection of clothing, accessories, and footwear that
                    caters to every taste and occasion.
                </p>
            </section>
            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* Left side */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters}
                    />

                    {/* Right side */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>
                        Showing {startProduct} to {endProduct} of {totalProducts} products
                        </h3>
                        <ProductCards products={products} />


                        {/* pagination */}
                        <div className='mt-6 flex justify-center'>

                        <button 
                        disabled={currentPage ===1}
                        onClick={()=>handlePageChange(currentPage-1)}
                        
                        className='px-4 py-2 hover:text-white bg-gray-400 text-gray-700
                        rounded-md mr-3'>Previous</button>

                        {
                            [...Array(totalPages)].map((_,index)=>(
                                <button key={index} 
                                    onClick={()=>handlePageChange(index+1)}
                                className={`px-4 py-2 ${currentPage === index +1 ? 'bg-red-500 text-white' :'bg-gray-300 text-gray-700'}
                                
                                rounded-md mx-1

                                
                                `}> {index+1}</button>

                            ))
                        }

                        <button 
                        disabled={currentPage === totalPages}
                        onClick={()=>handlePageChange(currentPage+1)}
                        className='px-4 py-2 bg-gray-400 text-gray-700
                        rounded-md ml-3 hover:text-white'>Next</button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;
