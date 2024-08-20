import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5k', value: 20 },
  { name: '10k', value: 28 },
  { name: '15k', value: 40 },
  { name: '20k', value: 85 },
  { name: '25k', value: 50 },
  { name: '30k', value: 53 },
  { name: '35k', value: 60 },
  { name: '40k', value: 25 },
  { name: '45k', value: 70 },
  { name: '50k', value: 55 },
  { name: '55k', value: 50 },
  { name: '60k', value: 52 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow">
        <p className="text-blue-600 font-bold">{`${payload[0].value.toFixed(2)}%`}</p>
      </div>
    );
  }
  return null;
};

const SalesDetails = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-bold">Sales Details</h2>
        <select className="border rounded p-1">
          <option>October</option>
        </select>
      </div>
      <div className='' style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 15, right: 30, left: 10, bottom: 15 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#3b82f6" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ left: 0, right: 0 }} // Adjusted padding for X-axis
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              padding={{ top: 0, bottom: 0 }} // Adjusted padding for Y-axis
              tick={{ className: 'text-xs font-bold text-gray-700 ' }}
              tickMargin={25} // Adds a gap between Y-axis labels and grid lines
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesDetails;
