// import React from 'react'

// const UserStats = ({stats}) => {
//   return (
//     <div className='my-5 space-y-5'>
//     <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>

//     <div className='bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:border-primary cursor-pointer hover:scale-105 transition-all duration-200'>
//         <h2 className='text-xl font-semibold mb-2'>Total Payments </h2>
//         <p className='text-2xl font-bold'>${stats?.totalPayments}</p>
//     </div>
//     <div className='bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:border-primary cursor-pointer hover:scale-105 transition-all duration-200'>
//         <h2 className='text-xl font-semibold mb-2'>Total Reviews </h2>
//         <p className='text-2xl font-bold'>{stats?.totalReviews}</p>
//     </div>
//     <div className='bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:border-primary cursor-pointer hover:scale-105 transition-all duration-200'>
//         <h2 className='text-xl font-semibold mb-2'>Total Purchased Products </h2>
//         <p className='text-2xl font-bold'>{stats?.totalPurchasedProducts}</p>
//     </div>

//     </div>
      
//     </div>
//   )
// }

// export default UserStats
import React from 'react'

const UserStats = ({ stats }) => {
  return (
    <div className='my-6 space-y-6'>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>

        {/* Total Payments Card */}
        <div className='bg-white shadow-lg rounded-lg p-6 border border-red-100 hover:border-red-300 cursor-pointer hover:scale-105 transition-all duration-200'>
          <h2 className='text-xl font-semibold mb-2 text-gray-700'>Total Payments</h2>
          <p className='text-2xl font-bold text-red-600'>${stats?.totalPayments}</p>
        </div>

        {/* Total Reviews Card */}
        <div className='bg-white shadow-lg rounded-lg p-6 border border-red-100 hover:border-red-300 cursor-pointer hover:scale-105 transition-all duration-200'>
          <h2 className='text-xl font-semibold mb-2 text-gray-700'>Total Reviews</h2>
          <p className='text-2xl font-bold text-red-600'>{stats?.totalReviews}</p>
        </div>

        {/* Total Purchased Products Card */}
        <div className='bg-white shadow-lg rounded-lg p-6 border border-red-100 hover:border-red-300 cursor-pointer hover:scale-105 transition-all duration-200'>
          <h2 className='text-xl font-semibold mb-2 text-gray-700'>Total Purchased Products</h2>
          <p className='text-2xl font-bold text-red-600'>{stats?.totalPurchasedProducts}</p>
        </div>

      </div>
    </div>
  )
}

export default UserStats
