import { useState, useEffect, useCallback } from 'react';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useFirebase } from '@/context/firebase';

export function useFirestore(docName: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { firestore: db } = useFirebase();
  // Fetch all documents
  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, docName));
      const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(docs);
      setError(null);
      console.log(`Fetched ${docs.length} documents from ${docName}`);
      console.log('Documents:', docs);
      return docs;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [docName]);

  // Fetch single document
  const fetchOne = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const docRef = doc(db, docName, id);
        const docSnap = await getDoc(docRef);
        setError(null);
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
      } catch (err) {
        setError(err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [docName],
  );

  // Create document
  const create = useCallback(
    async (newData: any) => {
      setLoading(true);
      try {
        const docRef = await addDoc(collection(db, docName), newData);
        setError(null);
        await fetchAll();
        return docRef.id;
      } catch (err) {
        setError(err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [docName, fetchAll],
  );

  // Update document
  const update = useCallback(
    async (id: string, updatedData: any) => {
      setLoading(true);
      try {
        const docRef = doc(db, docName, id);
        await updateDoc(docRef, updatedData);
        setError(null);
        await fetchAll();
        return true;
      } catch (err) {
        setError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [docName, fetchAll],
  );

  // Delete document
  const remove = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const docRef = doc(db, docName, id);
        await deleteDoc(docRef);
        setError(null);
        await fetchAll();
        return true;
      } catch (err) {
        setError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [docName, fetchAll],
  );

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return {
    data,
    loading,
    error,
    fetchAll,
    fetchOne,
    create,
    update,
    remove,
  };
}
