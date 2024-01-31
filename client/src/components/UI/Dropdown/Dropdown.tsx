import {
  CustomDropdownProps,
  DropdownOptionType,
} from '@/types/form.interface';
import React from 'react';

const Dropdown: React.FC<CustomDropdownProps> = ({
  options,
  register,
  required,
  errors,
  cytest,
  label,
  name,
  id,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-lg font-medium leading-6 text-gray-900 mb-2">
          {label}
        </label>
      )}
      <div>
        <select
          {...register(name, {
            required: required ? `${name} is required` : false,
          })}
          id={id}
          className="form_input appearance-none"
          data-cy={cytest}
        >
          {options.map((option: DropdownOptionType, index: number) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      {errors && (
        <p className="text-red-500 mt-2">{`${label} field is required`}</p>
      )}
    </div>
  );
};

export default Dropdown;