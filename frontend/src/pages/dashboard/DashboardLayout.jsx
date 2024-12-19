// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Navigate, Outlet } from 'react-router-dom'
// import UserDashboard from './UserDashboard'
// import AdminDashboard from './AdminDashboard'

// const DashboardLayout = () => {

//     const {user}= useSelector((state)=>state.auth)

//     if(!user){
//         return <Navigate to="login" replace/>
//     }

//     const renderDashboard = ()=>{

//         switch (user?.role) {
//             case 'admin':

//             return <AdminDashboard/>
            
//             case 'user':
//                 return <UserDashboard/>
        
//             default:
//                 return <Navigate to="login" replace/>
//         }

//     }

//   return (
//     <div className='container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start'>

//     <header className='lg:w-1/5 sm:w-2/5 w-full border'>
//     {
//         renderDashboard()
//     }
//     </header>

//     <main className='p-8 bg-white w-full border mt-5'>
//     <Outlet/>
//     </main>

    
      
//     </div>
//   )
// }

// export default DashboardLayout
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import UserDashboard from './UserDashboard'
import AdminDashboard from './AdminDashboard'

const DashboardLayout = () => {

    const { user } = useSelector((state) => state.auth)

    if (!user) {
        return <Navigate to="/login" replace />
    }

    const renderDashboard = () => {
        switch (user?.role) {
            case 'admin':
                return <AdminDashboard />
            case 'user':
                return <UserDashboard />
            default:
                return <Navigate to="/login" replace />
        }
    }

    return (
        <div className="container mx-auto flex flex-col lg:flex-row gap-4 items-start justify-start">

            {/* Sidebar (Header) */}
            <header className="lg:w-1/5 sm:w-2/5 w-full border bg-red-50 p-6 rounded-lg">
                {renderDashboard()}
            </header>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-white border border-red-200 rounded-lg mt-5">
                <Outlet />
            </main>

        </div>
    )
}

export default DashboardLayout
