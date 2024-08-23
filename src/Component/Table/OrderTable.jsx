import React from 'react';
import StatusBadge from "../Reusable/StatusBadge";
import Table from '../Reusable/table';


const OrdersTable = () => {
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'NAME', accessor: 'name' },
    { header: 'ADDRESS', accessor: 'address' },
    { header: 'DATE', accessor: 'date' },
    { header: 'TYPE', accessor: 'type' },
    { 
      header: 'STATUS', 
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />
    },
  ];

  const data = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '14 Feb 2019', type: 'Electric', status: 'Completed' },
    { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '14 Feb 2019', type: 'Book', status: 'Processing' },
    { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '14 Feb 2019', type: 'Medicine', status: 'Rejected' },
    { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '14 Feb 2019', type: 'Mobile', status: 'Completed' },
    { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '14 Feb 2019', type: 'Watch', status: 'Processing' },
    { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '14 Feb 2019', type: 'Medicine', status: 'Completed' },
    { id: '00007', name: 'Emma Watson', address: '123 Magic Lane', date: '15 Feb 2019', type: 'Book', status: 'Processing' },
    { id: '00008', name: 'Tom Hardy', address: '456 Action Avenue', date: '15 Feb 2019', type: 'Mobile', status: 'Completed' },
    { id: '00009', name: 'Scarlett Johansson', address: '789 Star Street', date: '16 Feb 2019', type: 'Watch', status: 'Rejected' },
    { id: '00010', name: 'Chris Evans', address: '101 Shield Road', date: '16 Feb 2019', type: 'Electric', status: 'Processing' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Orders Table</h2>
      <Table columns={columns} data={data} itemsPerPage={5} />
    </div>
  );
};

export default OrdersTable;