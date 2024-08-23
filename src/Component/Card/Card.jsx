import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const Card = ({ title, value, change, changeType, icon: Icon, iconBgColor, iconColor }) => {
  const isIncrease = changeType === 'increase';
  const [changeValue, ...changePeriod] = change.split(' ');

  return (
    <div className="bg-white p-3 rounded-xl shadow-sm   sm:w-[90%] h-[160px]">
      <div className="flex justify-between items-center">
        <div className="mt-[-24px]">
          <h4 className="text-gray-500 font-semibold text-sm mb-2">{title}</h4>
        </div>
        <div className={`p-2 py-[13px] rounded-full border ${iconBgColor}`}>
          <Icon className={`text-4xl ${iconColor}`} />
        </div>
      </div>
      <p className="text-[30px]  font-[900] mb-4 mt-[-18px]">{value}</p>
      <div className="flex items-center text-sm mt-6">
        {isIncrease ? (
          <IoMdArrowDropup className="text-green-500 text-xl" />
        ) : (
          <IoMdArrowDropdown className="text-red-500 text-xl" />
        )}
        <span className={isIncrease ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
          {changeValue}
        </span>
        <span className="text-gray-500  ml-2 text-xs font-bold">{changePeriod.join(' ')}</span>
      </div>
    </div>
  );
};

export default Card;