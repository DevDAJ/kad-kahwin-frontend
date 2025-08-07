import React, { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDgwgUkYkHEbr9SWV8MJ_nd44WmwTGOW8c',
  authDomain: 'kad-kahwin-7273f.firebaseapp.com',
  projectId: 'kad-kahwin-7273f',
  storageBucket: 'kad-kahwin-7273f.firebasestorage.app',
  messagingSenderId: '290511232343',
  appId: '1:290511232343:web:73051b798e11b08626b212',
  measurementId: 'G-YM187K4SPQ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

type FirebaseContextType = {
  app: typeof app;
  auth: typeof auth;
  firestore: typeof firestore;
};

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <FirebaseContext.Provider value={{ app, auth, firestore }}>{children}</FirebaseContext.Provider>
);

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
