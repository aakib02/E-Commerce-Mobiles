import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddProduct from './AddProduct';
import { Link } from 'react-router-dom';
const AllButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
    <div className='w-full flex gap-4 '>
 <Button variant="contained" onClick={toggleModal}>Add Product</Button>
 <Link to={'/showproduct'}><Button variant="contained">Show Product</Button></Link>

    </div>


 <AddProduct isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleModal={toggleModal} />

 </>
  )
}

export default AllButton
