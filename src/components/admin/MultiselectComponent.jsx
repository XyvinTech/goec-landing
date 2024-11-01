// MultiSelectComponent.jsx
import React from 'react';
import Select from 'react-select';

const MultiSelectComponent = ({ options, value, onChange, placeholder }) => {
    const handleChange = (selectedOptions) => {
        if (selectedOptions) {
            onChange(selectedOptions);
        } else {
            onChange([]);
        }
    };

    return (
        <Select
            options={options}
            value={value}
            onChange={handleChange}
            isMulti
            placeholder={placeholder}
        />
    );
};

export default MultiSelectComponent;
