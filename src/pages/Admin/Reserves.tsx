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

  const totalAdults = data.reduce((acc, curr) => acc + (curr.adult ?? 0), 0);
  const totalChildren = data.reduce((acc, curr) => Number(acc ?? 0) + Number(curr.child ?? 0), 0);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4 bg-slate-900 text-slate-100">
      <h1 className="text-2xl font-bold mb-4">Reserves</h1>
      <p>Manage your reserves here.</p>
      {/* button to download as csv */}
      <button onClick={downloadAsCsv} className="btn btn-primary">
        Download as CSV
      </button>
      {/* Display the data in a table format of Name, Phone, Adult, Child */}
      <table className="table-auto w-full border border-gray-700 mt-4">
        <thead className="text-left">
          <tr className="border border-gray-700">
            <th>Name</th>
            <th>Phone</th>
            <th>Adult</th>
            <th>Child</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-700">
          {data
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((rsvp, index) => (
              <tr key={rsvp.id} className={index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-800'}>
                <td>{rsvp.name}</td>
                <td>{rsvp.phone}</td>
                <td>{rsvp.adult ?? 0}</td>
                <td>{rsvp.child ?? 0}</td>
              </tr>
            )) ?? 'Loading...'}
          <tr className="border-b border-gray-700">
            <td rowSpan={2} colSpan={2}>
              Total
            </td>
            <td>{totalAdults}</td>
            <td>{totalChildren}</td>
          </tr>
          <tr className="border-b border-gray-700 bg-slate-600">
            <td colSpan={2}>{totalAdults + totalChildren}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Reserves;
