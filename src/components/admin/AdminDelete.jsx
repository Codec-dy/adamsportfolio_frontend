import React, { useContext, useState } from 'react'
import Button from '../Button';
import { handleDelete } from '../../utils/crud';


const AdminDelete = ({id,model}) => {
  const api = "http://localhost:3000/api/collection";
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
        <div onClick={()=>{handleDelete(api,id,model)}}><Button  text={"Delete"}/></div>
    </div>
  )
}

export default AdminDelete