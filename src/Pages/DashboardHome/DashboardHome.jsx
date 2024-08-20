
import { FaUsers, FaBoxOpen, FaChartLine, FaClock } from 'react-icons/fa';
import Card from '../../Component/Card/Card';
import SalesDetails from '../../Component/Sales/Sales';

const DashboardHome = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Total User"
          value="40,689"
          change="8.5% Up from yesterday"
          changeType="increase"
          icon={FaUsers}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-500"
        />
        <Card
          title="Total Order"
          value="10293"
          change="1.3% Up from past week"
          changeType="increase"
          icon={FaBoxOpen}
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-500"
        />
        <Card
          title="Total Sales"
          value="$89,000"
          change="4.3% Down from yesterday"
          changeType="decrease"
          icon={FaChartLine}
          iconBgColor="bg-green-100"
          iconColor="text-green-500"
        />
        <Card
          title="Total Pending"
          value="2040"
          change="1.8% Up from yesterday"
          changeType="increase"
          icon={FaClock}
          iconBgColor="bg-red-100"
          iconColor="text-red-500"
        />
      </div>
    <div className='mt-12'>
        <SalesDetails></SalesDetails>
    </div>
    </div>
  );
};

export default DashboardHome;