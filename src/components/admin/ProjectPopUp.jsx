import React, { useState } from 'react'
import AddComponent from './AddComponent';
import Button from '../Button';

const ProjectPopUp = ({title}) => {
  
  const [addProject, setAddProject] = useState(false);
  const [addDesign, setAddDesign] = useState(false);
  
    return (
        <div className='flex relative '>
            <div className='flex gap-5'>
                  <h1 className='text-2xl font-semibold text-left'>{title}</h1>
                  <div>
                    <Button text={"Add a Project"} perform={() => {setAddProject(true)}} client:idle/>
                  </div>
                  <div>
                    <Button text={"Add a Design"} perform={() => {setAddDesign(true)}} client:idle/>
                  </div>
                </div>
            <div className={`${addProject?'fixed block':'hidden'} w-[90%] max-w-[600px] top-0 absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5 overflow-auto max-h-[90vh]`}><AddComponent type={"project"} title={"Add project"}  cancel={setAddProject}/></div>
            <div className={`${addDesign?'fixed block':'hidden'} w-[90%] max-w-[600px] top-0 absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5 overflow-auto max-h-[90vh]`}><AddComponent type={"design"} title={"Add Graphic Design"}  cancel={setAddDesign}/></div>
        </div>
    
  )
}
export default ProjectPopUp