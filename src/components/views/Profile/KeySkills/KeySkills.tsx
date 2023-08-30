import React, { useEffect, useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import Modal from '../../../commonComponents/Modal';
import KeySkillsForm from './KeySkillsForm';
import axios from 'axios';
import Cookies from 'js-cookie';

const KeySkills = () => {
  const modalTitle = 'Key skills';
  const [isOpen, setIsOpen] = useState(false);
  const [keySkill, setKeySkill] = useState([]);
  const [keySkillFetch, setKeySkillFetch] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/keySkills/get`).then((response) => {
      setKeySkill(response.data.data);
    });
    axios.get(`${process.env.REACT_APP_API_PATH}/jobSeekerProfile/keySkills/`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }
    ).then((response) => {
      if (response.data.data[0]?.keySkills)
        setKeySkillFetch(response.data.data[0]?.keySkills.split(","));
    });
  }, []);
  const modalBody = <KeySkillsForm
    keySkill={keySkill}
    setKeySkill={setKeySkill}
    keySkillFetch={keySkillFetch}
    setKeySkillFetch={setKeySkillFetch}
    setIsOpen={setIsOpen}
  />;

  return (
    <div className="w-full rounded-2xl bg-white p-4 mt-5">
      <div className="flex items-center mb-2">
        <h1>Key skills</h1><span className="ml-2 text-gray-400 hover:scale-125 cursor-pointer"> <FiEdit2 onClick={() => setIsOpen(true)} /> </span>
      </div>
      <div className="flex flex-wrap">
        {keySkillFetch && keySkillFetch?.map((item, key) =>
          <span key={key} className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">{item}</span>
        )}

      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalBody={modalBody}
      />
    </div>
  )
}

export default KeySkills