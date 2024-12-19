// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useGetOrdersByEmailQuery } from '../../../redux/features/orders/orderApi'

// const UserPayments = () => {
//     const {user}=useSelector((state)=>state.auth)

//     const {data:ordersdata,error,isLoading}=useGetOrdersByEmailQuery(user?.email)

//     if(isLoading) return <div>Loading...</div>
//     if(error) return <div>No Order Found!!</div>
//    const orders=ordersdata.orders || {}
//    const totalPayment=orders?.reduce((acc,order)=>acc + order.amount,0).toFixed(2)
//    console.log(totalPayment)
//   return (
//     <div className='py-6 px-4'>
//       <h3 className='text-xl font-semibold text-red-700 mb-4'>Total Payments</h3>
//       <div>
//         <p className='text-lg font-medium text-gray-800 '> Total Spent: ${totalPayment ?totalPayment : 0 }</p>
//         <ul>
//             {
//                 orders && orders.map((item,index)=>(
//                     <li key={index}>
//                     <h5 className='font-medium text-gray-700 mb-2'>Order : {index + 1}</h5>

//                     <div>
//                         <span className='text-gray-600'>Order # ${item.amount.toFixed(2)}</span>
//                     </div>

//                         <div className='flex md:flex-row items-center space-x-2'>
//                             <span  className='text-gray-600'>Date: {new Date(item?.createdAt).toLocaleDateString()}</span>
//                             <p className='text-gray-600'>
//                                 | Status:<span className={`ml-2 py-[2px] px-2 text-sm rounded
                                
//                                ${item?.status === 'completed' ?'bg-green-100 text-green-700' : item?.status === 'pending' ? 'bg-red-200 text-red-700': item?.status === 'processing' ? 'bg-yellow-200 text-yellow-600' :'bg-blue-200 text-blue-500' } `}>
//                                 {item?.status}</span>
//                             </p>
//                         </div>
//                         <hr className='my-2'/>
//                     </li>
//                 ))
//             }
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default UserPayments
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetOrdersByEmailQuery } from '../../../redux/features/orders/orderApi';

const UserPayments = () => {
    const { user } = useSelector((state) => state.auth);

    const { data: ordersData, error, isLoading } = useGetOrdersByEmailQuery(user?.email);

    if (isLoading) return <div className="text-center py-6">Loading...</div>;
    if (error) return <div className="text-center py-6 text-red-600">No Orders Found!</div>;

    const orders = ordersData?.orders || [];
    const totalPayment = orders?.reduce((acc, order) => acc + order.amount, 0).toFixed(2);

    return (
        <div className="py-8 px-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-red-700 mb-6">Total Payments</h3>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <p className="text-lg font-medium text-gray-800 mb-4">Total Spent: ${totalPayment ? totalPayment : 0}</p>
                <hr className="my-2 border-t border-gray-200" />
            </div>

            {orders.length > 0 ? (
                <ul className="space-y-6">
                    {orders.map((item, index) => (
                        <li key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="text-xl font-semibold text-gray-800">Order #{index + 1}</h5>
                                    <span className="text-gray-600">Order Total: ${item.amount.toFixed(2)}</span>
                                </div>

                                {/* Status Badge - Only one badge for status */}
                                <div className={`text-xs py-1 px-2 rounded-full font-medium
                                    ${item?.status === 'completed' ? 'bg-green-100 text-green-700' :
                                    item?.status === 'pending' ? 'bg-red-200 text-red-700' :
                                    item?.status === 'processing' ? 'bg-yellow-200 text-yellow-600' :
                                    'bg-blue-200 text-blue-500'}`}>
                                    {item?.status}
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm text-gray-600">Date: {new Date(item?.createdAt).toLocaleDateString()}</span>
                            </div>

                            <hr className="my-4 border-t border-gray-200" />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center text-gray-500 py-6">No Orders Found.</div>
            )}
        </div>
    );
};

export default UserPayments;
