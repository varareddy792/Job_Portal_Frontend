import React, { useState } from 'react'
import Modal from '../../commonComponents/Modal';

const ProfileSummary = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [testSummary, setTestSummary] = useState("Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.");
    const openModal = () => {
        setIsOpen(true);
    };
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
                        <div>
                            <textarea id="message" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
                                placeholder="Type here..."
                                rows={4}
                            ></textarea>
                            <span className="text-xs font-light text-gray-600">1000 character(s) left</span>
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default ProfileSummary;