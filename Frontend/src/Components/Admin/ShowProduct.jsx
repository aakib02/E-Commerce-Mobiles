import React, { useEffect, useState } from 'react'
import AllButton from './AllButton'
import axios from 'axios'

const ShowProduct = () => {
    const [product, setproduct] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/showproduct').then((data)=>{
            setproduct(data.data.data);
        })
    },[])
  return (
<div className='  w-11/12 flex justify-center mx-auto mt-4'>
<div className='w-full mt-4 px-3'>
<h1 className='text-3xl font-bold mb-5 text-blue-800 text-center'>Product Management</h1>
<AllButton/>



<div class="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           
       {
        product.map((product)=>(
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.Pdesc}
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                {product.Pprice}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>

        ))
       }
        </tbody>
    </table>
</div>

</div>
</div>
  )
}

export default ShowProduct