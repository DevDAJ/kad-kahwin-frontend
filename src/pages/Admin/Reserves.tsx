import { useFirestore } from '@/hooks/useFirestore';
import { useEffect, useState } from 'react';

const Reserves = () => {
  const [data, setData] = useState<any[]>([]);
  const { fetchAll, loading } = useFirestore('rsvps');
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAll();
      if (fetchedData) setData(fetchedData);
      setData(fetchedData!);
    };
    fetchData();
  }, [fetchAll]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reserves</h1>
      <p>Manage your reserves here.</p>
      {JSON.stringify(data)}
    </div>
  );
};
export default Reserves;
