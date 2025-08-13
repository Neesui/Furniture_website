import React from 'react'

const InputForm = ({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  icon // Pass React icon component here
}) => (
  <div className="relative">
    {label && (
      <label htmlFor={id} className="block text-gray-600 mb-1">
        {label}
      </label>
    )}
    {icon && (
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
    )}
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-4 py-3 border h-[60px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
        disabled ? 'bg-gray-100 cursor-not-allowed' : ''
      }`}
    />
  </div>
)

export default InputForm
