import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(res => res.json())
    //  .then(data => {
    //     // console.log(data);
    //     setData(data)
    //  })
    // }, [])

    const data=useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} className="mx-auto mt-4 block"/>
        </div>
    )
}

export default Github

// for one more optimization, loaders hover krte hi fetch call kr dete hai or data ko cache me rkh lete hai 
export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}