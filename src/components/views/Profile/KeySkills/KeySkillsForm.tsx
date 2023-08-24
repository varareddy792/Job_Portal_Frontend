import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../../../';
import { useAppSelector } from '../../../../';
import keySkills, { keySkillsUpdate } from '../../../../store/reducers/keySkills';
import AutocompleteBox from '../../../commonComponents/AutocompleteBox';

interface IFormInputs {
  keySkills: string;
}

const ResumeSchema = yup
  .object({
    keySkills: yup.string()
      .label("Enter your area of Expertise/Specialization").required(),
  })
  .required();

const KeySkillsForm = ({ keySkill, setKeySkill, keySkillFetch, setKeySkillFetch }: any) => {

  const dispatch = useAppDispatch();
  const [skill, setSkill] = useState({})
  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState("");

  const { success } = useAppSelector((state) => state.keySkills);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(ResumeSchema)
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(keySkillsUpdate({
      keySkills: data.keySkills,
      userId: "1",

    }));
    setKeySkillFetch([...keySkillFetch, data.keySkills]);
  };

  return (
    <div className="h-full w-10/12">
      <div className="col-start-2 col-end-4">
        <h1 className=" text-xs mb-5 col-start-1 col-end-5"> Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills. each skill is separated by a comma.
        </h1>
        <h2 className=" text-xl mb-5 col-start-1 col-end-5"> Skills</h2>
        <div className="flex flex-wrap">
          {keySkillFetch.map((item: any, key: number) =>
            <span key={key} className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">{item}</span>
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
            <button className={Object.keys(errors).length !== 0 ? "bg-indigo-200 text-white font-bold px-3 py-2 rounded-3xl" : "bg-indigo-600 text-white font-bold px-3 py-2 rounded-3xl"} type="submit">Save</button>
          </form>
        </div>
        <div>
        </div>
      </div>
    </div >
  )
}

export default KeySkillsForm