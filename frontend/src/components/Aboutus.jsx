import React from 'react'

const Aboutus = () => {
  const features = [
    { icon: '🎯', title: 'GOOD BOXES', description: 'Safe packaging' },
    { icon: '🚚', title: 'FREE SHIPPING', description: 'Free on order over $50' },
    { icon: '🌿', title: 'NATURAL MATERIALS', description: 'Eco-friendly products' },
    { icon: '⭐', title: 'BEST FABRICS', description: 'Quality materials' },
    { icon: '🔄', title: '15 DAYS REFUND', description: 'Money back guarantee' },
    { icon: '👥', title: 'FRIENDLY SUPPORT', description: '24/7 customer service' }
  ]

  const stats = [
    { number: '27+', label: 'Years of experience' },
    { number: '35k', label: 'Happy Clients' },
    { number: '46+', label: 'Global Awards' },
    { number: '17+', label: 'Worldwide Showrooms' }
  ]

  const testimonials = [
    {
      name: 'Jennifer Someone',
      role: 'Client',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: 'The furniture quality and service exceeded my expectations. Highly recommended!'
    }
  ]

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* About Us Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-yellow-400">About Us</h2>
            <p className="text-gray-600 mb-4">
              Furniture can be a product of design and is considered a form of
              decorative art. In addition to furniture's functional role, it can
              serve a symbolic or religious purpose. It can be made from many
              materials, including metal, plastic, and wood.
            </p>
            <p className="text-gray-600 mb-6">
              Early furniture from the surviving examples from Herculaneum and
              Pompeii and more recently the Vesuvian area around the Bay of Naples
              with pieces found in a villa at Boscoreale, Italy.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute top-4 right-4 bg-yellow-400 text-white p-4 rounded-full">
              <span className="text-xl font-bold">24</span>
              <br />
              <span className="text-sm">Years</span>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Our History</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                People have been using natural objects, such as tree stumps, rocks and
                moss, as furniture since the beginning of human civilization.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="h-2 w-full bg-yellow-400 rounded"></div>
                  <span className="ml-2 text-sm font-medium">98%</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-4/5 bg-yellow-400 rounded"></div>
                  <span className="ml-2 text-sm font-medium">80%</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-11/12 bg-yellow-400 rounded"></div>
                  <span className="ml-2 text-sm font-medium">92%</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
                alt="History"
                className="rounded-lg shadow-lg w-full"
              />
              <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="sr-only">Play Video</span>
                ▶️
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus