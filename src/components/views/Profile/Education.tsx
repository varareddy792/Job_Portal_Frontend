import React, { useState } from 'react'
import Modal from '../../commonComponents/Modal';

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);

  
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="w-full rounded-2xl bg-white p-4 mt-5" >
      <div className="flex items-center justify-between mb-4">
        <h1>Education</h1>
        <h1 className="text-blue-600 font-medium cursor-pointer" onClick={openModal}>Add education</h1>
      </div>
      <span className="text-sm text-gray-500">Mention your education details.</span>  
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalTitle={"Education"}
        modalBody={<h1>Pass your component here</h1>}
      />
    </div>
  )
}