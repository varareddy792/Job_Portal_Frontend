import { FiEdit2 } from "react-icons/fi";
import Modal from "../../../commonComponents/Modal";
import { useEffect, useState } from "react";
import ResumeHeadlineForm from "./ResumeHeadlineForm";
import axios from "axios";
import Cookies from "js-cookie";

const ResumeHeadline = () => {
  const modalTitle = 'Resume headline';

  const [isOpen, setIsOpen] = useState(false)
  const [resumeHeadline, setResumeHeadline] = useState();
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_PATH}/jobSeekerProfile/resumeHeadline`,
      {
        resumeHeadline: '',
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }
    ).then((response) => {
      setResumeHeadline(response.data.data[0].resumeHeadline);
    });


  }, [resumeHeadline])


  const modalBody = <ResumeHeadlineForm resumeHeadline={resumeHeadline} setResumeHeadline={setResumeHeadline} />;

  return (
    <div className="w-full rounded-2xl bg-white p-4 mt-5">
      <div className="flex items-center mb-4">
        <h1>Resume headline</h1><span className="ml-2 text-gray-400 hover:scale-125 cursor-pointer">
          <FiEdit2 onClick={() => setIsOpen(true)} /> </span>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        {resumeHeadline}
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