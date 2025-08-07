import { useFirestore } from '@/hooks/useFirestore';
import { useEffect, useState } from 'react';
import * as fileSaver from 'file-saver';

function convertToCsv(data: any[]) {
  const headers = ['Name', 'Phone', 'Adult', 'Child'];
  const rows = data.map((rsvp) => [rsvp.name, `'${rsvp.phone}`, rsvp.adult, rsvp.child ?? 0]);
  const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
  return csv;
}

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

  const downloadAsCsv = () => {
    const csv = convertToCsv(data);
    fileSaver.saveAs(new Blob([csv], { type: 'text/csv;charset=utf-8;' }), 'rsvps.csv');
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reserves</h1>
      <p>Manage your reserves here.</p>
      {/* button to download as csv */}
      <button onClick={downloadAsCsv} className="btn btn-primary">
        Download as CSV
      </button>
      {/* Display the data in a table format of Name, Phone, Adult, Child */}
      <table className="table-auto w-full">
        <thead className="text-left">
          <tr className="border-b border-gray-200">
            <th>Name</th>
            <th>Phone</th>
            <th>Adult</th>
            <th>Child</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-200">
          {data?.map((rsvp, index) => (
            <tr key={rsvp.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td>{rsvp.name}</td>
              <td>{rsvp.phone}</td>
              <td>{rsvp.adult}</td>
              <td>{rsvp.child}</td>
            </tr>
          )) ?? 'Loading...'}
          <tr className="border-b border-gray-200">
            <td>Total</td>
            <td></td>
            <td>{data?.reduce((acc, curr) => acc + curr.adult, 0) ?? 0}</td>
            <td>{data?.reduce((acc, curr) => acc + curr.child, 0) ?? 0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Reserves;
