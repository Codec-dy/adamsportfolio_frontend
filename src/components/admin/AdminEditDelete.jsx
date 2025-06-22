import React, { useContext, useState } from 'react'
import Button from '../Button';
import { handleDelete, handleEdit } from '../../utils/crud';
import { useMyContext } from '../../utils/MyContext';


const AdminDelete = ({id, project,model}) => {
  const api = "https://adamsportfolio-backend.onrender.com/api/collection";
  const [isEditing, setIsEditing] = useState(false);
  const { editable, setEditable } = useMyContext();
  const edit = (id,proj) => {
    delete proj.elements
    setEditable(proj);

  }
  return (
     <div className='flex flex-col sm:flex-row gap-4 mt-1'>
        <div className={isEditing==true?'block':'hidden'} onClick={()=>{handleEdit(api,editable,model),setEditable(false),setIsEditing(false),console.log(editable)}}><Button  text={"Done"}/></div>
        <div className={isEditing==true?'hidden':'block'} onClick={()=>{edit(id,project),setIsEditing(true)}}><Button  text={"Edit"}/></div>
        <div onClick={()=>{handleDelete(api,id,model)}}><Button  text={"Delete"}/></div>
    </div>
  )
}

export default AdminDelete