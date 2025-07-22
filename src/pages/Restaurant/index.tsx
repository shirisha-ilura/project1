import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  isPopular?: boolean;
  discount?: string;
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
}

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Starters');
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});

  // Mock restaurant data based on Figma design
  const restaurant: RestaurantData = {
    id: id || '1',
    name: 'McDonald\'s',
    cuisine: 'Fast Food, Burgers',
    rating: 4.3,
    deliveryTime: '20-30 min',
    deliveryFee: 'Free',
    image: '/images/img_4.png',
    logo: '/images/talabat-logo-main.png',
    discount: '20% off',
    address: 'Sheikh Zayed Road, Dubai',
    phone: '+971 4 123 4567',
    isOpen: true,
    openTime: 'Opens at 6:00 AM'
  };

  const categories = ['Starters', 'Mains', 'Sides', 'Desserts', 'Beverages'];

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Big Mac',
      description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
      price: '25.00',
      originalPrice: '30.00',
      image: '/images/img_4.png',
      category: 'Mains',
      isPopular: true,
      discount: '17% OFF'
    },
    {
      id: '2',
      name: 'Chicken McNuggets',
      description: 'Tender, juicy chicken nuggets made with all white meat chicken.',
      price: '18.00',
      image: '/images/img_4.png',
      category: 'Starters',
      isPopular: true
    },
    {
      id: '3',
      name: 'Quarter Pounder',
      description: 'Fresh beef quarter pound burger with cheese, onions, pickles, and ketchup.',
      price: '28.00',
      originalPrice: '32.00',
      image: '/images/img_4.png',
      category: 'Mains',
      discount: '12% OFF'
    },
    {
      id: '4',
      name: 'French Fries',
      description: 'Golden, crispy fries made from premium potatoes.',
      price: '12.00',
      image: '/images/img_4.png',
      category: 'Sides'
    },
    {
      id: '5',
      name: 'McFlurry',
      description: 'Creamy vanilla soft serve with your choice of mix-ins.',
      price: '15.00',
      image: '/images/img_4.png',
      category: 'Desserts'
    },
    {
      id: '6',
      name: 'Coca Cola',
      description: 'Refreshing Coca-Cola soft drink.',
      price: '8.00',
      image: '/images/img_4.png',
      category: 'Beverages'
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

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

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [itemId, count]) => {
      const item = menuItems.find(item => item.id === itemId);
      if (item && count > 0) {
        const price = parseFloat(item.price);
        return total + (price * count);
      }
      return total;
    }, 0);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center min-h-screen">
      <Header />
      
      {/* Restaurant Header Section */}
      <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button and Restaurant Info */}
          <div className="flex items-center gap-4 mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {restaurant.name}
              </h1>
              <p className="text-gray-600 text-sm">
                {restaurant.cuisine}
              </p>
            </div>
          </div>

          {/* Restaurant Image and Details Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <div className="relative h-48 sm:h-64">
              <img 
                src={restaurant.image} 
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {restaurant.discount}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={restaurant.logo} 
                    alt={`${restaurant.name} logo`}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{restaurant.name}</h2>
                    <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{restaurant.deliveryTime}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{restaurant.openTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{restaurant.deliveryFee} delivery</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  restaurant.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {restaurant.isOpen ? 'Open' : 'Closed'}
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search in menu"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 pl-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="space-y-4 mb-20">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {item.name}
                          {item.isPopular && (
                            <span className="ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                              Popular
                            </span>
                          )}
                        </h3>
                        {item.discount && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                            {item.discount}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 text-lg">
                          AED {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-gray-400 line-through text-sm">
                            AED {item.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {cartItems[item.id] > 0 && (
                          <>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors"
                            >
                              <span className="text-lg font-bold">-</span>
                            </button>
                            <span className="w-8 text-center font-medium">
                              {cartItems[item.id]}
                            </span>
                          </>
                        )}
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <span className="text-lg font-bold">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
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