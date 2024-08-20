import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const Card = ({ title, value, change, changeType, icon: Icon, iconBgColor, iconColor }) => {
  const isIncrease = changeType === 'increase';
  const [changeValue, ...changePeriod] = change.split(' ');

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-[90%] h-[177px]">
      <div className="flex justify-between items-center  ">
        <div className='mt-[-36px]'>
          <h4 className="text-gray-500  font-semibold text-sm">{title}</h4>
        </div>
        <div className={`p-2 py-[13px] rounded-2xl border ${iconBgColor}`}>
          <Icon className={`text-4xl ${iconColor}`} />
        </div>
      </div>
      <p className="text-[26px] font-bold mb-4 mt-[-18px]">{value}</p>
      <div className="flex items-center text-sm mt-8">
        {isIncrease ? (
          <IoMdArrowDropup className="text-green-500 text-xl" />
        ) : (
          <IoMdArrowDropdown className="text-red-500 text-xl" />
        )}
        <span className={isIncrease ? 'text-green-500  font-bold' : 'text-red-500  font-bold'}>
          {changeValue}
        </span>
        <span className="text-gray-500 ml-2  font-semibold">{changePeriod.join(' ')}</span>
      </div>
    </div>
  );
};

export default Card;
