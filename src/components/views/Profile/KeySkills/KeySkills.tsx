import React, { useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import Modal from '../../../commonComponents/Modal';
import KeySkillsForm from './KeySkillsForm';

const KeySkills = () => {
  const modalTitle = 'Key skills';
  const modalBody = <KeySkillsForm />;
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full rounded-2xl bg-white p-4 mt-5">
      <div className="flex items-center mb-2">
        <h1>Key skills</h1><span className="ml-2 text-gray-400 hover:scale-125 cursor-pointer"> <FiEdit2 onClick={() => setIsOpen(true)} /> </span>
      </div>
      <div className="flex flex-wrap">
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
        <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalTitle={modalTitle}
        modalBody={modalBody}
      />
    </div>
  )
}

export default KeySkills