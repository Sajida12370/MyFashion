// import React from 'react'
// import { useSelector } from 'react-redux'
// import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from "chart.js"
// import { useGetUserStatsQuery } from '../../../../redux/features/stats/statsaApi'
// import { Bar } from "react-chartjs-2"
// import UserStats from './UserStats'

// ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)

// const UserDMain = () => {

//     const{user}=useSelector((state)=>state.auth)
//     const {data:stats,error,isLoading}=useGetUserStatsQuery(user?.email)

//     console.log("data",stats)

//     if(isLoading) return <div className='text-center text-gray-500'>Loading...</div>
//     if(!stats){
//         return <div className='text-center text-gray-500'>No Data Available...</div>
//     }

//     const data = {
//         labels:['Total Payments','Total Reviews','Total Purchased Products'],
//         datasets:[
//             {
//                 label: 'User Stats',
//                 data:[ parseFloat(stats.totalPayments) || 0,  // Convert totalPayments to a number
//                 stats.totalReviews || 0,               // Ensure it's a valid number
//                 stats.totalPurchasedProducts || 0  ],
//                 backgroundColor:'rgba(75,192,192,0.2)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 borderWidth:1,



//             }
//         ]
//     }

// const options = {
//     responsive:true,
//     plugins:{
//         legend:{
//             position:'top',
//         },
//         tooltip:{
//            callbacks:{
//             label:function (tooltipItem) {
//                 if(tooltipItem.label === 'Total Payments'){
//                     return `Total Payments : ${tooltipItem.raw.toFixed(2)}`
//                 }

//                 return `${tooltipItem.label}:${tooltipItem.raw}`


//             }
//            }
//         }
//     }

// }

//   return (
//     <div className='p-6'>
//    <div>
//    <h1 className='text-2xl font-semibold mb-4'>User Dashboard</h1>
//    <p className='text-gray-500'>Hi, {user?.username}! Welcome to your dashboard</p>
      
//     </div>
//     <UserStats stats={stats}/>
//     <div className='mb-6'>
//     <Bar data={data} options={options}/>
//     </div>
//     </div>
//   )
// }

// export default UserDMain
import React from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { useGetUserStatsQuery } from '../../../../redux/features/stats/statsaApi'
import { Bar } from "react-chartjs-2"
import UserStats from './UserStats'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const UserDMain = () => {

    const { user } = useSelector((state) => state.auth)
    const { data: stats, error, isLoading } = useGetUserStatsQuery(user?.email)

    console.log("data", stats)

    if (isLoading) return <div className='text-center text-gray-500'>Loading...</div>
    if (!stats) {
        return <div className='text-center text-gray-500'>No Data Available...</div>
    }

    const data = {
        labels: ['Total Payments', 'Total Reviews', 'Total Purchased Products'],
        datasets: [
            {
                label: 'User Stats',
                data: [
                    parseFloat(stats.totalPayments) || 0,  // Convert totalPayments to a number
                    stats.totalReviews *10 || 0,               // Ensure it's a valid number
                    stats.totalPurchasedProducts || 0  ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Light Red for background
                borderColor: 'rgba(255, 99, 132, 1)',  // Darker Red for border
                borderWidth: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        weight: '600',
                    },
                    color: '#333'
                }
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        // if (tooltipItem.label === 'Total Payments') {
                        //     return `Total Payments: $${tooltipItem.raw.toFixed(2)}`
                        // }
                        return `${tooltipItem.label}: ${tooltipItem.raw}`
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#333',  // Set tick color to dark grey
                    font: {
                        size: 14
                    }
                },
            },
            x: {
                ticks: {
                    color: '#333',  // Set tick color to dark grey
                    font: {
                        size: 14
                    }
                }
            }
        }
    }

    return (
        <div className='bg-white p-8 rounded-lg shadow-lg'>
            <div>
                <h1 className='text-3xl font-bold text-red-600 mb-4'>User Dashboard</h1>
                <p className='text-gray-600 mb-6 font-semibold'>Hi, <span className='text-red-500'>{user?.username}!</span> Welcome to your dashboard</p>
            </div>
            
            <UserStats stats={stats} />

            <div className='mb-6'>
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default UserDMain
