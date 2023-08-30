import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from '../../../../';
import { profileDashboardUpdate } from '../../../../store/reducers/jobSeekerProfile/profileDashboardUpdate';
import AutocompleteBox from '../../../commonComponents/AutocompleteBox';
import { clearGetIndustrySlice, industryGet } from '../../../../store/reducers/dropdown/industry';
import { careerProfileUpdate } from '../../../../store/reducers/jobSeekerProfile/careerProfileUpdate';

interface IFormInputs {
  profileSummary: string | null
}

const SignUpSchema = yup
  .object({
    profileSummary: yup.string().label("Profile summary").required().test(
      'len', 'Minimum 50 characters are required',
      (data) => {
        if (data.length < 50) {
          return false
        } else {
          return true
        }
      }
    ).nullable(),
  })
  .required();

const CareerProfileForm = ({ formSummary, id, profileDashboard, closeDialog }: any) => {
  const dispatch = useAppDispatch();
  const { success: industrySuccess, industry } = useAppSelector((state) => state.getIndustry);
  console.log(industrySuccess, industry);

  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(SignUpSchema)
  });

  useEffect(() => {
    setValue('profileSummary', profileDashboard);
  }, [setValue, profileDashboard]);

  const onSubmit = (data: IFormInputs) => {
    dispatch(careerProfileUpdate({ id, profileSummary: data.profileSummary }));
  }


  useEffect(() => {
    dispatch(industryGet());
  }, [dispatch]);

  useEffect(() => {
    if (industrySuccess)
      dispatch(clearGetIndustrySlice());
  }, [dispatch, industrySuccess]);

  console.log(industry);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-medium text-gray-900">Career profile</h1>

      </div>
      <span className="text-sm text-gray-500 mb-3">
        {formSummary}
      </span>
      <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
        <div>Current industry</div>
        <div>
          <AutocompleteBox
            selected={selected}
            setSelected={setSelected}
            query={query}
            setQuery={setQuery}
            arrayDropDownContent={industry}
            placeHolder={"Enter your area of Expertise/Specialization"}
            register={register}
            inputFieldName={"keySkills"}
            databaseFieldName={'title'} />
        </div>
        <div>
          {errors.profileSummary && <p className="font-normal text-xs text-red-500 absolute">{errors.profileSummary.message}</p>}
        </div>
        <div className="mt-5 flex justify-end items-center">
          <div>
            <button
              type="button"
              className="mr-3"
              onClick={closeDialog}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-3xl bg-blue-500 text-white px-5 py-1.5" >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CareerProfileForm;