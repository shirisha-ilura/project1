import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  restaurantName: string;
  restaurantLogo: string;
  category: string;
  deliveryTime: string;
  deliveryFee: string;
  discount?: string;
}

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [selectedSort, setSelectedSort] = useState('Sort');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Category data mapping
  const categoryData: { [key: string]: { title: string; subtitle: string; bgColor: string; image: string } } = {
    'pizza': {
      title: 'Special Delicious',
      subtitle: 'Pizza Deals',
      bgColor: 'bg-gradient-to-r from-red-500 to-red-600',
      image: '/images/img_frame_45_1.png'
    },
    'burger': {
      title: 'Juicy Burger',
      subtitle: 'Collection',
      bgColor: 'bg-gradient-to-r from-orange-500 to-orange-600',
      image: '/images/img_frame_45.png'
    },
    'cake': {
      title: 'Sweet Cake',
      subtitle: 'Delights',
      bgColor: 'bg-gradient-to-r from-pink-500 to-pink-600',
      image: '/images/img_unsplash_uc0hzduitwy_2.png'
    },
    'sub-sandwich': {
      title: 'Fresh Sub',
      subtitle: 'Sandwiches',
      bgColor: 'bg-gradient-to-r from-green-500 to-green-600',
      image: '/images/img_frame_45.png'
    },
    'chowmein': {
      title: 'Authentic',
      subtitle: 'Chowmein',
      bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      image: '/images/img_unsplash_uc0hzduitwy_1.png'
    },
    'arabic': {
      title: 'Arabic',
      subtitle: 'Cuisine',
      bgColor: 'bg-gradient-to-r from-purple-500 to-purple-600',
      image: '/images/img_frame_45_228x322.png'
    },
    'chinese': {
      title: 'Chinese',
      subtitle: 'Delicacies',
      bgColor: 'bg-gradient-to-r from-red-600 to-red-700',
      image: '/images/img_unsplash_uc0hzduitwy_1.png'
    },
    'continental': {
      title: 'Continental',
      subtitle: 'Cuisine',
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      image: '/images/img_frame_45.png'
    },
    'breakfast': {
      title: 'Breakfast',
      subtitle: 'Specials',
      bgColor: 'bg-gradient-to-r from-orange-400 to-orange-500',
      image: '/images/img_unsplash_uc0hzduitwy.png'
    },
    'shawarma': {
      title: 'Shawarma',
      subtitle: 'Delights',
      bgColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
      image: '/images/img_frame_45_228x322.png'
    },
    'coffee': {
      title: 'Coffee &',
      subtitle: 'Beverages',
      bgColor: 'bg-gradient-to-r from-amber-700 to-amber-800',
      image: '/images/img_unsplash_uc0hzduitwy.png'
    }
  };

  // Sample food items data filtered by category
  const allFoodItems: FoodItem[] = [
    // Pizza items
    {
      id: 'pizza-1',
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh mozzarella and basil',
      price: '50 AED',
      originalPrice: '65 AED',
      rating: 4.8,
      reviewCount: 324,
      image: '/images/img_frame_45_1.png',
      restaurantName: 'The Pizza Pie Factory',
      restaurantLogo: '/images/talabat-logo-main.png',
      category: 'pizza',
      deliveryTime: '30-45 mins',
      deliveryFee: 'Free delivery',
      discount: '23% off'
    },
    {
      id: 'pizza-2',
      name: 'Pepperoni Supreme',
      description: 'Loaded with pepperoni and cheese',
      price: '55 AED',
      originalPrice: '70 AED',
      rating: 4.6,
      reviewCount: 256,
      image: '/images/img_frame_45_1.png',
      restaurantName: 'The Pizza Pie Factory',
      restaurantLogo: '/images/noon-logo-main.png',
      category: 'pizza',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '21% off'
    },
    {
      id: 'pizza-3',
      name: 'Veggie Delight',
      description: 'Fresh vegetables with cheese',
      price: '48 AED',
      originalPrice: '60 AED',
      rating: 4.5,
      reviewCount: 189,
      image: '/images/img_frame_45_1.png',
      restaurantName: 'The Pizza Pie Factory',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'pizza',
      deliveryTime: '35-45 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Burger items
    {
      id: 'burger-1',
      name: 'Classic Beef Burger',
      description: 'Juicy beef patty with fresh vegetables',
      price: '35 AED',
      originalPrice: '45 AED',
      rating: 4.7,
      reviewCount: 412,
      image: '/images/img_frame_45.png',
      restaurantName: 'Burger Palace',
      restaurantLogo: '/images/talabat-logo-main.png',
      category: 'burger',
      deliveryTime: '20-30 mins',
      deliveryFee: 'Free delivery',
      discount: '22% off'
    },
    {
      id: 'burger-2',
      name: 'Chicken Deluxe',
      description: 'Grilled chicken with special sauce',
      price: '32 AED',
      originalPrice: '40 AED',
      rating: 4.4,
      reviewCount: 298,
      image: '/images/img_frame_45.png',
      restaurantName: 'Burger Palace',
      restaurantLogo: '/images/noon-logo-main.png',
      category: 'burger',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Cake items
    {
      id: 'cake-1',
      name: 'Chocolate Fudge Cake',
      description: 'Rich chocolate cake with fudge',
      price: '25 AED',
      originalPrice: '35 AED',
      rating: 4.9,
      reviewCount: 156,
      image: '/images/img_unsplash_uc0hzduitwy_2.png',
      restaurantName: 'Sweet Treats Bakery',
      restaurantLogo: '/images/noon-logo-main.png',
      category: 'cake',
      deliveryTime: '40-50 mins',
      deliveryFee: 'Free delivery',
      discount: '29% off'
    },
    // Sub-sandwich items
    {
      id: 'sub-1',
      name: 'Italian BMT Sub',
      description: 'Pepperoni, salami, and ham with fresh vegetables',
      price: '18 AED',
      originalPrice: '24 AED',
      rating: 4.3,
      reviewCount: 89,
      image: '/images/img_frame_45.png',
      restaurantName: 'Subway Express',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'sub-sandwich',
      deliveryTime: '15-25 mins',
      deliveryFee: 'Free delivery',
      discount: '25% off'
    },
    // Chowmein items
    {
      id: 'chowmein-1',
      name: 'Chicken Chowmein',
      description: 'Stir-fried noodles with chicken and vegetables',
      price: '22 AED',
      originalPrice: '28 AED',
      rating: 4.6,
      reviewCount: 203,
      image: '/images/img_unsplash_uc0hzduitwy_1.png',
      restaurantName: 'Dragon Palace',
      restaurantLogo: '/images/talabat-logo-main.png',
      category: 'chowmein',
      deliveryTime: '30-40 mins',
      deliveryFee: '5 AED',
      discount: '21% off'
    },
    // Arabic items
    {
      id: 'arabic-1',
      name: 'Mixed Grilled Platter',
      description: 'Assorted grilled meats with rice and salad',
      price: '45 AED',
      originalPrice: '55 AED',
      rating: 4.8,
      reviewCount: 167,
      image: '/images/img_frame_45_228x322.png',
      restaurantName: 'Al Fanar Restaurant',
      restaurantLogo: '/images/noon-logo-main.png',
      category: 'arabic',
      deliveryTime: '45-60 mins',
      deliveryFee: 'Free delivery',
      discount: '18% off'
    }
    // Add more items for other categories...
  ];

  // Create extended list to show more items
  const createExtendedItems = (items: FoodItem[], count: number) => {
    const extended = [];
    for (let i = 0; i < count; i++) {
      const baseItem = items[i % items.length];
      extended.push({
        ...baseItem,
        id: `${baseItem.id}-${i}`,
        name: `${baseItem.name} ${i + 1}`
      });
    }
    return extended;
  };

  const currentCategory = categoryData[categoryName || 'pizza'] || categoryData['pizza'];
  const categoryItems = allFoodItems.filter(item => item.category === (categoryName || 'pizza'));
  const extendedItems = createExtendedItems(categoryItems, 500); // Create 500 items as shown in image

  const totalPages = Math.ceil(extendedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = extendedItems.slice(startIndex, startIndex + itemsPerPage);

  const handleItemClick = (itemId: string) => {
    // Navigate to food item detail page
    navigate(`/food-item/${itemId}`);
  };

  const sortOptions = ['Sort', 'Nearest', 'Great Offers', 'Rating 4.0+', 'Previous bought'];
  const filterOptions = ['Nearest', 'Great Offers', 'Rating 4.0+', 'Previous bought'];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
      <Header />
      
      {/* Category Header - Horizontal Scrolling Food Categories */}
      <div className="w-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-center text-lg font-semibold mb-6">Browse Categories</h2>
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex items-center gap-4 min-w-max">
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img src="/images/img_frame_45_1.png" alt="Chicago Deep Pizza" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-bold text-center max-w-[100px]">CHICAGO DEEP PIZZA</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img src="/images/img_frame_45.png" alt="Fast Food Combo" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-bold text-center max-w-[100px]">FAST FOOD COMBO</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img src="/images/img_frame_45_228x322.png" alt="Grilled Chicken" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-bold text-center max-w-[100px]">GRILLED CHICKEN</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img src="/images/img_frame_45.png" alt="Whopper Burger King" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-bold text-center max-w-[100px]">WHOPPER BURGER KING</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img src="/images/img_unsplash_uc0hzduitwy_2.png" alt="Chicken" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-bold text-center max-w-[100px]">CHICKEN</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img src="/images/img_unsplash_uc0hzduitwy.png" alt="Beef" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-bold text-center max-w-[100px]">BEEF</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img src="/images/img_frame_45_228x322.png" alt="Shawarma" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-bold text-center max-w-[100px]">SHAWARMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              Home
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-red-600 font-medium capitalize">
              {categoryName?.replace('-', ' ') || 'Category'}
            </span>
          </nav>
        </div>
        {/* Filters Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 animate-fadeIn">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select 
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 pr-10 rounded-xl font-medium cursor-pointer hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option} className="bg-white text-gray-900">
                    {option}
                  </option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  className="px-5 py-2.5 border-2 border-gray-200 rounded-xl text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-300 font-medium"
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="ml-auto flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 min-w-[250px]">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder={`Search ${categoryName || 'food'}...`}
                className="bg-transparent outline-none text-sm text-gray-700 flex-1 placeholder-gray-400"
              />
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">{extendedItems.length} restaurants available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Free delivery on orders above 50 AED</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Hero Section */}
          <div className={`w-full lg:w-80 ${currentCategory.bgColor} rounded-2xl p-8 text-white relative overflow-hidden h-fit`}>
            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                {currentCategory.title}
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-6">
                {currentCategory.subtitle}
              </h2>
              <div className="mb-6">
                <img 
                  src={currentCategory.image} 
                  alt={currentCategory.title}
                  className="w-full lg:w-64 h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-white/90">
                  Discover delicious {currentCategory.subtitle.toLowerCase()} from top restaurants near you
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Food Items Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Popular {currentCategory.subtitle}
              </h3>
              <p className="text-gray-600">
                {extendedItems.length} restaurants delivering to your area
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  {/* Restaurant Image */}
                  <div className="relative h-48">
                    <img 
                      src={item.image} 
                      alt={item.restaurantName}
                      className="w-full h-full object-cover"
                    />
                    {/* Discount Badge */}
                    {item.discount && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {item.discount}
                      </div>
                    )}
                    {/* Delivery Time Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                      {item.deliveryTime}
                    </div>
                  </div>

                  {/* Restaurant Details */}
                  <div className="p-4">
                    {/* Restaurant Name and Rating */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg text-gray-900 truncate pr-2">{item.restaurantName}</h3>
                      <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                        <svg className="w-3 h-3 fill-green-600" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs font-bold text-green-700">{item.rating}</span>
                      </div>
                    </div>
                    
                    {/* Cuisine Type */}
                    <p className="text-sm text-gray-500 mb-3 capitalize">{item.category} • American</p>
                    
                    {/* Delivery Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">{item.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">{item.deliveryFee}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={item.restaurantLogo} alt="delivery platform" className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 font-medium">
                    Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, extendedItems.length)} of {extendedItems.length} restaurants
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Per page:</span>
                    <select className="border-2 border-gray-200 rounded-lg px-3 py-1 text-sm font-medium focus:border-red-500 focus:outline-none">
                      <option>20</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 hover:bg-red-50 transition-all duration-300 font-medium"
                  >
                    ‹
                  </button>
                  
                  {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 flex items-center justify-center border-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white border-red-500 shadow-lg'
                            : 'border-gray-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 hover:bg-red-50 transition-all duration-300 font-medium"
                  >
                    ›
                  </button>
                </div>
              </div>
              
              {/* Load More Button for Mobile */}
              <div className="mt-4 sm:hidden">
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300">
                  Load More Restaurants
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;