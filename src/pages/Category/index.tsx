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

  // Category data for horizontal scroll
  const horizontalCategories = [
    { id: 'chicago-deep-pizza', name: 'CHICAGO DEEP PIZZA', image: '/images/img_frame_45_1.png' },
    { id: 'fast-food-combo', name: 'FAST FOOD COMBO', image: '/images/img_frame_45.png' },
    { id: 'grilled-chicken', name: 'GRILLED CHICKEN', image: '/images/img_frame_45_228x322.png' },
    { id: 'whopper-burger-king', name: 'WHOPPER BURGER KING', image: '/images/img_frame_45.png' },
    { id: 'chicken', name: 'CHICKEN', image: '/images/img_unsplash_uc0hzduitwy_2.png' },
    { id: 'beef', name: 'BEEF', image: '/images/img_unsplash_uc0hzduitwy.png' },
    { id: 'shawarma', name: 'SHAWARMA', image: '/images/img_frame_45_228x322.png' }
  ];

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

  const categoryItems = allFoodItems.filter(item => item.category === (categoryName || 'pizza'));
  const extendedItems = createExtendedItems(categoryItems, 500);

  const totalPages = Math.ceil(extendedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = extendedItems.slice(startIndex, startIndex + itemsPerPage);

  const handleItemClick = (itemId: string) => {
    navigate(`/food-item/${itemId}`);
  };

  const handleCategoryClick = (categoryId: string) => {
    const urlFriendlyName = categoryId.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${urlFriendlyName}`);
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
      
      {/* Horizontal Category Header */}
      <div className="w-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 py-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-10 right-20 w-20 h-20 border border-white rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Categories */}
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide pb-2 flex-1">
              <div className="flex items-center gap-6 min-w-max">
                {horizontalCategories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white text-xs font-bold text-center max-w-[100px] leading-tight">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Arrow */}
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
        <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select 
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none bg-white text-red-600 border border-red-200 px-4 py-2 pr-8 rounded-lg font-medium cursor-pointer hover:border-red-300 transition-all duration-300 text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option} className="bg-white text-gray-900">
                    {option}
                  </option>
                ))}
              </select>
              <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-300 font-medium text-sm"
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="ml-auto flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 min-w-[200px]">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Pizza"
                className="bg-transparent outline-none text-sm text-gray-700 flex-1 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
              >
                {/* Restaurant Card Header */}
                <div className="p-4 pb-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-900">{item.restaurantName}</h3>
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Restaurant Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <img src={item.restaurantLogo} alt="delivery platform" className="w-4 h-4" />
                      <span>{item.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-500">{item.deliveryTime}</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.price}</span>
                  </div>
                </div>

                {/* Food Items Horizontal Scroll */}
                <div className="px-4 pb-4">
                  <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                    {/* Generate 3 food items for each restaurant */}
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="flex-shrink-0 w-32">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={`${item.name} ${index}`}
                            className="w-32 h-24 object-cover rounded-lg"
                          />
                          <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {index === 1 ? 'Margherita pizza' : index === 2 ? 'Farmhouse Pizza' : 'Pepperoni Pizza'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Full Food Menu */}
                  <button className="flex items-center justify-between w-full mt-3 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                    <span>View Full Food Menu</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, extendedItems.length)} of {extendedItems.length} restaurants
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Per page:</span>
                <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm font-medium focus:border-red-500 focus:outline-none">
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
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 hover:bg-red-50 transition-all duration-300 font-medium"
              >
                ‹
              </button>
              
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center border rounded-xl text-sm font-medium transition-all duration-300 ${
                      currentPage === pageNum
                        ? 'bg-red-500 text-white border-red-500'
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
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 hover:bg-red-50 transition-all duration-300 font-medium"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;