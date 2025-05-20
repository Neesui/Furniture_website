import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 px-4 sm:px-6 lg:px-8">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://xtratheme.com/elementor/furniture-shop-2/wp-content/uploads/sites/112/2024/03/photo1.png" 
              className="max-w-full h-auto mx-auto" 
              alt="Modern furniture" 
            />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1729] mb-2 tracking-wide">Wide Collection</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1729] mb-2 tracking-wide">Of Home</h3>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFB800] mb-6 tracking-wide">Furniture</h1>
            <p className="mb-8 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Embrace a life of luxury and comfort with Xtra. Our exclusive 
              furniture collection brings sophistication and timeless elegance to 
              your home, creating spaces that resonate with your style.
            </p>
            <button className="btn btn-primary text-base sm:text-lg px-6 sm:px-8">Shop Now</button>
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxojmV1ulwOAs-Xu4RG5l73yotsTpX6S56w&s" 
                     className="w-25 sm:w-40 h-25 sm:h-40 rounded-full" 
                     alt="Furniture 1" />
                <img src="https://static.vecteezy.com/system/resources/previews/040/452/829/non_2x/ai-generated-armchair-furniture-isolated-on-transparent-background-free-png.png" 
                     className="w-25 sm:w-40 h-25 sm:h-40 rounded-full" 
                     alt="Furniture 2" />
                <img src="https://static.vecteezy.com/system/resources/previews/042/124/761/non_2x/ai-generated-cozy-armchair-and-coffee-table-isolated-on-transparent-background-with-clipping-path-3d-render-free-png.png" 
                     className="w-25 sm:w-40 h-25 sm:h-40 rounded-full" 
                     alt="Furniture 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner