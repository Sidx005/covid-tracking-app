import React from 'react';

const FeatureCards = ({ heading, data, border, color }) => {
  return (
    <div className={`p-5 flex rounded  flex-col items-start justify-center h-[300px] w-[300px] ${border} ${color}`}>
      <h2 className="text-xl font-semibold text-white">{heading}</h2>
      <ul className="mt-3 text-gray-400 list-disc pl-2">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCards;
