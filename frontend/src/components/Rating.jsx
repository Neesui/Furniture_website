import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ value }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`${index < Math.floor(value) ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-500">{value}</span>
    </div>
  )
}

export default Rating