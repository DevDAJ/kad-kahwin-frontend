// BottomBar.tsx
import { useFirestore } from '@/hooks/useFirestore';
import { ListBulletIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useMutation } from '@tanstack/react-query';
import { Formik } from 'formik';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import InputField from './InputField';
import Modal from './Modal';
import PhoneInfo from './PhoneInfo';

const initialValues = {
  name: '',
  phone: '',
};

function isValidMalaysianPhoneNumber(number: string) {
  // Remove all non-digit characters except leading '+'
  const cleaned = number
    .trim()
    .replace(/^(\+)?[^0-9]+/g, '')
    .replace(/[^\d+]/g, '');

  let localNumber = cleaned;

  // If starts with +60, convert to local (e.g., +60123456789 -> 0123456789)
  if (cleaned.startsWith('+60')) {
    localNumber = '0' + cleaned.slice(3);
  }

  // Mobile: starts with 01[0-35-9], followed by 7 or 8 digits (total: 10 or 11 digits)
  const mobileRegex = /^01[0-35-9][0-9]{7,8}$/;

  // Landline: starts with 03–09, followed by 7 or 8 digits (total: 9 or 10 digits)
  const landlineRegex = /^0[3-9][0-9]{7,8}$/;

  return mobileRegex.test(localNumber) || landlineRegex.test(localNumber);
}

const options = [
  { label: 'RSVP', key: 'rsvp', icon: <ListBulletIcon className="w-6 h-6" /> },
  { label: 'Telefon', key: 'contact', icon: <PhoneIcon className="w-6 h-6" /> },
  { label: 'Lokasi', key: 'address', icon: <MapPinIcon className="w-6 h-6" /> },
];

const isBigScreen = window.innerWidth >= 768;

const BottomBar = () => {
  const [modal, setModal] = useState<null | string>(null);
  const [rsvps, setRsvps] = useState<any[]>([]);

  const { fetchAll, create } = useFirestore('rsvps');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAll();
      if (fetchedData) setRsvps(fetchedData);
      setRsvps(fetchedData!);
    };
    fetchData();
  }, [fetchAll]);

  const openModal = (type: string) => setModal(type);
  const closeModal = () => setModal(null);

  const actions = (onSubmit: () => void) => {
    if (modal !== 'rsvp') {
      return undefined;
    }
    if (modal === 'rsvp') {
      return onSubmit;
    }
  };

  const { mutate } = useMutation((values: any) => create(values), {
    onSuccess: () => {
      fetchAll().then((data) => setRsvps(data!));
    },
  });

  const onSubmit = (values: typeof initialValues) => {
    mutate(values);
    closeModal();
  };
  return (
    <>
      <motion.div
        className="fixed bottom-0 md:left-1/2 md:transform-[translate(-50%,0)] w-full md:w-1/2 md:px-16 mx-auto z-50 backdrop-blur-xs shadow-inner"
        initial={{
          y: 100,
          ...(isBigScreen && { x: '-50%' }),
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          duration: 1500000,
        }}
      >
        <div className="flex justify-around py-2 px-4">
          {options.map(({ label, key, icon }) => (
            <button
              key={key}
              className="flex-1 flex flex-col text-center py-3 mx-1 rounded-xl bg-gray-100 hover:bg-gray-200 transition aspect-square items-center justify-center text-gray-700 hover:text-gray-900 shadow-lg"
              onClick={() => openModal(key)}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </motion.div>

      {modal && (
        <Formik<{
          name: string;
          phone: string;
          adult?: number;
          child?: number;
        }>
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: Record<string, string> = {};
            if (!values.name) {
              errors.name = 'Nama diperlukan';
            }
            if (rsvps?.find((rsvp) => rsvp.phone === values.phone)) {
              errors.phone = 'Telefon sudah terdaftar';
            }
            if (!values.phone) {
              errors.phone = 'Nombor telefon diperlukan';
            }
            if (!isValidMalaysianPhoneNumber(values.phone)) {
              errors.phone = 'Nombor telefon tidak sah';
            }
            if (!values.adult) {
              errors.adult = 'Jumlah dewasa tidak boleh kurang dari 1';
            }
            return errors;
          }}
        >
          {({ submitForm, errors, handleChange, values, isValid }) => (
            <Modal
              closeModal={closeModal}
              modalTitle={options.find((option) => option.key === modal)?.label || ''}
              actionText={'Hantar'}
              action={actions(submitForm)}
            >
              {modal === 'rsvp' && (
                <div className="flex flex-col">
                  <InputField
                    required
                    error={errors.name}
                    name="name"
                    label="Nama"
                    placeholder="Masukkan Nama Anda"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <InputField
                    name="phone"
                    label="Telepon"
                    type="tel"
                    required
                    placeholder="Masukkan Nombor Telefon Anda"
                    onChange={handleChange}
                    error={errors.phone}
                    value={values.phone}
                  />
                  <InputField
                    name="adult"
                    label="Dewasa"
                    type="number"
                    required
                    placeholder="Jumlah Dewasa"
                    min={0}
                    onChange={handleChange}
                    error={errors.adult}
                    value={values.adult}
                  />
                  <InputField
                    name="child"
                    label="Kanak-kanak (Bawah 8 Tahun)"
                    type="number"
                    required
                    placeholder="Jumlah Kanak-kanak"
                    min={0}
                    onChange={handleChange}
                    error={errors.child}
                    value={values.child}
                  />
                </div>
              )}
              {modal === 'contact' && (
                <div className="flex flex-col gap-2">
                  <PhoneInfo name="Imran" phoneNumber="0173141955" />
                  <PhoneInfo name="Noorlida" phoneNumber="0176572521" />
                  <PhoneInfo name="Mala" phoneNumber="0172091019" />
                  <PhoneInfo name="Azah" phoneNumber="0123412117" />
                </div>
              )}
              {modal === 'address' && (
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://maps.app.goo.gl/cgjjbocAgUNqjYKH8"
                    className="flex flex-col items-center justify-center w-30 h-30 shadow-lg p-4 rounded-2xl bg-slate-100"
                  >
                    <div className="w-10">
                      <img
                        width="256"
                        alt="Logo of Google Maps (2020)"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/256px-Google_Maps_icon_%282020%29.svg.png?20200218211225"
                      />
                    </div>
                    Google Maps
                  </a>
                  <a
                    href="https://waze.com/ul/hw283h67sc"
                    className="flex flex-col items-center justify-center shadow-lg p-4 w-30 h-30 rounded-2xl bg-slate-100"
                  >
                    <div className="w-12">
                      <img
                        width="256"
                        alt="Logo of Google Maps (2020)"
                        src="https://upload.wikimedia.org/wikipedia/fr/0/05/Waze-icon-2020.svg"
                      />
                    </div>
                    Waze
                  </a>
                </div>
              )}
            </Modal>
          )}
        </Formik>
      )}
    </>
  );
};

export default BottomBar;
