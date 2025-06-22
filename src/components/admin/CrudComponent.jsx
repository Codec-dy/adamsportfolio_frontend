import React, { useContext, useState } from 'react'
import { handleFileChange } from '../../utils/crud';
import { useMyContext } from '../../utils/MyContext';

const CrudComponent = ({project,id}) => {
     const { editable, setEditable } = useMyContext();
    const [preview,setPreview] = useState('')
     if(editable && editable._id==project._id){
        return (
            <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>
                {Object.keys(project).slice(1,-1).map((key,i)=>{
                return(<div key={i}>{project[key]!=="" && key!="elements"?<div><label className="capitalize font-semibold">{key}</label>{key!='img'&&<input key={i} className='w-full' onChange={async(e)=>setEditable({...editable,[key]: key=="img"?await handleFileChange(e.target.files[0],setPreview):e.target.value})} type={key=='img'?'file':'text'} value={key=="img"?'':editable[key]} />}</div>:''}
                {preview && key=="img" && <div><img className='h-[40px]' src={preview}/></div>}
                {key=="img" && <div><img className='h-[40px]' src={project[key]}/></div>}</div>)

                })}
            </div>
        )
    }else{
        return (
            <div className='flex w-full flex-col gap-4 p-4 border border-gray-300 rounded-md'>
                {Object.keys(project).slice(1,-2).map((key,i)=>{

                return (<div key={i}>{project[key]!=="" && key!="elements" || key!='__v'? <div><label className="capitalize font-semibold">{key}</label>{key!='img'&&<input key={i} className='w-full' type={key=='img'?'file':'text'} value={key=="img"?'':project[key]} disabled/>}</div>:''}
                {key=="img" && <div><img className='h-[40px]' src={project[key]}/></div>} </div>)
            })}

            </div>
        )
        }
}

export default CrudComponent