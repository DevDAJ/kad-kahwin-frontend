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
        className="bg-white p-6 rounded-xl max-w-sm w-full shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4 capitalize">{modalTitle} Modal</h2>
        {children}
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
  );
};

export default Modal;
