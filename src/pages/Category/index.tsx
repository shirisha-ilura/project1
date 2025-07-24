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
      
      {/* Category Header with circular food images */}
      <div className="w-full bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 py-6">
        <div className="flex items-center justify-center gap-4 px-4">
          {/* Food category circles */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/images/img_frame_45_1.png" alt="Chicago Deep Pizza" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs font-bold text-center">CHICAGO DEEP PIZZA</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/images/img_frame_45.png" alt="Fast Food Combo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs font-bold text-center">FAST FOOD COMBO</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/images/img_frame_45_228x322.png" alt="Grilled Chicken" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs font-bold text-center">GRILLED CHICKEN</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/images/img_frame_45.png" alt="Whopper Burger King" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs font-bold text-center">WHOPPER BURGER KING</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/images/img_unsplash_uc0hzduitwy_2.png" alt="Chicken" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs font-bold text-center">CHICKEN</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/images/img_unsplash_uc0hzduitwy.png" alt="Beef" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs font-bold text-center">BEEF</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/images/img_frame_45_228x322.png" alt="Shawarma" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs font-bold text-center">SHAWARMA</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 my-6 bg-white p-4 rounded-xl shadow-sm">
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
          
          {/* Search */}
          <div className="ml-auto flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Pizza"
              className="bg-transparent outline-none text-sm text-gray-600"
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-8">
          {/* Left Side - Hero Section */}
          <div className={`w-80 ${currentCategory.bgColor} rounded-2xl p-8 text-white relative overflow-hidden h-fit`}>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-2 leading-tight">
                {currentCategory.title}
              </h1>
              <h2 className="text-4xl font-bold text-yellow-300 mb-6">
                {currentCategory.subtitle}
              </h2>
              <div className="mb-6">
                <img 
                  src={currentCategory.image} 
                  alt={currentCategory.title}
                  className="w-64 h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Food Items Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {currentItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Restaurant Info Header */}
                  <div className="p-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm text-gray-900">{item.restaurantName}</h3>
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1">
                          {renderStars(item.rating)}
                        </div>
                        <span className="text-xs text-gray-600">{item.rating}</span>
                        <span className="text-xs text-gray-400">({item.reviewCount})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">{item.deliveryTime}</span>
                      <span className="text-xs font-semibold text-gray-900">{item.price}</span>
                    </div>
                  </div>

                  {/* Food Images */}
                  <div className="flex">
                    <div className="w-1/2 p-2">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-1/2 p-2">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Restaurant Logo and Action */}
                  <div className="p-3 flex items-center justify-between">
                    <img src={item.restaurantLogo} alt="platform" className="w-8 h-8 rounded" />
                    <button className="text-xs text-gray-600 hover:text-gray-800">
                      View Full Menu →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-sm">
              <span className="text-sm text-gray-600">
                {startIndex + 1} to {Math.min(startIndex + itemsPerPage, extendedItems.length)} of {extendedItems.length} items
              </span>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Total Items:</span>
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
                  
                  {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 flex items-center justify-center border rounded text-sm ${
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;