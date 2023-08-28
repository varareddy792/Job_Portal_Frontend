import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../../../';
import { profileDashboardUpdate } from '../../../../store/reducers/jobSeekerProfile/profileDashboardUpdate';

interface IFormInputs {
    profileSummary: string
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
        ),
    })
    .required();

const ProfileSummaryForm = ({ testSummary, id, defaultProfileSummary }: any) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(SignUpSchema)
    });

    useEffect(() => {
        setValue('profileSummary', defaultProfileSummary);
    }, [setValue, defaultProfileSummary]);

    const onSubmit = (data: IFormInputs) => {
        dispatch(profileDashboardUpdate({ id, profileSummary: data.profileSummary }));
    }

    return (
        <div className="flex flex-col my-5">
            <span className="text-sm text-gray-500 mb-3">
                {testSummary}
            </span>
            <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea id="message" maxLength={1000} className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="Type here..."
                        {...register("profileSummary")}
                        rows={4}
                    ></textarea>
                    {errors.profileSummary && <p className="font-normal text-xs text-red-500 absolute">{errors.profileSummary.message}</p>}
                    <div className="text-xs font-light text-gray-600 text-right">1000 character(s) left</div>
                </div>
            </form>
        </div>
    )
}

export default ProfileSummaryForm;