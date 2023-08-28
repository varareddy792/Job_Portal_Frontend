import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../../../';
import { useAppSelector } from '../../../../';
import { resumeHeadlineUpdate } from '../../../../store/reducers/jobSeekerProfile/resumeHeadline';

interface IFormInputs {
  resumeHeadline: string;
}

const ResumeSchema = yup
  .object({
    resumeHeadline: yup.string()
      .min(50, 'Must be greater than 50 character')
      .max(500, 'Must be less than 500 digits')
      .label("Resume headline").required(),
  })
  .required();

const ResumeHeadlineForm = ({ resumeHeadline, setResumeHeadline }: any) => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.resumeHeadline);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(ResumeSchema)
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(resumeHeadlineUpdate({
      resumeHeadline: data.resumeHeadline,
    }));
    setResumeHeadline(data.resumeHeadline);
  };

  return (
    <div className="h-full w-10/12">
      <div className="col-start-2 col-end-4">
        <h1 className=" text-sm mb-5 col-start-1 col-end-5"> It is the first thing recruiters notice in your profile. Write concisely what makes you unique and right person for the job you are looking for.
        </h1>
        <div className="col-start-1 col-end-4">
          <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <textarea className="shadow-sm appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[auto]"
                placeholder="Minimum 50 character. Sample headlines: Sales Manager well versed in Excel and Dynamics CRM. Senior-level Interior Designer with expertise in 3D modeling."
                {...register("resumeHeadline")}
                required
              ></textarea>
              {errors.resumeHeadline && <p className="font-normal text-xs text-red-500">{errors.resumeHeadline.message}</p>}
              {success && <p className="font-normal text-xs text-green-500">Resume headline updated successfully</p>}
            </div>

          </form>
        </div>
        <div>
        </div>
      </div>
    </div >
  )
}

export default ResumeHeadlineForm