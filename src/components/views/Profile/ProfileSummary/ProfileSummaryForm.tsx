import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../../../';
import { profileDashboardUpdate } from '../../../../store/reducers/jobSeekerProfile/profileDashboardUpdate';

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

const ProfileSummaryForm = ({ testSummary, id, defaultProfileSummary, closeDialog }: any) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
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

    const handleDelete = () => {
        dispatch(profileDashboardUpdate({ id, profileSummary: null }));
    }

    const watchProfileSummary = watch('profileSummary')?.length;

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
                <h1 className="text-lg font-medium text-gray-900">Profile summary</h1>
                <div>
                    {defaultProfileSummary && <button className="text-blue-700 font-semibold hover:underline" onClick={handleDelete}>Delete</button>}
                </div>
            </div>
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
                    <div className="text-xs font-light text-gray-600 text-right">{watchProfileSummary && 1000 - watchProfileSummary} character(s) left</div>
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
                            form='my-form' type="submit"
                            className={watchProfileSummary === 0 || watch('profileSummary') === null ? "rounded-3xl bg-blue-100 text-white px-5 py-1.5" : "rounded-3xl bg-blue-500 text-white px-5 py-1.5"}
                            disabled={watchProfileSummary === 0 || watch('profileSummary') === null}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileSummaryForm;