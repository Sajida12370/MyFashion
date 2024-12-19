// import React, { useState } from 'react'
// import { useUpdateOrderStatusMutation } from '../../../../redux/features/orders/orderApi'

// const UpdateOrderModal = ({order,isOpen,onClose}) => {

//     const [status,setStatus]=useState(order?.status)

//     const [updateOrderStatus,{isLoading,error}] =  useUpdateOrderStatusMutation()

//     const handleUpdateOrderStatus = async()=>{
//         onClose()

//         try {
//             await updateOrderStatus({id:order?._id,status})
            
//         } catch (error) {
//             console.error("Failed to update order status",error)
            
//         }
//     }
//     if(!isOpen){
//         return null
//     }
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default UpdateOrderModal
import React, { useState } from 'react';
import { useUpdateOrderStatusMutation } from '../../../../redux/features/orders/orderApi';

const UpdateOrderModal = ({ order, isOpen, onClose }) => {
    const [status, setStatus] = useState(order?.status || "pending");

    const [updateOrderStatus, { isLoading, error }] = useUpdateOrderStatusMutation();

    // Handle status update
    const handleUpdateOrderStatus = async () => {
        onClose(); // Close modal after update

        try {
            await updateOrderStatus({ id: order?._id, status });
            alert('Order status updated successfully!');
        } catch (error) {
            console.error("Failed to update order status", error);
            alert('Error updating order status.');
        }
    };

    // Close modal if not open
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Update Order Status</h2>

                {/* Order details */}
                <div className="mb-4">
                    <p><strong>Order ID:</strong> {order?.orderId}</p>
                    <p><strong>Current Status:</strong> {order?.status}</p>
                </div>

                {/* Status selection */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Select Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                {/* Error handling */}
                {error && (
                    <div className="text-red-500 text-sm mb-4">
                        Error updating order status. Please try again later.
                    </div>
                )}

                {/* Modal buttons */}
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpdateOrderStatus}
                        className={`px-4 py-2 text-white rounded-md ${isLoading ? 'bg-gray-400' : 'bg-blue-600'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? "Updating..." : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrderModal;
