import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button';
import { convertBase64, handleAdd, handleFileChange } from "../../utils/crud";

const AddComponent = ({type,title,cancel}) => {
    
    function addType(type){
        switch (type) {
            case "project":
                return {"date":'',"techUsed":'',title:'', description:'',category:'',link:'',img:'',status:''}
            case "design":
                  return {"date":'',"type":'',img:''}
            case "skills":
                return {description:''}
            case "experience":
                return {title:'', company: '', location: '', date: '', summary: ''}
        }
    }

    const [add,setAdd] = useState(addType(type))
    const [secType,setSecType] = useState('')
    const api = "https://adamsportfolio-backend.onrender.com/api/collection"; 
    const [preview,setPreview] = useState('')
    
     
  return (
    <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>

        <h1>{title}</h1>
        {Object.keys(add).slice().map((key,i)=>{
               return <div key={i}> {key!="type"&&<input  className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder={key} onChange={async(e)=>{setAdd({...add,[key]: key=="img"?await handleFileChange(e.target.files[0],setPreview):e.target.value});}}  type={key=='img'?"file":key=="date"?"date":"text"}  value={key=='img'?'':add[key]}/>}
                {key=="type"&&<select key={i} className='w-full p-3 rounded-sm border border-gray-400 flex-1' onChange={(e)=>{setSecType(e.target.value);setAdd({...add,[key]:e.target.value})}} value={add[key]}>
                    <option value="">Select Type</option>
                    <option value="photography">Photography</option>
                    <option value="illustration">Illustration</option>
                    <option value="painting">Painting</option>
                    <option value="tradingcards">Trading Cards</option>
                    
                </select>}</div>
                
                })} 
         {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded" />
        </div>
      )}
         <div onClick={()=>{handleAdd(`${api}?model=${type=="design"?secType:"project"}`,add),cancel(false)}}><Button text={'Add to Collection'}/></div> <span onClick={()=>{cancel(false)}}><Button text={"Cancel"}/> </span>
    </div>
  )
}

export default AddComponent