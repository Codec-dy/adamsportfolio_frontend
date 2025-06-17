// src/components/admin/CrudWrapper.jsx
import React from "react";
import { MyProvider } from "../../utils/MyContext";
import CrudComponent from "./CrudComponent";
import AdminDelete from "./AdminDelete";

export default function CrudWrapper({ projects }) {
  return (
    <MyProvider>
      <div className="flex flex-col gap-4 p-4">
        {projects.map((project) => (
          <div key={project._id}>
            <CrudComponent project={project} id={project._id} />
            <AdminDelete id={project._id} model={"project"} />
          </div>
        ))}
      </div>
    </MyProvider>
  );
}
