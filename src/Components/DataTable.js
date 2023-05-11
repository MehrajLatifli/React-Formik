import React from 'react'

export default function DataTable({ formData }) {

    // alert(JSON.stringify(formData, null, 2));
    return (


<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

        <div className="p-6"> {formData.map((item, index) => 

          <div key={index} className="block border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> 
            <div className="mb-2">Id: {index}</div>
            <div className="mb-2 ">Name: {item.name}</div>
            <div className="mb-2 ">Gender: {item.gender}</div>
            <div className="mb-2 ">Studied abroad: {item.studiedabroad==true && "Yes" || "No"}</div>
            <div className="mb-2 flex items-center justify-center"> Education:
            {item.educationdegrees.map((it, index) => 
            <div key={index} className="mb-2 m-2">{it.value}</div>
            )}
            </div>
          </div>)}
        </div>




      </div>
      );
}
