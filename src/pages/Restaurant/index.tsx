import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: {
    talabat: string;
    noon: string;
    careem: string;
  };
  originalPrice?: string;
  image: string;
  category: string;
  isPopular?: boolean;
  discount?: string;
  rating: number;
  reviewCount: number;
  isFavorite?: boolean;
}

interface RestaurantData {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  logo: string;
  discount: string;
  address: string;
  phone: string;
  isOpen: boolean;
  openTime: string;
  tagline: string;
}

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('Bestseller');
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  // Mock restaurant data based on Figma design
  const restaurant: RestaurantData = {
    id: id || '1',
    name: 'KFC',
    cuisine: 'Fast Food, Chicken',
    rating: 4.3,
    deliveryTime: '20-30 min',
    deliveryFee: 'Free',
    image: '/images/img_4.png',
    logo: '/images/talabat-logo-main.png',
    discount: '20% off',
    address: 'Sheikh Zayed Road, Dubai',
    phone: '+971 4 123 4567',
    isOpen: true,
    openTime: 'Opens at 6:00 AM',
    tagline: 'Crispy, Every Bite Taste'
  };

  const categories = ['All', 'Bestseller', 'Veg', 'Non Veg'];
  const filters = ['Filters', 'Bestseller', 'Veg', 'Non Veg'];

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Non Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '2',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Non Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '3',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '4',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Non Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '5',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '6',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Non Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '7',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '8',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Non Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '9',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    },
    {
      id: '10',
      name: 'Delicious Burger',
      description: 'Lorem Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac Lorem. Ipsum dolor sit amet consectetur. Mauris placerat aliquet sit ac.',
      prices: {
        talabat: '45.00',
        noon: '60.00',
        careem: '65.00'
      },
      image: '/images/img_4.png',
      category: 'Non Veg',
      isPopular: true,
      rating: 4.5,
      reviewCount: 532,
      isFavorite: false
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [itemId, count]) => {
      const item = menuItems.find(item => item.id === itemId);
      if (item && count > 0) {
        const price = parseFloat(item.prices.talabat);
        return total + (price * count);
      }
      return total;
    }, 0);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-3 h-3 fill-gray-300" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
      <Header />
      
      {/* Restaurant Header Section */}
      <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button and Restaurant Name */}
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {restaurant.name}
              </h1>
              <p className="text-green-600 text-sm font-medium">
                {restaurant.tagline}
              </p>
            </div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* Our Food Menu Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Our Food Menu
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 mb-8 justify-center flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  if (filter !== 'Filters') {
                    setSelectedCategory(filter === 'Bestseller' ? 'All' : filter);
                    setSelectedFilter(filter);
                  }
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedFilter === filter
                    ? filter === 'Veg'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : filter === 'Non Veg'
                      ? 'bg-red-100 text-red-700 border border-red-300'
                      : 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filter === 'Filters' && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                  </svg>
                )}
                {filter === 'Veg' && (
                  <div className="w-3 h-3 border border-green-600 rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                )}
                {filter === 'Non Veg' && (
                  <div className="w-3 h-3 border border-red-600 rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                  </div>
                )}
                {filter}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  {/* Favorite Heart */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                  >
                    <svg 
                      className={`w-5 h-5 ${favorites[item.id] ? 'fill-red-500 text-red-500' : 'fill-none text-gray-400'}`} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  {/* Add to Cart Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                      ADD+
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-base mb-2">
                    {item.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-xs text-gray-600">
                      {item.reviewCount} ratings
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Price Options */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Talabat Price */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">T</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {item.prices.talabat}$
                      </span>
                    </div>
                    
                    {/* Noon Price */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">N</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {item.prices.noon}$
                      </span>
                    </div>
                    
                    {/* Careem Price */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {item.prices.careem}$
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center gap-2 mx-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
          <div className="max-w-7xl mx-auto">
            <button className="w-full bg-red-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-between hover:bg-red-600 transition-colors">
              <span>View Cart • {getTotalItems()} items</span>
              <span>AED {getTotalPrice().toFixed(2)}</span>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default RestaurantPage;