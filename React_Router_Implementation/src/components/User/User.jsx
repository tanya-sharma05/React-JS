import React from 'react'
import { useParams } from 'react-router'

// for dynamic component // 
// useParams is a hook that provides access to parameters defined in URL
function User() {
    const {userid}=useParams();
    return (
        <div className='bg-gray-600 text-white text-3xl text-center p-4'>User: {userid}</div>
    )
}

export default User
