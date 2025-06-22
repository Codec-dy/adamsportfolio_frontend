// src/components/admin/CrudWrapper.jsx
import React from "react";
import { MyProvider, useMyContext } from "../../utils/MyContext";
import CrudComponent from "./CrudComponent";
import AdminEditDelete from "./AdminEditDelete";
import Button from "../Button";
export default function CrudWrapper({ projects }) {
  
  return (
    <MyProvider>
      <div className="flex flex-col gap-4 mt-2 sm:p-4">
        {projects.map((project) => (
          <div className="bg-white sm:p-5 p-2" key={project._id}>
            <CrudComponent project={project} id={project._id} />
            
            <div className="flex sm:flex-row flex-col gap-3"><a href={"/admin/project/"+project._id} className="mt-1"><Button text={"Add to Project"}/></a><AdminEditDelete id={project._id} project={project} model={"project"} /></div>
          </div>
        ))}
      </div>
    </MyProvider>
  );
}
