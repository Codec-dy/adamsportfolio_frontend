import React, { useEffect, useState } from 'react'
import { changeUser, getData } from '../../utils/crud';
import Button from '../Button';

const WebSettings = () => {
const api = "https://adamsportfolio-backend.onrender.com/api/"; 
const [show,setShow] = React.useState(false)

const [details, setDetails] = useState({user:'',email: '', phone: '', instagram: '', facebook: '', background: '', education: '', skills: ''});
useEffect(() => {
    const fetchWebSettings = async () => {
        const websettings = await getData(api + "collection?model=websettings&getAll=true");
        if (!websettings || websettings.length === 0) {
            console.error("No web settings found");
            return;
        }
        setDetails({...websettings[0],password:''});
    };
    fetchWebSettings();
}, []); 

 const handleChange = (e) => {
    // e.preventDefault()
    const retVal = changeUser(`${api}adminChange`,admin)
  }
  const handleChange2 = (e) => {
    // e.preventDefault()
    const retVal = changeUser(`${api}adminChange`,details)
  }
  return (
    <div className='bg-white flex flex-col gap-3 shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-semibold mb-4'>Web Settings</h1>
        <div  className='flex flex-col gap-5 w-full p-4'>
            <h1 className='text-2xl font-semibold text-left'>Change Admin Logins</h1>
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-4 items-baseline'>
            <label className='text-gray-700 text-sm font-bold mb-2'>username</label>
            <input type="email" className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter new email' onChange={(e)=>{setDetails({...details,user:e.target.value})}} value={details.user}/>
            </div>
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-4 items-baseline'>
            <label className='text-gray-700 text-sm font-bold mb-2'>password</label>
            <div className='flex flex-row border border-gray-300 rounded-md p-2 w-full'><input className='flex-1'  type={show?"text":"password"}  placeholder='Enter new email' onChange={(e)=>{setDetails({...details,password:e.target.value})}} /><div className='w-fit'><span className='p-3 cursor-pointer' onClick={()=>{setShow(!show)}}>{show?"hide":"show"}</span></div></div>
            </div>
            <Button text="Change Admin Logins" perform={handleChange}/>
        </div>
        <div  className='flex flex-col gap-5 w-full p-4'>
            <h1 className='text-2xl font-semibold text-left'>Change Page Details</h1>
        <div className='flex flex-col sm:flex-row gap-4 rounded-md'>
            <div className='flex flex-col flex-1 items-start gap-2'>
                <h1 className='font-semibold text-lg'>Email</h1>
                <input onChange={(e)=>setDetails({...details,email:e.target.value})} className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder='Email' type='text' value={details.email}/>
            </div>
           <div className='flex  flex-1 flex-col items-start gap-2'>
                <h1 className='font-semibold text-lg'>Phone</h1>
                <input onChange={(e)=>setDetails({...details,phone:e.target.value})} className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder='Phone' type='text' value={details.phone}/>
            </div>
        </div>
        <div className='flex flex-col flex-1 sm:flex-row gap-4 rounded-md'>
            <div className='flex flex-col flex-1 items-start gap-2'>
                <h1 className='font-semibold text-lg'>Instagram</h1>
                <input onChange={(e)=>setDetails({...details,instagram:e.target.value})} className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder='instagram' type='text' value={details?details.instagram:''}/>
            </div>
            <div className='flex flex-1 flex-col items-start gap-2'>
                <h1 className='font-semibold text-lg'>Facebook link</h1>
                <input onChange={(e)=>setDetails({...details,facebook:e.target.value})} className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder='facebook' type='text'  value={details?details.facebook:''}/>
            </div>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <h1 className='font-semibold text-lg'>Background</h1>
            <textarea onChange={(e)=>setDetails({...details,background:e.target.value.trim()})} className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder='Background'  rows='4' value={details?details.background:''}></textarea>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <h1 className='font-semibold text-lg'>Education</h1>
            <textarea onChange={(e)=>setDetails({...details,education:e.target.value.trim()})} className='w-full p-3 rounded-sm border border-gray-400 flex-1'  placeholder='Education' rows='4' value={details?details.education:''}></textarea>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <h1 className='font-semibold text-lg'>Skills</h1>
            <textarea onChange={(e)=>setDetails({...details,skills:e.target.value.trim()})} className='w-full p-3 rounded-sm border border-gray-400 flex-1' placeholder='Skills' rows='4'  value={details?details.skills:''}></textarea>
        </div>
        <Button text="Update" perform={handleChange2} />
    </div>
    </div>
  )
}

export default WebSettings