import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, MapPin, Star, Users, Calendar, ArrowRight, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    {
      name: "Santorini, Greece",
      image: "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$2,499",
      duration: "7 days"
    },
    {
      name: "Bali, Indonesia",
      image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$1,899",
      duration: "10 days"
    },
    {
      name: "Swiss Alps",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$3,299",
      duration: "8 days"
    },
    {
      name: "Maldives",
      image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$4,599",
      duration: "6 days"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Sapkota Travels made our honeymoon absolutely magical. Every detail was perfect!",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      text: "Professional service and incredible destinations. Highly recommend for luxury travel.",
      rating: 5
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      text: "The attention to detail and personalized service exceeded all our expectations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Sapkota Travels Logo.jpg" 
                alt="Sapkota Travels" 
                className="h-12 w-auto object-contain"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
              <a href="#destinations" className="text-white hover:text-yellow-400 transition-colors duration-300">Destinations</a>
              <a href="#services" className="text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-md`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#home" className="block text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
            <a href="#destinations" className="block text-white hover:text-yellow-400 transition-colors duration-300">Destinations</a>
            <a href="#services" className="block text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
            <a href="#about" className="block text-white hover:text-yellow-400 transition-colors duration-300">About</a>
            <a href="#contact" className="block text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Discover the World
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Luxury travel experiences crafted just for you. Where every journey becomes an unforgettable story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                View Destinations
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Premium Destinations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Handpicked luxury destinations that offer the perfect blend of adventure, relaxation, and cultural immersion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{destination.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-semibold text-lg">{destination.price}</span>
                    <span className="text-gray-300">{destination.duration}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Luxury Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unparalleled service with our comprehensive travel solutions designed for the discerning traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:translateY(-5px)">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Plane className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Private Jet Charter</h3>
              <p className="text-gray-300 leading-relaxed">
                Travel in ultimate luxury with our exclusive private jet services. Skip the crowds and arrive in style.
              </p>
            </div>

            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:translateY(-5px)">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Bespoke Itineraries</h3>
              <p className="text-gray-300 leading-relaxed">
                Personalized travel experiences crafted to your preferences. Every detail planned to perfection.
              </p>
            </div>

            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:translateY(-5px)">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Concierge Service</h3>
              <p className="text-gray-300 leading-relaxed">
                24/7 personal concierge service ensuring every moment of your journey exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:translateY(-5px)"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to embark on your next luxury adventure? Get in touch with our travel experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">info@sapkotatravels.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Office</h3>
                  <p className="text-gray-300">123 Luxury Lane, Travel City, TC 12345</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Destination</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                    placeholder="Where would you like to go?"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your dream vacation..."
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/Sapkota Travels Logo.jpg" 
                alt="Sapkota Travels" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Sapkota Travels. All rights reserved.</p>
              <p className="text-sm mt-1">Crafting luxury experiences since 2010</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;