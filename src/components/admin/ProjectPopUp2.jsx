import React, { useState } from 'react'
import AddComponent2 from './AddComponent2';
import Button from '../Button';

const ProjectPopUp2 = ({title,id,elements}) => {
  const [addDesign, setAddDesign] = useState(false);
    return (
        <div className='flex relative '>
            <div className='flex gap-5'>
                  {title&&<h1 className='text-2xl font-semibold text-left'>{title}</h1>}
                  <div>
                    <Button text={"Add a Design"} perform={() => {setAddDesign(true)}} client:idle/>
                  </div>
                </div>
      
            <div className={`${addDesign?'fixed block':'hidden'} w-[90%] max-w-[600px] top-20px left-[50%] translate-x-[-40%] z-40 bg-gray-200 p-5 overflow-auto max-h-[90vh]`}><AddComponent2 type={"design"} title={"Add Graphic Design"} id={id} elements={elements}  cancel={setAddDesign}/></div>
        </div>
    
  )
}
export default ProjectPopUp2