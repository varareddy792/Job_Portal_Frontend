import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Select from 'react-select'
import { useAppDispatch, useAppSelector } from '../../../../';
import { clearGetIndustrySlice, industryGet } from '../../../../store/reducers/dropdown/industry';
import { careerProfileUpdate } from '../../../../store/reducers/jobSeekerProfile/careerProfileUpdate';
import { clearGetDepartmentSlice, departmentGet } from '../../../../store/reducers/dropdown/department';
import { clearGetRoleCategorySlice, roleCategoryGet } from '../../../../store/reducers/dropdown/roleCategory';
import { clearGetJobRoleSlice, jobRoleGet } from '../../../../store/reducers/dropdown/jobRole';
import { clearGetCurrencySlice, currencyGet } from '../../../../store/reducers/dropdown/currency';
import { clearGetLocationSlice, locationGet } from '../../../../store/reducers/dropdown/location';
import { clearGetEmployeeTypeSlice, employeeTypeGet } from '../../../../store/reducers/dropdown/employeeType';
import { clearGetJobTypeSlice, jobTypeGet } from '../../../../store/reducers/dropdown/jobType';
import { clearGetPreferredShiftSlice, preferredShiftGet } from '../../../../store/reducers/dropdown/preferredShift';


interface IFormInputs {
  profileSummary: string
  industry: string
  roleCategory: string
  department: string
  jobType: string[]
  jobRole: string
  employeeType: string[]
  preferredShift: string[]
  preferredWorkLocation: string
  currency: string
  expectedSalary: string
  jobSeekerProfile: number

}

const CareerProfileSchema = yup
  .object({
    industry: yup.string().label("Industry").required(),
    department: yup.string().label("department").required(),
    currency: yup.string().label("department").required(),
    roleCategory: yup.string().label("roleCategory").required(),
    preferredWorkLocation: yup.string().label("roleCategory").required(),
    jobRole: yup.string().label("jobRole").required(),
    expectedSalary: yup.string().label("currency").required(),
    employeeType: yup.mixed()
      .oneOf([yup.array().of(yup.string()), yup.string()])
    ,
    jobType: yup.mixed()
      .oneOf([yup.array().of(yup.string()), yup.string()])
    ,
    preferredShift: yup.mixed()
      .oneOf([yup.array().of(yup.string()), yup.string()])
    ,
  })
  .required();

const CareerProfileForm = ({ formSummary, id, profileDashboard, closeDialog }: any) => {
  const dispatch = useAppDispatch();
  const { success: industrySuccess, industry } = useAppSelector((state) => state.getIndustry);
  const { success: departmentSuccess, department } = useAppSelector((state) => state.getDepartment);
  const { success: roleCategorySuccess, roleCategory } = useAppSelector((state) => state.getRoleCategory);
  const { success: jobRoleSuccess, jobRole } = useAppSelector((state) => state.getJobRole);
  const { success: currencySuccess, currency } = useAppSelector((state) => state.getCurrency);
  const { success: locationSuccess, location } = useAppSelector((state) => state.getLocation);
  const { success: employeeTypeSuccess, employeeType } = useAppSelector((state) => state.getEmployeeType);
  const { success: jobTypeSuccess, jobType } = useAppSelector((state) => state.getJobType);
  const { success: preferredShiftSuccess, preferredShift } = useAppSelector((state) => state.getPreferredShift);

  const [selectedIndustry, setSelectedIndustry] = useState(profileDashboard[0]?.industry);
  const [selectedDepartment, setSelectedDepartment] = useState(profileDashboard[0]?.department);
  const [selectedRoleCategory, setSelectedRoleCategory] = useState(profileDashboard[0]?.roleCategory);
  const [selectedJobRole, setSelectedJobRole] = useState(profileDashboard[0]?.jobRole);
  const [selectExpectedSalary, setSelectExpectedSalary] = useState(profileDashboard[0]?.expectedSalary);
  const [selectCurrency, setSelectCurrency] = useState(profileDashboard[0]?.currency?.id);
  const [selectEmployeeType, setSelectEmployeeType] = useState<any>(profileDashboard[0]?.careerProfileEmployeeType);
  const [selectedLocation, setSelectedLocation] = useState(profileDashboard[0]?.careerProfilePreferredLocations[0]?.location);
  const [selectJobType, setSelectJobType] = useState(profileDashboard[0]?.careerProfileJobType);
  const [selectPreferredShift, setSelectPreferredShift] = useState(profileDashboard[0]?.careerProfilePreferredShift);


  const [query, setQuery] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IFormInputs>({
    //resolver: yupResolver(CareerProfileSchema)
  });

  useEffect(() => {
    setValue('profileSummary', profileDashboard);
  }, [setValue, profileDashboard]);

  const onSubmit = (data: IFormInputs) => {
    console.log("data", data);

    const jobType = data?.jobType?.map(jobType => ({ jobType: jobType }));
    const employeeType = data?.employeeType?.map(employeeType => ({ employeeType }));
    const preferredLocations = [selectedLocation.id]?.map(location => ({ location }));
    const preferredShift = data?.preferredShift?.map(preferredShift => ({ preferredShift }));

    dispatch(careerProfileUpdate({ industry: selectedIndustry.id, department: selectedDepartment.id, roleCategory: selectedRoleCategory.id, jobRole: selectedJobRole.id, careerProfileJobType: jobType, careerProfileEmployeeType: employeeType, careerProfilePreferredLocations: preferredLocations, careerProfilePreferredShift: preferredShift, currency: data.currency, expectedSalary: data.expectedSalary, jobSeekerProfile: id }));
  }

  useEffect(() => {
    dispatch(industryGet());
    dispatch(departmentGet());
    dispatch(roleCategoryGet());
    dispatch(jobRoleGet());
    dispatch(currencyGet());
    dispatch(locationGet());
    dispatch(employeeTypeGet());
    dispatch(jobTypeGet());
    dispatch(preferredShiftGet());

  }, [dispatch]);

  useEffect(() => {
    if (industrySuccess)
      dispatch(clearGetIndustrySlice());
    if (departmentSuccess)
      dispatch(clearGetDepartmentSlice());
    if (roleCategorySuccess)
      dispatch(clearGetRoleCategorySlice());
    if (jobRoleSuccess)
      dispatch(clearGetJobRoleSlice());
    if (currencySuccess)
      dispatch(clearGetCurrencySlice());
    if (locationSuccess)
      dispatch(clearGetLocationSlice());
    if (employeeTypeSuccess)
      dispatch(clearGetEmployeeTypeSlice());
    if (jobTypeSuccess)
      dispatch(clearGetJobTypeSlice());
    if (preferredShiftSuccess)
      dispatch(clearGetPreferredShiftSlice());

  }, [dispatch, roleCategorySuccess, industrySuccess, departmentSuccess, jobRoleSuccess, currencySuccess, locationSuccess, employeeTypeSuccess, jobTypeSuccess, preferredShiftSuccess]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-medium text-gray-900">Career profile</h1>
      </div>
      <span className="text-sm text-gray-500 mb-3">
        {formSummary}
      </span>
      <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-7 font-bold">Current industry</div>
        <div>
          {/* <AutocompleteBox
            selected={selected}
            setSelected={setSelected}
            query={query}
            setQuery={setQuery}
            dropDownData={industry}
            placeHolder={"Enter industry"}
            register={register}
            inputFieldName={"industry"}
            databaseFieldName={'title'}
          /> */}
          <Select options={industry} />
        </div>
        <div className="pt-7 font-bold">Department</div>
        <div>
          {/* <AutocompleteBox
            selected={selectedDepartment}
            setSelected={setSelectedDepartment}
            query={query}
            setQuery={setQuery}
            arrayDropDownContent={department}
            placeHolder={"Enter department"}
            register={register}
            inputFieldName={"department"}
            databaseFieldName={'title'} /> */}
          <Select options={department} />
        </div>
        <div className="pt-7 font-bold">Role category</div>
        <div>
          {/* <AutocompleteBox
            selected={selectedRoleCategory}
            setSelected={setSelectedRoleCategory}
            query={query}
            setQuery={setQuery}
            arrayDropDownContent={roleCategory}
            placeHolder={"Enter role category"}
            register={register}
            inputFieldName={"roleCategory"}
            databaseFieldName={'title'} /> */}
          <Select options={roleCategory} />
        </div>
        <div className="pt-7 font-bold">Job role</div>
        <div>
          {/* <AutocompleteBox
            selected={selectedJobRole}
            setSelected={setSelectedJobRole}
            query={query}
            setQuery={setQuery}
            arrayDropDownContent={jobRole}
            placeHolder={"Enter job role"}
            register={register}
            inputFieldName={"jobRole"}
            databaseFieldName={'title'} /> */}
          <Select options={jobRole} />
        </div>
        <div className="pt-7 font-bold">Desired job type</div>
        <div className='grid grid-cols-3 gap-4'>
          {jobType.map(item => <div key={item.id}>
            <input
              type='checkbox'
              defaultChecked={selectJobType?.map((item1: any) => item1?.jobType?.id === item?.id)[0] === true ? true : false}
              value={item.id}
              {...register("jobType")}
              className='mx-3 w-4 h-4'
            />{item?.title}
          </div>)}
        </div>
        <div className="pt-7 font-bold">Desired employment type</div>
        <div className='grid grid-cols-3 gap-4'>
          {employeeType.map(item => <div key={item.id}>
            <input
              type='checkbox'
              value={item.id}
              defaultChecked={selectEmployeeType?.map((item1: any) => item1?.employeeType?.id === item?.id)[0] === true ? true : false}
              {...register("employeeType")}
              className='mx-3 w-4 h-4'
            />{item.title}
          </div>)}
        </div>

        <div className="pt-7 font-bold">Preferred shift</div>
        <div className='grid grid-cols-3 gap-4'>
          {preferredShift.map((item, key) => <div key={item.id}>
            <input
              type='checkbox'
              value={item.id}
              defaultChecked={selectPreferredShift?.map((item1: any) => item1?.preferredShift?.id === item?.id)[key] === true ? true : false}
              {...register("preferredShift")}
              className='mx-3 w-4 h-4'
            />{item.title}
          </div>
          )}
        </div>
        <div className="pt-7 font-bold">Preferred work location (Max 10)</div>
        <div>
          {/* <AutocompleteBox
            selected={selectedLocation}
            setSelected={setSelectedLocation}
            query={query}
            setQuery={setQuery}
            arrayDropDownContent={location}
            placeHolder={"Enter preferred work location"}
            register={register}
            inputFieldName={"preferredWorkLocation"}
            databaseFieldName={'title'} /> */}
          <Select
            defaultValue={selectedLocation}
            isMulti
            name="location"
            options={location} />
        </div>
        <div className="pt-7 font-bold">Expected salary</div>
        <div className='w-full'>
          <div className='float-left mr-3'>
            <select

              {...register("currency")} className='W-12 block p-2.5  text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 outline-none' value={selectCurrency}>
              <option>select</option>
              {currency.map(item => <option key={item?.id} value={item?.id}>{item.title}</option>)}
            </select>
          </div>
          <div className='float-left '>
            <input defaultValue={selectExpectedSalary} className=' block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 outline-none'  {...register("expectedSalary")} />
          </div>
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