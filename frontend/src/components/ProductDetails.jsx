import React, { useState } from 'react'
import MainContent from './MainContent'
import Rating from './Rating'

const ProductDetails = () => {
  const [priceRange, setPriceRange] = useState([0, 1000])

  const products = [
    {
      id: 1,
      name: 'Cone Lamp',
      price: 259,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p17-768x768.jpg',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Corner Lounge',
      price: 849,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p24-768x768.jpg',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Cozy Sofa',
      price: 799,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p9i-768x768.jpg',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Cozy Sofa',
      price: 649,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p6-768x768.jpg',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Creative Chair',
      price: 449,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p2-768x768.jpg',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Desk Lamp',
      price: 139,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p15-768x768.jpg',
      rating: 4.3
    },
    {
      id: 7,
      name: 'Drop Lamp',
      price: 179,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p17-768x768.jpg',
      rating: 4.5
    },
    {
      id: 8,
      name: 'Flower Lamp',
      price: 89,
      image: 'https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2019/09/p20.jpg',
      rating: 4.2
    }
  ]

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Your existing left side code */}
          <div className="w-full md:w-1/4">
            {/* Price Range Filter */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Filter by price</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <button className="mt-4 w-full bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
                Filter
              </button>
            </div>

            {/* Other Products Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">Other Products</h2>
              <div className="flex flex-col gap-4">
                {products.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <Rating value={product.rating} />
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side content */}
          <MainContent products={products} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails