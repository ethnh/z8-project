import React, { useState, useMemo } from 'react';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { FaSearch, FaFilePdf, FaFileCsv } from 'react-icons/fa';

const Table = ({ columns, data, itemsPerPage = 5 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredData = useMemo(() => {
    return data.filter(item =>
      Object.values(item).some(val => 
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

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
      head: [columns.map(column => column.header)],
      body: filteredData.map(item => 
        columns.map(column => 
          column.accessor ? item[column.accessor] : ''
        )
      ),
    });
    doc.save('table-data.pdf');
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative w-48">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-8 pr-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button onClick={downloadPDF} className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center text-sm">
            <FaFilePdf className="mr-1" /> PDF
          </button>
          <CSVLink
            data={filteredData}
            filename={"table-data.csv"}
            className="bg-green-500 text-white px-2 py-1 rounded-md flex items-center text-sm"
          >
            <FaFileCsv className="mr-1" /> CSV
          </CSVLink>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">
              <input
                type="checkbox"
                onChange={() => {
                  if (selectedItems.length === filteredData.length) {
                    setSelectedItems([]);
                  } else {
                    setSelectedItems(filteredData.map(item => item.id));
                  }
                }}
                checked={selectedItems.length === filteredData.length}
              />
            </th>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-4 py-2 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 whitespace-nowrap">
                  {column.render ? column.render(row) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-black">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded text-sm"
          >
            Previous
          </button>
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
              className={`px-2 py-1 border rounded text-sm ${
                currentPage === number + 1 ? 'bg-black text-white' : ''
              }`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="px-2 py-1 border rounded text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;