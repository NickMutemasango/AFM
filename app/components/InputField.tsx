import React from 'react';

interface FloatingLabelInputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'select';
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  options?: string[]; // For select type
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  className = '',
  options = []
}) => {
  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const handleDateClick = () => {
    if (type === 'date') {
      const dateInput = document.getElementById(inputId) as HTMLInputElement;
      if (dateInput && 'showPicker' in dateInput) {
        dateInput.showPicker();
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {type === 'select' ? (
          <select
            id={inputId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AA49] focus:border-transparent appearance-none bg-white"
            required={required}
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <div className="relative">
            <input
              id={inputId}
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AA49] focus:border-transparent peer"
              placeholder=" "
              required={required}
            />
            {type === 'date' && (
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                onClick={handleDateClick}
              >
                {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg> */}
              </div>
            )}
          </div>
        )}
        
        <label
          htmlFor={inputId}
          className="absolute left-4 top-3 px-1 bg-white text-gray-500 text-sm transition-all duration-200 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
    </div>
  );
};

export default FloatingLabelInput;