import React, { useState } from 'react';

interface SearchFieldProps {
  // Define props here if any
}

export default function FieldLink(props: SearchFieldProps) {

    // Preserve variable names
    const [value, setValue] = useState("");
    const options = ['Data-field-1', 'Data-field-2', 'Data-field-3'].map(option => ({ label: option, value: option }));

    // Handle select change
    const handleSelectChange = (selected: any) => {
        setValue(selected);
    }

    return (
      <div className="flex flex-row">
      {/* Replace b-input with html input element and added tailwind classes */}
      <input
        id="inline-form-input-name"
        placeholder="Search Dataset"
        className="mr-2 h-10 w-1/2"
      />
      {/* Replace vue-multiselect with react-select component */}
      <select className="select select-bordered w-full max-w-xs"  onChange={handleSelectChange} value={value}>
        <option disabled selected>Select a field</option>
        {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      </div>
    );
}
