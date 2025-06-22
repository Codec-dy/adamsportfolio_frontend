import React, { use, useContext, useEffect, useState } from 'react'
import Button from '../Button';
import { getData, handleDelete, handleEdit } from '../../utils/crud';


const AdminDelete = ({id,model,string}) => {
  const api = "https://adamsportfolio-backend.onrender.com/api/collection";
  const [elements, setElements] = useState([]);
  const [project, setProject] = useState(null);
  if(string){
    useEffect(() => {
    getData(api + "?model=project&id=" + id).then(data => setProject(data));
  }, [id]);
  useEffect(() => {
    if (project && project.elements) {
      setElements(project.elements.filter((el) => el.img !== string));
      console.log("Elements after deletion:", elements);
    }
  }, [project]);
  }
  

  return (
    <div className='flex flex-col sm:flex-row gap-4'>
        {!string&&<div onClick={()=>{handleDelete(api,id,model)}}><Button  text={"Delete"}/></div>}
        {string&&<div onClick={()=>{handleEdit(api,'',`project&id=${id}&elements=${JSON.stringify(elements)}`)}}><Button  text={"Delete"}/></div>}

    </div>
  )
}

export default AdminDelete