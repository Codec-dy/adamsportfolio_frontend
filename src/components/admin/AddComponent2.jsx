import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button';
import { convertBase64, handleAdd, handleEdit, handleFileChange } from "../../utils/crud";

const AddComponent2 = ({type,title,cancel,id,elements}) => {
    
    function addType(type){
        switch (type) {
            case "project":
                return {"date":'',"techUsed":'',title:'', description:'',category:'',link:'',img:'',status:'',imgs:'Do not edit this field. You will be able to add images or videos after creating the project.'}
            case "design":
                  return {"date":'',img:''}
            case "skills":
                return {description:''}
            case "experience":
                return {title:'', company: '', location: '', date: '', summary: ''}
        }
    }

    const [add,setAdd] = useState(addType(type))
    const api = "http://52.15.59.206/api/collection" || []; 
    const [preview,setPreview] = useState('')
  
    
     
  return (
    <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>

        <h1>{title}</h1>
        {Object.keys(add).slice().map((key,i)=>{
               return <div key={i}> {key!="type"&&<input  className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder={key} onChange={async(e)=>{setAdd({...add,[key]: key=="img"?await handleFileChange(e.target.files[0],setPreview):e.target.value});}}  type={key=='img'?"file":key=="date"?"date":"text"}  value={key=='img'?'':add[key]} required/>}
                </div>
                
                })} 
         {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded" />
        </div>
      )}
         <div onClick={()=>{handleEdit(api,add,`project&id=${id}&elements=${JSON.stringify(elements)}`),cancel(false)}}><Button text={'Add to project'}/></div> <span onClick={()=>{cancel(false)}}><Button text={"Cancel"}/> </span>
    </div>
  )
}

export default AddComponent2