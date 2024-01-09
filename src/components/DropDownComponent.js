import React, { useState } from 'react';

const DropdownMenu = ({ dropdownName, setSelection, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Call the callback function with the selected value
    setSelection(selectedValue);
  };

  return (
    <div className="mb-4">
      <label htmlFor={dropdownName} className="block text-sm font-medium text-black mb-2">
        {dropdownName}:
      </label>
      <select
        id={dropdownName}
        value={selectedOption}
        onChange={handleSelectChange}
        className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="">-- Choose an option --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
