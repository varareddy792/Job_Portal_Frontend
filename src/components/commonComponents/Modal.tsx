import React from 'react'

export default function Modal({ modalTitle, modalBody, isOpen, setIsOpen }: any) {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-red">
          <div className="inset-0"></div>
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-lg font-semibold mb-4">{modalTitle}</h2>
            <p className="mb-4">
              {modalBody}
            </p>
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded float-right"
            >
              Close
            </button>
            <button
              onClick={closeModal}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded float-right mr-2"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
