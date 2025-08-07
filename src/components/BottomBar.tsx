// BottomBar.tsx
import { useEffect, useState } from 'react';
import Modal from './Modal';
import { Formik } from 'formik';
import { CalendarIcon, PhoneIcon, MapPinIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import InputField from './InputField';
import { useFirestore } from '@/hooks/useFirestore';
import { useMutation, useQuery } from '@tanstack/react-query';

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

  const options = [
    { label: 'RSVP', key: 'rsvp', icon: <ListBulletIcon className="w-12 h-12" /> },
    { label: 'Kalendar', key: 'calendar', icon: <CalendarIcon className="w-12 h-12" /> },
    { label: 'Hubungan', key: 'contact', icon: <PhoneIcon className="w-12 h-12" /> },
    { label: 'Lokasi', key: 'address', icon: <MapPinIcon className="w-12 h-12" /> },
  ];

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
      <div className="fixed bottom-0 md:left-1/2 md:transform-[translate(-50%,0)] w-full md:w-1/2 md:px-16 mx-auto z-50 backdrop-blur-xs shadow-inner">
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
      </div>

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
            if (rsvps.find((rsvp) => rsvp.phone === values.phone)) {
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
              actionText={'Submit'}
              action={actions(submitForm)}
            >
              {modal === 'rsvp' && (
                <div className="flex flex-col ">
                  <InputField
                    required
                    error={errors.name}
                    name="name"
                    label="Nama"
                    placeholder="Masukkan nama Anda"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <InputField
                    name="phone"
                    label="Telepon"
                    type="tel"
                    required
                    placeholder="Masukkan nomor telepon Anda"
                    onChange={handleChange}
                    error={errors.phone}
                    value={values.phone}
                  />
                  <InputField
                    name="adult"
                    label="Dewasa"
                    type="number"
                    required
                    placeholder="Jumlah dewasa"
                    min={0}
                    onChange={handleChange}
                    error={errors.adult}
                    value={values.adult}
                  />
                  <InputField
                    name="child"
                    label="Anak-anak"
                    type="number"
                    placeholder="Jumlah anak-anak"
                    min={0}
                    onChange={handleChange}
                    error={errors.child}
                    value={values.child}
                  />
                </div>
              )}
              {modal === 'calendar' && <div>Calendar Placeholder</div>}
              {modal === 'contact' && <div>Contact Form Placeholder</div>}
              {modal === 'address' && <div>Address Placeholder</div>}
            </Modal>
          )}
        </Formik>
      )}
    </>
  );
};

export default BottomBar;
