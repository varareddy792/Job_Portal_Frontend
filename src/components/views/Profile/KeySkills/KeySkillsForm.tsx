import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../../../';
import { useAppSelector } from '../../../../';
import keySkills, { keySkillsUpdate } from '../../../../store/reducers/keySkills';

interface IFormInputs {
  keySkills: string;
}

const ResumeSchema = yup
  .object({
    keySkills: yup.string()
      .min(50, 'Must be greater than 50 character')
      .max(500, 'Must be less than 500 digits')
      .label("Resume headline").required(),
  })
  .required();

const KeySkillsForm = () => {
  const dispatch = useAppDispatch();
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
  };

  return (
    <div className="h-full w-10/12">
      <div className="col-start-2 col-end-4">
        <h1 className=" text-xs mb-5 col-start-1 col-end-5"> Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills. each skill is separated by a comma.
        </h1>
        <h2 className=" text-xl mb-5 col-start-1 col-end-5"> Skills</h2>
        <div className="flex flex-wrap">
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>

        </div>
        <div className="col-start-1 col-end-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">

              <input className="shadow-sm appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[auto]"
                placeholder="Enter your area of Expertise/Specialization"
                {...register("keySkills")}
                required
              />
              {errors.keySkills && <p className="font-normal text-xs text-red-500">{errors.keySkills.message}</p>}
            </div>
            <button className={Object.keys(errors).length !== 0 ? "bg-indigo-200 text-white font-bold px-3 py-2 rounded-3xl" : "bg-indigo-600 text-white font-bold px-3 py-2 rounded-3xl"} type="submit">Save</button>
          </form>
        </div>
        <h2 className=" text-xl mb-5 col-start-1 col-end-5"> Or you can select from the suggested set of skills</h2>
        <div className="flex flex-wrap">
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">React</span>
          <span className="border border-gray-300 rounded-3xl py-1 px-2 text-center m-1.5">NodeJs</span>

        </div>
        <div>

        </div>
      </div>
    </div >
  )
}

export default KeySkillsForm