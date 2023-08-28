import React, { useState } from 'react'
import Modal from '../../commonComponents/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
    profileSummary: string | undefined
}

const SignUpSchema = yup
    .object({
        profileSummary: yup.string(),
    })
    .required();

const ProfileSummary = ({ id, profileDashboard }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [testSummary, setTestSummary] = useState("Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.");
    const openModal = () => {
        setIsOpen(true);
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(SignUpSchema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }
    console.log(id, profileDashboard)
    return (
        <div className="w-full rounded-2xl bg-white p-4 mt-5" >
            <div className="flex items-center justify-between mb-4">
                <h1>Profile summary</h1>
                <h1 className="text-blue-600 font-medium cursor-pointer" onClick={openModal}>Add profile summary</h1>
            </div>
            <span className="text-sm text-gray-500">
                {testSummary}
            </span>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalTitle={"Profile summary"}
                modalBody={
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-3">
                            {testSummary}
                        </span>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <textarea id="message" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
                                    placeholder="Type here..."
                                    {...register("profileSummary")}
                                    rows={4}
                                ></textarea>
                                <span className="text-xs font-light text-gray-600">1000 character(s) left</span>
                            </div>
                            <div className="mt-2 flex justify-end items-center">
                                <div>
                                    <button
                                        type="button"
                                        className="mr-3"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-3xl bg-blue-500 text-white px-5 py-1.5"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                }
            />
        </div>
    )
}

export default ProfileSummary;