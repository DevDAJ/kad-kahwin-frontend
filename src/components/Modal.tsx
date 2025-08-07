interface ModalProps {
  closeModal: () => void;
  action?: () => void;
  actionText?: string;
  modalTitle: string;
  children: React.ReactNode;
}
const Modal = ({
  closeModal,
  modalTitle,
  children,
  action,
  actionText = 'confirm',
}: ModalProps) => {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl max-w-sm w-full shadow-lg flex flex-col"
      >
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-xl font-semibold capitalize text-center">{modalTitle}</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 cursor-pointer font-bold align-text-top"
          >
            &times;
          </button>
        </div>
        {children}
        <div className="flex justify-end w-full gap-2">
          {action && (
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
              onClick={action}
            >
              {actionText}
            </button>
          )}
          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
