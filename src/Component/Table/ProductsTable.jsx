import React, { useState, useMemo } from 'react';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { FaSearch, FaFilePdf, FaFileCsv, FaEdit, FaTrash } from 'react-icons/fa';
import Table from '../Reusable/table';

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const itemsPerPage = 5;

  const columns = [
    { 
      header: '', 
      accessor: 'checkbox',
      render: (row) => (
        <input
          type="checkbox"
          checked={selectedItems.includes(row.id)}
          onChange={() => handleCheckboxChange(row.id)}
          className="form-checkbox h-4 w-4 text-blue-600"
        />
      )
    },
    { 
      header: 'Image', 
      accessor: 'image',
      render: (row) => <img src={row.image} alt={row.productName} className="w-10 h-10 object-cover rounded-md" />
    },
    { header: 'Product Name', accessor: 'productName' },
    { header: 'Category', accessor: 'category' },
    { header: 'Price', accessor: 'price' },
    { header: 'Piece', accessor: 'piece' },
    { 
      header: 'Available Color', 
      accessor: 'availableColors',
      render: (row) => (
        <div className="flex space-x-1">
          {row.availableColors.map((color, index) => (
            <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      )
    },
    { 
      header: 'Action', 
      render: () => (
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <FaEdit size={14} />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <FaTrash size={14} />
          </button>
        </div>
      )
    },
  ];

  const data = [
    { id: 1, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Apple Watch Series 4', category: 'Digital Product', price: '$690.00', piece: 63, availableColors: ['#000000', '#808080', '#FF0000'] },
    { id: 2, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Microsoft Headphones', category: 'Digital Product', price: '$190.00', piece: 13, availableColors: ['#000000', '#FF0000', '#0000FF', '#FFFF00'] },


    { id: 1, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Apple Watch Series 4', category: 'Digital Product', price: '$690.00', piece: 63, availableColors: ['#000000', '#808080', '#FF0000'] },
    { id: 2, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Microsoft Headphones', category: 'Digital Product', price: '$190.00', piece: 13, availableColors: ['#000000', '#FF0000', '#0000FF', '#FFFF00'] },
    // ... (rest of the data)

    { id: 1, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Apple Watch Series 4', category: 'Digital Product', price: '$690.00', piece: 63, availableColors: ['#000000', '#808080', '#FF0000'] },
    { id: 2, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Microsoft Headphones', category: 'Digital Product', price: '$190.00', piece: 13, availableColors: ['#000000', '#FF0000', '#0000FF', '#FFFF00'] },
    // ... (rest of the data)
    { id: 1, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Apple Watch Series 4', category: 'Digital Product', price: '$690.00', piece: 63, availableColors: ['#000000', '#808080', '#FF0000'] },
    { id: 2, image: 'https://i.ibb.co/MCht5m9/ticket.jpg', productName: 'Microsoft Headphones', category: 'Digital Product', price: '$190.00', piece: 13, availableColors: ['#000000', '#FF0000', '#0000FF', '#FFFF00'] },
    // ... (rest of the data)
  ];

  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [columns.slice(1).map(column => column.header)],
      body: filteredData.map(item => 
        columns.slice(1).map(column => 
          column.accessor ? item[column.accessor] : ''
        )
      ),
    });
    doc.save('products.pdf');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Products Table</h2>
      
      {/* <div className="mb-6 flex justify-between items-center">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button onClick={downloadPDF} className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center text-sm">
            <FaFilePdf className="mr-1" /> PDF
          </button>
          <CSVLink
            data={filteredData}
            filename={"products.csv"}
            className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center text-sm"
          >
            <FaFileCsv className="mr-1" /> CSV
          </CSVLink>
        </div>
      </div> */}

      <div className="shadow-md rounded-lg">
        <Table columns={columns} data={paginatedData} />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 text-sm text-gray-700">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </div>
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-200 text-black px-3 py-1 rounded-lg disabled:opacity-50 text-sm"
          >
            Previous
          </button>
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
              className={`px-3 py-1 rounded-lg text-sm ${
                currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="bg-gray-200 text-black px-3 py-1 rounded-lg disabled:opacity-50 text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;