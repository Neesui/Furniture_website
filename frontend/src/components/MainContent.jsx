import React from 'react'
import { FaStar } from 'react-icons/fa'

const MainContent = ({ products }) => {
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

  return (
    <div className="w-full md:w-3/4">
      {/* Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4 sm:mb-0">
          <span className="text-gray-500">Showing 1-8 of 25 results</span>
        </div>
        <div className="flex gap-4">
          <select className="border rounded-md px-3 py-2">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
          <select className="border rounded-md px-3 py-2">
            <option>Status</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                <span className="text-sm font-semibold">${product.price}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <Rating value={product.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainContent