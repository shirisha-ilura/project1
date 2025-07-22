import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isPopular?: boolean;
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
}

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});

  // Mock restaurant data - in real app, this would come from API
  const restaurant: RestaurantData = {
    id: id || '1',
    name: 'KFC',
    cuisine: 'Fast Food, Chicken',
    rating: 4.8,
    deliveryTime: '30-45 mins',
    deliveryFee: 'Free',
    image: '/images/img_4.png',
    logo: '/images/talabat-logo-main.png',
    discount: '20% off',
    address: 'Sheikh Zayed Road, Dubai',
    phone: '+971 4 123 4567'
  };

  const categories = ['Popular', 'Chicken', 'Burgers', 'Sides', 'Desserts', 'Beverages'];

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Zinger Burger',
      description: 'Crispy chicken fillet with spicy mayo and lettuce',
      price: '25 AED',
      image: '/images/img_4.png',
      category: 'Popular',
      isPopular: true
    },
    {
      id: '2',
      name: 'Original Recipe Chicken',
      description: '2 pieces of our signature chicken with 11 herbs and spices',
      price: '18 AED',
      image: '/images/img_4.png',
      category: 'Popular',
      isPopular: true
    },
    {
      id: '3',
      name: 'Hot Wings',
      description: '6 pieces of spicy chicken wings',
      price: '22 AED',
      image: '/images/img_4.png',
      category: 'Chicken'
    },
    {
      id: '4',
      name: 'Chicken Popcorn',
      description: 'Bite-sized pieces of crispy chicken',
      price: '15 AED',
      image: '/images/img_4.png',
      category: 'Chicken'
    },
    {
      id: '5',
      name: 'Tower Burger',
      description: 'Double chicken fillet with cheese and hash brown',
      price: '32 AED',
      image: '/images/img_4.png',
      category: 'Burgers'
    },
    {
      id: '6',
      name: 'Mighty Zinger',
      description: 'Large spicy chicken burger with extra toppings',
      price: '28 AED',
      image: '/images/img_4.png',
      category: 'Burgers'
    },
    {
      id: '7',
      name: 'Regular Fries',
      description: 'Crispy golden fries',
      price: '8 AED',
      image: '/images/img_4.png',
      category: 'Sides'
    },
    {
      id: '8',
      name: 'Coleslaw',
      description: 'Fresh cabbage and carrot salad',
      price: '6 AED',
      image: '/images/img_4.png',
      category: 'Sides'
    }
  ];

  const filteredItems = selectedCategory === 'Popular' 
    ? menuItems.filter(item => item.isPopular)
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

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [itemId, count]) => {
      const item = menuItems.find(item => item.id === itemId);
      if (item && count > 0) {
        const price = parseFloat(item.price.replace(' AED', ''));
        return total + (price * count);
      }
      return total;
    }, 0);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center min-h-screen">
      <Header />
      
      {/* Restaurant Header */}
      <div className="w-full relative">
        <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] relative overflow-hidden">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Restaurant Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6 lg:p-8">
            <div className="flex items-end gap-4">
              <img 
                src={restaurant.logo} 
                alt={`${restaurant.name} logo`}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg bg-white p-2"
              />
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {restaurant.name}
                </h1>
                <p className="text-white text-opacity-90 text-sm sm:text-base mb-2">
                  {restaurant.cuisine}
                </p>
                <div className="flex items-center gap-4 text-white text-opacity-90 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{restaurant.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{restaurant.deliveryTime}</span>
                  <span>•</span>
                  <span>{restaurant.deliveryFee} delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Details */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Restaurant Info</h2>
            {restaurant.discount && (
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {restaurant.discount}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p>{restaurant.address}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p>{restaurant.phone}</p>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#e50300] text-white'
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
            <div key={item.id} className="bg-white rounded-lg shadow-sm border p-4 flex gap-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.name}
                    {item.isPopular && (
                      <span className="ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </h3>
                  <span className="font-bold text-[#e50300] text-sm sm:text-base whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {cartItems[item.id] > 0 && (
                      <>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
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
                      className="w-8 h-8 rounded-full bg-[#e50300] text-white flex items-center justify-center hover:bg-[#d10300] transition-colors"
                    >
                      <span className="text-lg font-bold">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
          <div className="max-w-7xl mx-auto">
            <Button className="w-full bg-[#e50300] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-between">
              <span>View Cart ({getTotalItems()} items)</span>
              <span>{getTotalPrice().toFixed(0)} AED</span>
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default RestaurantPage;