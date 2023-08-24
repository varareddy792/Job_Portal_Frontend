import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross1 } from 'react-icons/rx';

const Modal = ({ modalTitle, modalBody, isOpen, setIsOpen }: any) => {
  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center">
                  <h1>{modalTitle}</h1>
                  <button
                    onClick={closeDialog}
                    type="button"
                    className="outline-0"
                  >
                    <RxCross1 />
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  {modalBody}
                </div>
                <div className="mt-2 flex justify-end items-center">
                  <div>
                    <button
                      type="button"
                      className="mr-3"
                      onClick={closeDialog}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="rounded-3xl bg-blue-500 text-white px-5 py-1.5"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;