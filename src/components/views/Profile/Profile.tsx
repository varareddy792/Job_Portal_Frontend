import React from 'react';

export default function Profile() {
  return (
      <div className="px-20 py-14 flex justify-center">
        <div className="bg-gray-500 w-full h-60 rounded-lg">
        <div className="grid grid-cols-5 h-full">
          <div className="h-full w-full flex justify-center items-center">
            <img src="/logo192.png" alt="logo"/>
          </div>
          <div className="col-start-2 col-end-6 p-4">
            <div className="grid grid-cols-2 h-1/2">
              <div>
                <h1>VARA PRASAD REDDY URUMADLA</h1>
              </div>
             

            </div>
            <hr />
            <div className="grid grid-cols-2 h-1/2">
              <div>Varaprasad</div>
              <div>reddy</div>
            </div>
          </div>
          </div>
        </div>
       </div>
  )
}
