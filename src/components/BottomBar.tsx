// BottomBar.tsx
import { useState } from 'react';
import Modal from './Modal';

const BottomBar = () => {
  const [modal, setModal] = useState<null | string>(null);

  const openModal = (type: string) => setModal(type);
  const closeModal = () => setModal(null);

  const options = [
    { label: 'RSVP', key: 'rsvp' },
    { label: 'Kalendar', key: 'calendar' },
    { label: 'Contact', key: 'contact' },
    { label: 'Address', key: 'address' },
  ];

  return (
    <>
      <div className="fixed bottom-0 md:left-1/2 md:transform-[translate(-50%,0)] w-full md:w-1/2 md:px-16 mx-auto z-50 backdrop-blur-xs shadow-inner">
        <div className="flex justify-around py-2 px-4">
          {options.map(({ label, key }) => (
            <button
              key={key}
              className="flex-1 text-center py-3 mx-1 rounded-xl bg-gray-100 hover:bg-gray-200 transition aspect-square"
              onClick={() => openModal(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {modal && (
        <Modal closeModal={closeModal} modalTitle={modal}>
          {modal === 'rsvp' && <div>RSVP Form Placeholder</div>}
          {modal === 'calendar' && <div>Calendar Placeholder</div>}
          {modal === 'contact' && <div>Contact Form Placeholder</div>}
          {modal === 'address' && <div>Address Placeholder</div>}
        </Modal>
      )}
    </>
  );
};

export default BottomBar;
