import  { useState, useMemo } from 'react';
import { Star, Search, Download, Info, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const EmailRow = ({ id, sender, subject, time, isStarred, isChecked, onStarToggle, onCheckToggle }) => (
  <div className="flex items-center py-3 px-4 hover:bg-gray-100 border-b">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => onCheckToggle(id)}
      className="mr-4 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <button onClick={() => onStarToggle(id)} className="mr-4">
      <Star className={`w-5 h-5 ${isStarred ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
    </button>
    <div className="flex-grow flex items-baseline">
      <span className="font-bold text-gray-900 w-1/4 truncate mr-2">{sender}</span>
      <span className="text-black font-semi-bold truncate">{subject}</span>
    </div>
    <span className="text-sm font-bold text-gray-500 ml-4">{time}</span>
  </div>
);

const generateDemoData = (count) => {
  const senders = ["Alice Smith", "Bob Johnson", "Charlie Brown", "Diana Prince", "Edward Norton", "Fiona Apple", "George Clooney", "Hannah Montana", "Ian McKellen", "Julia Roberts"];
  const subjects = [
    "Meeting recap", "Project update", "Vacation request", "New product launch", "Budget review",
    "Team building event", "Client feedback", "System maintenance", "Training schedule", "Holiday announcement"
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    sender: senders[Math.floor(Math.random() * senders.length)],
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    time: `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    isStarred: Math.random() > 0.7,
    isChecked: false,
  }));
};

const EmailInbox = () => {
  const allEmails = useMemo(() => generateDemoData(100), []);
  const [emails, setEmails] = useState(allEmails);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const emailsPerPage = 10;

  const filteredEmails = useMemo(() => {
    return emails.filter(email => 
      email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [emails, searchTerm]);

  const currentEmails = useMemo(() => {
    const indexOfLastEmail = currentPage * emailsPerPage;
    const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
    return filteredEmails.slice(indexOfFirstEmail, indexOfLastEmail);
  }, [filteredEmails, currentPage]);

  const totalPages = Math.ceil(filteredEmails.length / emailsPerPage);

  const toggleStar = (id) => {
    setEmails(emails.map(email => 
      email.id === id ? { ...email, isStarred: !email.isStarred } : email
    ));
  };

  const toggleCheck = (id) => {
    setEmails(emails.map(email => 
      email.id === id ? { ...email, isChecked: !email.isChecked } : email
    ));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className=" ml-4 mr-4 bg-white shadow-lg rounded-2xl overflow-hidden ">
      <div className="p-4  border-b">
        <div className="flex items-center justify-between mt-2">
          <div className="w-1/3 flex items-center bg-gray-100 rounded-full border border-gray-300 px-3 py-2 mr-4">
            <Search className="w- h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search mail"
              className="bg-transparent flex-grow outline-none text-black"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        
          <div className="flex items-center space-x-2 ">
      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-200">
        <Download className="w-5 h-5 text-black" />
      </button>
      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-200">
        <Info className="w-5 h-5 text-black" />
      </button>
      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-200">
        <Trash2 className="w-5 h-5 text-black" />
      </button>
    </div>



        </div>
      </div>
      <div className='ml-4'>
        {currentEmails.map((email) => (
          <EmailRow
            key={email.id}
            {...email}
            onStarToggle={toggleStar}
            onCheckToggle={toggleCheck}
          />
        ))}
      </div>
      <div className="p-4 bg-gray-50 flex justify-between items-center text-sm font-bold text-black border-t">
        <span>Showing {(currentPage - 1) * emailsPerPage + 1}-{Math.min(currentPage * emailsPerPage, filteredEmails.length)} of {filteredEmails.length}</span>
        <div className="flex items-center">
          <button 
            className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="mx-2">Page {currentPage} of {totalPages}</span>
          <button 
            className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailInbox;