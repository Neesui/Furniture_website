import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [activeProduct, setActiveProduct] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const furnitureTypes = [
    { icon: '🛋️', name: 'Sofa', count: '150+' },
    { icon: '🪑', name: 'Table', count: '120+' },
    { icon: '🛏️', name: 'Bed', count: '80+' },
    { icon: '🗄️', name: 'Wardrobe', count: '100+' }
  ]

  const products = [
    {
      name: 'Office Sofa',
      price: '$560',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/047/456/713/small_2x/a-grey-sofa-on-transparent-background-png.png'
    },
    {
      name: 'Corner Lounge',
      price: '$349',
      image: 'https://png.pngtree.com/png-vector/20241113/ourmid/pngtree-isolated-scandinavian-style-chair-png-image_14409689.png'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-base-100">
      {/* Furniture Types Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1729] mb-2">Explore Our</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-[#FFB800]">Furniture</span> Range:
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {furnitureTypes.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center cursor-pointer 
                           transition-all duration-300 hover:shadow-xl hover:scale-105
                           active:scale-95 group"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="text-[#0F1729] font-medium mb-2">{item.name}</div>
                <div className="text-sm text-gray-500">{item.count} Products</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* First Section */}
      <div className={`max-w-7xl mx-auto mb-20 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute top-4 left-4 w-20 h-20 bg-[#FFB800] rounded-full -z-10 animate-pulse"></div>
            <img 
              src="https://img.freepik.com/free-psd/view-sofa-interior-design-decor_23-2151772815.jpg?semt=ais_hybrid&w=740" 
              alt="Featured Chair" 
              className="relative z-10 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="transform transition-all duration-500 hover:translate-x-2">
            <h2 className="text-3xl font-bold mb-2 animate-fade-in">Explore</h2>
            <h3 className="text-3xl font-bold mb-2">Xtra <span className="text-[#FFB800] animate-bounce">Furniture</span></h3>
            <h4 className="text-3xl font-bold mb-4">Stores for latest collection</h4>
            <p className="text-gray-600 mb-6 text-lg">
              Sofa, bed, desk, chairs, there's something to upgrade about every wonderful living through furniture stores.
            </p>
            <button className="btn btn-warning text-white hover:scale-105 transition-transform duration-300">
              See Collection
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto mb-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="transform transition-all duration-500 hover:translate-x-2">
            <h2 className="text-3xl font-bold">Styled</h2>
            <h3 className="text-3xl mb-2"><span className="text-[#FFB800] font-bold">Furniture</span></h3>
            <h4 className="text-3xl font-bold mb-4">in Unique Style</h4>
            <p className="text-gray-600 mb-6 text-lg">
              Discover a world of comfort and style with our hand-picked furniture for every room.
            </p>
            <button className="btn btn-warning text-white hover:scale-105 transition-transform duration-300">
              Shop Now
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`bg-base-200 p-4 rounded-lg group cursor-pointer transform transition-all duration-500
                          ${activeProduct === index ? 'scale-105 shadow-xl' : 'scale-100'}`}
                onClick={() => setActiveProduct(index)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h5 className="font-medium mt-3">{product.name}</h5>
                <p className="text-[#FFB800] font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            <div className="absolute top-10 right-10 bg-[#FFB800] rounded-full p-6 text-white text-center 
                          transform rotate-12 group-hover:rotate-0 transition-all duration-300 
                          animate-bounce">
              <span className="text-2xl font-bold">50%</span>
              <br />
              OFF
            </div>
            <img 
              src="https://pngimg.com/d/sofa_PNG6940.png" 
              alt="Sale Sofa" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="transform transition-all duration-500 hover:translate-x-2">
            <h2 className="text-3xl font-bold">Solution for</h2>
            <h3 className="text-3xl font-bold">all your</h3>
            <h4 className="text-3xl mb-2">
              <span className="text-[#FFB800] font-bold">Wooden</span> Furniture
            </h4>
            <h5 className="text-3xl font-bold mb-6">needs collection</h5>
            <button className="btn btn-warning text-white hover:scale-105 transition-transform duration-300">
              See Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero