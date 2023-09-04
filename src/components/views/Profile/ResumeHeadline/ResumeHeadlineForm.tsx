import React, { useEffect } from 'react'
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
      .max(1000, 'Must be less than 1000 digits')
      .label("Resume headline").required(),
  })
  .required();

const ResumeHeadlineForm = ({ resumeHeadline, setResumeHeadline, setIsOpen }: any) => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.resumeHeadline);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(ResumeSchema)
  });

  useEffect(() => {
    setValue('resumeHeadline', resumeHeadline);
  }, [setValue, resumeHeadline]);

  const onSubmit = (data: IFormInputs) => {
    dispatch(resumeHeadlineUpdate({
      resumeHeadline: data.resumeHeadline,
    }));
    setResumeHeadline(data.resumeHeadline);
  };
  const watchResumeHeadline = watch('resumeHeadline')?.length;

  return (
    <div className="h-full w-12/12">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-medium text-gray-900">Resume headline
        </h1>
      </div>
      <div className="col-start-2 col-end-4">
        <h1 className="text-sm text-gray-500 mb-3"> It is the first thing recruiters notice in your profile. Write concisely what makes you unique and right person for the job you are looking for.
        </h1>
        <div className="col-start-1 col-end-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <textarea id="message" maxLength={1000} className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
                placeholder="Minimum 50  and maximum 1000"
                {...register("resumeHeadline")}
                rows={4}
                required
              >{resumeHeadline}</textarea>


              {errors.resumeHeadline && <p className="font-normal text-xs text-red-500">{errors.resumeHeadline.message}</p>}
              {success && <p className="font-normal text-xs text-green-500">Resume headline updated successfully</p>}
              <div className="text-xs font-light text-gray-600 text-right">{watchResumeHeadline ? 1000 - watchResumeHeadline : 1000} character(s) left</div>
            </div>
            <div className='float-right'>
              <button type="button" className="mr-3" onClick={() => setIsOpen(false)}>Cancel</button>
              <button type="submit" className={watchResumeHeadline === 0 || watch('resumeHeadline') === null || resumeHeadline?.length <= 0 ? "rounded-3xl bg-blue-100 text-white px-5 py-1.5" : "rounded-3xl bg-blue-500 text-white px-5 py-1.5"}
                disabled={watchResumeHeadline === 0 || watch('resumeHeadline') === null}>Save</button>
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