// InputField.tsx
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  className = '',
  disabled,
  ...inputProps
}) => {
  return (
    <div className="mb-4 flex flex-col items-start">
      {label && (
        <label htmlFor={inputProps.name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}{' '}
          {inputProps.required && <span className="text-red-500 text-xs font-medium">*</span>}
        </label>
      )}

      <div className="relative w-full">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        <input
          disabled={disabled}
          className={`w-full border rounded-md px-4 py-2 pr-4 ${icon ? 'pl-10' : ''} ${
            disabled
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
              : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          } ${error ? 'border-red-500 text-red-600 focus:ring-red-500' : ''} ${className}`}
          {...inputProps}
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
