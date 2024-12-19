import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetOrderByIdQuery } from '../../../redux/features/orders/orderApi'
import TimelineSteps from '../../../components/TimelineSteps'

const OrderDetails = () => {
   // const {user}= useSelector((state)=>state.auth)
   const {orderId} = useParams()
   //console.log(orderId)
    const {data:order,error,isLoading}=useGetOrderByIdQuery(orderId)
    //console.log(order)
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>No Orders!</div>
    
    const isCompleted = (status)=>{
        const statuses =["pending","processing","shipped","completed"]
        return statuses.indexOf(status) < statuses.indexOf(order.status)
    
       }
    
       const isCurrent =(status)=> order.status === status
      console.log("order",order);

    const steps = [
        {
          status: 'pending',
          label: 'Pending',
          description: 'Your order has been created and is awaiting processing.',
          icon: { iconName: 'time-line', bgColor: 'red-500', textColor: 'gray-800' },
        },
        {
          status: 'processing',
          label: 'Processing',
          description: 'Your order is currently being processed.',
          icon: { iconName: 'loader-line', bgColor: 'yellow-800', textColor: 'yellow-800' },
        },
        {
          status: 'shipped',
          label: 'Shipped',
          description: 'Your order has been shipped.',
          icon: { iconName: 'truck-line', bgColor: 'blue-800', textColor: 'blue-800' },
        },
        {
          status: 'completed',
          label: 'Completed',
          description: 'Your order has been successfully completed.',
          icon: { iconName: 'check-line', bgColor: 'green-800', textColor: 'green-900' },
        },
      ];


  return (
   <section className='section_container rounded p-6'>
    <h2 className='text-2xl font-semibold mb-4'>Payment: {order?.status}</h2>
    <p className='mb-4'>Order Id:{order?._id} </p>
    <p className='mb-4'>Status:{order?.status} </p>

    <ol className='sm:flex items-center relative'>
    {
        steps.map((steps,index)=>(
            <TimelineSteps
                key={index}
                step={steps}
                order={order}
                isCompleted={isCompleted(steps.status)}
                isCurrent={isCurrent(steps.status)}
                isLastStep={index === steps.length-1}
                icon={steps.icon}
                description={steps.description}
            />

        ))
    }

    </ol>

    </section>
  )
}

export default OrderDetails