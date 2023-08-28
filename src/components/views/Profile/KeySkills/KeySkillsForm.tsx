import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../../../';
import { useAppSelector } from '../../../../';
import { keySkillsUpdate } from '../../../../store/reducers/jobSeekerProfile/keySkills';
import AutocompleteBox from '../../../commonComponents/AutocompleteBox';
import { GrFormClose } from 'react-icons/gr';
import axios from 'axios';
import Cookies from 'js-cookie';

interface IFormInputs {
  keySkills: string;
}

const KeySkillsForm = ({ keySkill, setKeySkill, keySkillFetch, setKeySkillFetch, setIsOpen }: any) => {

  const dispatch = useAppDispatch();
  const [skill, setSkill] = useState({})
  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState("");
  const [isAddDelete, setIsAddDeleted] = useState({ state: '', message: '', color: '' });
  const { success } = useAppSelector((state) => state.keySkills);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
  });

  // OnSubmit button
  const onSubmit = (data: IFormInputs) => {
    if (!isInArray(data.keySkills, keySkillFetch)) {
      if (data.keySkills !== '') {
        const keySkillsVar = [...keySkillFetch, data.keySkills];
        setKeySkillFetch([...keySkillFetch, data.keySkills]);
      }
      dispatch(keySkillsUpdate({
        keySkills: keySkillFetch.toString(),

      }));
    } else {
      setIsAddDeleted({ state: "1", message: "Already added!!", color: "red" });
    }
  };

  // Check the item in array
  function isInArray(value: string, array: string[]) {
    return array?.indexOf(value) > -1;
  }

  // Delete and Add the item
  const handleAddDelete = (action: string, item: string) => {
    if (action === 'Delete') {
      var filteredData = keySkillFetch?.filter(function (filterItem: any) {
        return filterItem !== item
      })

      setKeySkillFetch(filteredData);
    }
    if (action === 'Add') {
      if (!isInArray(item, keySkillFetch)) {

        filteredData = [...keySkillFetch, item];
        setKeySkillFetch(filteredData);
      } else {
        setIsAddDeleted({ state: "1", message: "Already added!!", color: "red" });
      }
    }

  }
  useEffect(() => {
    setTimeout(() => {
      setIsAddDeleted({ state: '', message: '', color: '' });
    }, 5000)
  }, [isAddDelete]);

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-medium text-gray-900">Key skills
        </h1>
      </div>
      <div className="col-start-2 col-end-4">
        <h1 className="text-sm text-gray-500 mb-3"> Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills. each skill is separated by a comma.
        </h1>
        <h2 className=" text-lg mb-5 col-start-1 col-end-5"> Skills</h2>
        {isAddDelete.state && <p className={`font-normal text-xs text-${isAddDelete.color}-500`}> {isAddDelete.message}</p>}
        <div className="flex flex-wrap">
          {keySkillFetch && keySkillFetch?.map((item: any, key: number) =>
            <div key={key} className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5 ">{item}<GrFormClose className='h-6 w-6 float-right ml-2 cursor-pointer' onClick={() => handleAddDelete('Delete', item)} /></div>
          )}
        </div>
        <div className="col-start-1 col-end-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <AutocompleteBox
                selected={selected}
                setSelected={setSelected}
                query={query}
                setQuery={setQuery}
                arrayDropDownContent={keySkill}
                placeHolder={"Enter your area of Expertise/Specialization"}
                register={register}
                inputFieldName={"keySkills"}
                databaseFieldName={'title'} />
              {errors.keySkills && <p className="font-normal text-xs text-red-500">{errors.keySkills.message}</p>}
              {success && <p className="font-normal text-xs text-green-500"> Area of Expertise / Specialization added successfully</p>}
            </div>


            <div className="mt-10 mb-10 text-sm text-gray-500 mb-3">
              <h2>Or you can select from the suggested set of skills</h2>
              <div className="flex flex-wrap mt-5">
                {keySkill && keySkill.filter((items: any) => items.title?.toLowerCase()
                  .replace(/\s+/g, "")
                  .includes(query.toLowerCase().replace(/\s+/g, ""))
                ).slice(0, 5)?.map((item: any, key: number) =>
                  <div key={key} className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5 cursor-pointer" onClick={() => handleAddDelete('Add', item.title)} >{item.title}</div>
                )}
              </div>
            </div>
            <div className='float-right'>
              <button type="button" onClick={() => setIsOpen(false)} className="mr-3">Cancel</button>
              <button type="submit" className="rounded-3xl bg-blue-600 text-white px-5 py-1.5">Save</button>
            </div>
          </form>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default KeySkillsForm