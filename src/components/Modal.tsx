const Modal = ({closeModal, modalTitle}: {closeModal: () => void, modalTitle: string}) => {
    return (<div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-lg">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {modalTitle} Modal
            </h2>
            <p className="text-gray-700">This is the {modalTitle} content.</p>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>)
}

export default Modal