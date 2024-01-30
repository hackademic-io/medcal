import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

export interface CustomInputProps {
  type: string;
  label?: string;
  placeholder?: string;
  desc?: string;
  name: string;
  accept?: string;
  className?: string;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  register: UseFormRegister<FieldValues>;
  autoComplete?: string;
  required: boolean;
  id?: string;
  cytest?: string;
}

export interface CustomDropdownProps {
  label?: string;
  name: string;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  id?: string;
  cytest?: string;
  options: DropdownOptionType[];
}

export interface DropdownOptionType {
  value: string;
  label: string;
}
