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

// const ResumeSchema = yup
//   .object({
//     keySkills: yup.string()
//       .label("Enter your area of Expertise/Specialization").required(),
//   })
//   .required();

const KeySkillsForm = ({ keySkill, setKeySkill, keySkillFetch, setKeySkillFetch }: any) => {

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
    //resolver: yupResolver(ResumeSchema)
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
      // axios.post(`${process.env.REACT_APP_API_PATH}/jobSeekerProfile/keySkills/`, {
      //   keySkills: filteredData.toString(),
      // }, {
      //   headers: {
      //     'Authorization': `Bearer ${Cookies.get('token')}`
      //   }
      // }
      // ).then((response) => {
      //   console.log(response);
      //   setIsAddDeleted({ state: response.status.toString(), message: "Deleted!!", color: 'red' });

      // });
      setKeySkillFetch(filteredData);
    }
    if (action === 'Add') {
      if (!isInArray(item, keySkillFetch)) {

        filteredData = [...keySkillFetch, item];
        // axios.post(`${process.env.REACT_APP_API_PATH}/jobSeekerProfile/keySkills/`, {
        //   keySkills: filteredData.toString(),
        // }, {
        //   headers: {
        //     'Authorization': `Bearer ${Cookies.get('token')}`
        //   }
        // }
        // ).then((response) => {
        //   setIsAddDeleted({ state: response.status.toString(), message: "Added!!", color: "green" });
        //   setKeySkillFetch(filteredData);
        // });
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
    <div className="h-full w-10/12">
      <div className="col-start-2 col-end-4">
        <h1 className=" text-xs mb-5 col-start-1 col-end-5"> Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills. each skill is separated by a comma.
        </h1>
        <h2 className=" text-xl mb-5 col-start-1 col-end-5"> Skills</h2>
        {isAddDelete.state && <p className={`font-normal text-xs text-${isAddDelete.color}-500`}> {isAddDelete.message}</p>}
        <div className="flex flex-wrap">
          {keySkillFetch && keySkillFetch?.map((item: any, key: number) =>
            <div key={key} className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5 ">{item}<GrFormClose className='h-6 w-6 float-right ml-2 cursor-pointer' onClick={() => handleAddDelete('Delete', item)} /></div>
          )}
        </div>
        <div className="col-start-1 col-end-4">
          <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
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
          </form>
          <div className="mt-10 mb-10">
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
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default KeySkillsForm