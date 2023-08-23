import { FiEdit2 } from "react-icons/fi";
import Modal from "../../../commonComponents/Modal";
import { useState } from "react";
import ResumeHeadlineForm from "./ResumeHeadlineForm";

const ResumeHeadline = () => {
  const modalTitle = 'Resume headline';
  const modalBody = <ResumeHeadlineForm />;
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full rounded-2xl bg-white p-4 mt-5">
      <div className="flex items-center mb-4">
        <h1>Resume headline</h1><span className="ml-2 text-gray-400 hover:scale-125 cursor-pointer">
          <FiEdit2 onClick={() => setIsOpen(true)} /> </span>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Looking for a challenge assignment where I can prove my ability ,working knowledge solving through my sincerity ,dedication & my hard work that would give me an opportunity to grow my self in the organization.
      </p>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalTitle={modalTitle}
        modalBody={modalBody}
      />
    </div>
  )
}

export default ResumeHeadline