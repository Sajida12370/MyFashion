import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAdminStatsQuery } from '../../../../redux/features/stats/statsaApi'
import AdminStats from './AdminStats'
import AdminStatsChart from './AdminStatsChart'


const AdminDMain = () => {
    const {user}=useSelector((state)=>state.auth)

    const {data:stats,error,isLoading}= useGetAdminStatsQuery()

    if(isLoading) return <div>Loading...</div>
    if(!stats) return <div>No Stats Found</div>
    if(error) return <div>Failed To Load Stats!</div>
  return (
    <div className='p-6'>
      <div>
        <h1 className='text-2xl font-semibold mb-4'>Admin Dashboard</h1>
        <p className='text-gray-500'>Hi, <span className='text-red-600 font-semibold'>{user?.username} </span>Welcome to <span className='text-red-600 font-semibold'>Admin</span> Dashboard</p>

        
        <AdminStats stats={stats}/>
        <AdminStatsChart stats={stats}/>

      </div>
    </div>
  )
}

export default AdminDMain
