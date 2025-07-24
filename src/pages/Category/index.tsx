import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface RestaurantItem {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
  totalPrice: string;
  image: string;
  logo: string;
  discount: string;
  category: string;
}

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [selectedSort, setSelectedSort] = useState('Sort');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Category data mapping
  const categoryData: { [key: string]: { title: string; description: string; bgColor: string; image: string } } = {
    'pizza': {
      title: 'Special Delicious Pizza Deals',
      description: 'Authentic Italian pizzas with fresh ingredients',
      bgColor: 'bg-gradient-to-r from-red-500 to-red-600',
      image: '/images/img_frame_45_1.png'
    },
    'burger': {
      title: 'Juicy Burger Collection',
      description: 'Premium burgers with fresh ingredients',
      bgColor: 'bg-gradient-to-r from-orange-500 to-orange-600',
      image: '/images/img_frame_45.png'
    },
    'cake': {
      title: 'Sweet Cake Delights',
      description: 'Freshly baked cakes and desserts',
      bgColor: 'bg-gradient-to-r from-pink-500 to-pink-600',
      image: '/images/img_unsplash_uc0hzduitwy_2.png'
    },
    'sub-sandwich': {
      title: 'Fresh Sub Sandwiches',
      description: 'Healthy and delicious submarine sandwiches',
      bgColor: 'bg-gradient-to-r from-green-500 to-green-600',
      image: '/images/img_frame_45.png'
    },
    'chowmein': {
      title: 'Authentic Chowmein',
      description: 'Traditional Asian noodles with vegetables',
      bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      image: '/images/img_unsplash_uc0hzduitwy_1.png'
    },
    'arabic': {
      title: 'Arabic Cuisine',
      description: 'Traditional Middle Eastern flavors',
      bgColor: 'bg-gradient-to-r from-purple-500 to-purple-600',
      image: '/images/img_frame_45_228x322.png'
    },
    'chinese': {
      title: 'Chinese Delicacies',
      description: 'Authentic Chinese dishes and flavors',
      bgColor: 'bg-gradient-to-r from-red-600 to-red-700',
      image: '/images/img_unsplash_uc0hzduitwy_1.png'
    },
    'continental': {
      title: 'Continental Cuisine',
      description: 'European style dishes and delicacies',
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      image: '/images/img_frame_45.png'
    },
    'breakfast': {
      title: 'Breakfast Specials',
      description: 'Start your day with delicious breakfast',
      bgColor: 'bg-gradient-to-r from-orange-400 to-orange-500',
      image: '/images/img_unsplash_uc0hzduitwy.png'
    },
    'shawarma': {
      title: 'Shawarma Delights',
      description: 'Authentic Middle Eastern wraps',
      bgColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
      image: '/images/img_frame_45_228x322.png'
    },
    'coffee': {
      title: 'Coffee & Beverages',
      description: 'Fresh brewed coffee and drinks',
      bgColor: 'bg-gradient-to-r from-amber-700 to-amber-800',
      image: '/images/img_unsplash_uc0hzduitwy.png'
    }
  };

  // Sample restaurant data filtered by category
  const allRestaurants: RestaurantItem[] = [
    {
      id: '1',
      name: 'The Pizza Pie Factory',
      cuisine: 'Italian, Pizza',
      rating: 4.8,
      deliveryFee: '50 AED',
      deliveryTime: '30-45 mins',
      totalPrice: '80 AED',
      image: '/images/img_frame_45_1.png',
      logo: '/images/talabat-logo-main.png',
      discount: '20% off',
      category: 'pizza'
    },
    {
      id: '2',
      name: 'The Pizza Pie Factory',
      cuisine: 'Italian, Pizza',
      rating: 4.6,
      deliveryFee: '50 AED',
      deliveryTime: '25-35 mins',
      totalPrice: '75 AED',
      image: '/images/img_frame_45_1.png',
      logo: '/images/noon-logo-main.png',
      discount: '15% off',
      category: 'pizza'
    },
    {
      id: '3',
      name: 'The Pizza Pie Factory',
      cuisine: 'Italian, Pizza',
      rating: 4.7,
      deliveryFee: '50 AED',
      deliveryTime: '35-45 mins',
      totalPrice: '85 AED',
      image: '/images/img_frame_45_1.png',
      logo: '/images/careem-logo-main.png',
      discount: '25% off',
      category: 'pizza'
    },
    {
      id: '4',
      name: 'Burger Palace',
      cuisine: 'American, Burgers',
      rating: 4.5,
      deliveryFee: '30 AED',
      deliveryTime: '20-30 mins',
      totalPrice: '60 AED',
      image: '/images/img_frame_45.png',
      logo: '/images/talabat-logo-main.png',
      discount: '20% off',
      category: 'burger'
    },
    {
      id: '5',
      name: 'Sweet Treats Bakery',
      cuisine: 'Bakery, Desserts',
      rating: 4.9,
      deliveryFee: '25 AED',
      deliveryTime: '40-50 mins',
      totalPrice: '45 AED',
      image: '/images/img_unsplash_uc0hzduitwy_2.png',
      logo: '/images/noon-logo-main.png',
      discount: '30% off',
      category: 'cake'
    },
    {
      id: '6',
      name: 'Subway Express',
      cuisine: 'Healthy, Sandwiches',
      rating: 4.4,
      deliveryFee: '20 AED',
      deliveryTime: '15-25 mins',
      totalPrice: '35 AED',
      image: '/images/img_frame_45.png',
      logo: '/images/careem-logo-main.png',
      discount: '15% off',
      category: 'sub-sandwich'
    },
    {
      id: '7',
      name: 'Noodle House',
      cuisine: 'Asian, Chinese',
      rating: 4.3,
      deliveryFee: '35 AED',
      deliveryTime: '30-40 mins',
      totalPrice: '55 AED',
      image: '/images/img_unsplash_uc0hzduitwy_1.png',
      logo: '/images/talabat-logo-main.png',
      discount: '20% off',
      category: 'chowmein'
    },
    {
      id: '8',
      name: 'Arabian Nights',
      cuisine: 'Arabic, Middle Eastern',
      rating: 4.6,
      deliveryFee: '40 AED',
      deliveryTime: '35-45 mins',
      totalPrice: '70 AED',
      image: '/images/img_frame_45_228x322.png',
      logo: '/images/noon-logo-main.png',
      discount: '25% off',
      category: 'arabic'
    }
  ];

  const currentCategory = categoryData[categoryName || 'pizza'] || categoryData['pizza'];
  const filteredRestaurants = allRestaurants.filter(restaurant => 
    restaurant.category === (categoryName || 'pizza')
  );

  // Create multiple instances to show more restaurants (as shown in the image)
  const extendedRestaurants = Array.from({ length: 20 }, (_, index) => ({
    ...filteredRestaurants[index % filteredRestaurants.length],
    id: `${filteredRestaurants[index % filteredRestaurants.length].id}-${index}`
  }));

  const totalPages = Math.ceil(extendedRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRestaurants = extendedRestaurants.slice(startIndex, startIndex + itemsPerPage);

  const handleRestaurantClick = (restaurantId: string) => {
    const originalId = restaurantId.split('-')[0];
    navigate(`/restaurant/${originalId}`);
  };

  const sortOptions = ['Sort', 'Nearest', 'Great Offers', 'Rating 4.0+', 'Previous bought'];
  const filterOptions = ['Nearest', 'Great Offers', 'Rating 4.0+', 'Previous bought'];

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
      <Header />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Hero Section */}
        <div className="flex items-center gap-6 my-8">
          {/* Left Side - Category Info */}
          <div className={`flex-1 ${currentCategory.bgColor} rounded-2xl p-8 text-white relative overflow-hidden`}>
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {currentCategory.title}
              </h1>
              <p className="text-lg opacity-90 mb-6">
                {currentCategory.description}
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </div>
            <div className="absolute right-0 top-0 w-64 h-full opacity-20">
              <img 
                src={currentCategory.image} 
                alt={currentCategory.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Category Image */}
          <div className="hidden lg:block w-80">
            <img 
              src={currentCategory.image} 
              alt={currentCategory.title}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm">
          {/* Sort Dropdown */}
          <div className="relative">
            <select 
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-red-500 text-white px-4 py-2 pr-8 rounded-lg font-medium cursor-pointer hover:bg-red-600 transition-colors"
            >
              {sortOptions.map(option => (
                <option key={option} value={option} className="bg-white text-gray-900">
                  {option}
                </option>
              ))}
            </select>
            <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Filter Buttons */}
          {filterOptions.map(filter => (
            <button
              key={filter}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentRestaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              onClick={() => handleRestaurantClick(restaurant.id)}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Restaurant Image */}
              <div className="relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                {/* Delivery Platform Logo */}
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-md">
                  <img src={restaurant.logo} alt="platform" className="w-8 h-8 rounded" />
                </div>
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {restaurant.discount}
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {restaurant.cuisine}
                </p>

                {/* Rating and Details */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">{restaurant.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{restaurant.deliveryTime}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{restaurant.totalPrice}</div>
                    <div className="text-gray-500">{restaurant.deliveryFee}</div>
                  </div>
                </div>

                {/* View Full Menu Button */}
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  View Full Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-gray-600">
            {startIndex + 1} to {Math.min(startIndex + itemsPerPage, extendedRestaurants.length)} of {extendedRestaurants.length} items
          </span>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Total Items:</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              ‹
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    currentPage === pageNum
                      ? 'bg-red-500 text-white border-red-500'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;