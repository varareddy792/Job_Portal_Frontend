import { useState } from 'react';
import Modal from '../../../commonComponents/Modal';
import PersonalDetailsForm from './PersonalDetailsForm';
import { FiEdit2 } from "react-icons/fi";

const PersonalDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <div className="w-full rounded-2xl bg-white p-4 mt-5" >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <h1>Personal details</h1>
                    <span className="ml-2 text-gray-400 hover:scale-125 cursor-pointer" onClick={openModal}>
                        <FiEdit2 />
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <div className="mb-3">
                        <h2 className="text-slate-500">Personal</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Personal</button>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-slate-500">Date of birth</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Date of birth</button>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-slate-500">Category</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Category</button>
                    </div>
                    <div>
                        <h2 className="text-slate-500">Differently abled</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Differently abled</button>
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <h2 className="text-slate-500">Career break</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Career break</button>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-slate-500">Work permit</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Work permit</button>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-slate-500">Address</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Address</button>
                    </div>
                    <div>
                        <h2 className="text-slate-500">Languages</h2>
                        <button className="text-blue-600 text-sm font-semibold">Add Languages</button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalBody={<PersonalDetailsForm />}
            />
        </div>
    )
}

export default PersonalDetails;