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
  menuItems: MenuItem[];
}

const FoodItemPage: React.FC = () => {
  const { restaurantId, itemId } = useParams<{ restaurantId: string; itemId: string }>();
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<'talabat' | 'noon' | 'careem'>('talabat');
  const [quantity, setQuantity] = useState(1);

  // Same restaurant data as in Restaurant page
  const restaurantData: { [key: string]: RestaurantData } = {
    '1': {
      id: '1',
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
      tagline: 'Crispy, Every Bite Taste',
      menuItems: [
        {
          id: 'kfc-1',
          name: 'Zinger Burger',
          description: 'Spicy chicken fillet with lettuce and mayo in a sesame seed bun. A perfect blend of spice and flavor that will tantalize your taste buds.',
          prices: { talabat: '25.00', noon: '28.00', careem: '30.00' },
          image: '/images/img_4.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.5,
          reviewCount: 532,
          isFavorite: false
        }
        // Add other items as needed
      ]
    }
    // Add other restaurants as needed
  };

  const restaurant = restaurantData[restaurantId || '1'];
  const foodItem = restaurant?.menuItems.find(item => item.id === itemId);

  if (!restaurant || !foodItem) {
    return (
      <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Item Not Found</h2>
            <button 
              onClick={() => navigate('/')}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Go Back Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const platforms = [
    {
      id: 'talabat' as const,
      name: 'Talabat',
      logo: '/images/talabat-logo-main.png',
      color: 'bg-orange-500',
      price: foodItem.prices.talabat,
      originalPrice: '80.00',
      rating: 4.8,
      deliveryTime: '30-35',
      deliveryFee: '8 AED'
    },
    {
      id: 'careem' as const,
      name: 'Careem',
      logo: '/images/careem-logo-main.png',
      color: 'bg-green-500',
      price: foodItem.prices.careem,
      originalPrice: '80.00',
      rating: 4.8,
      deliveryTime: '30-35',
      deliveryFee: '8 AED'
    },
    {
      id: 'noon' as const,
      name: 'Noon',
      logo: '/images/noon-logo-main.png',
      color: 'bg-yellow-500',
      price: foodItem.prices.noon,
      originalPrice: '80.00',
      rating: 4.8,
      deliveryTime: '30-35',
      deliveryFee: '8 AED'
    }
  ];

  const selectedPlatformData = platforms.find(p => p.id === selectedPlatform);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
      <Header />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Food Image */}
          <div className="relative">
            {/* Back Button */}
            <button 
              onClick={() => navigate(`/restaurant/${restaurantId}`)}
              className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Heart Button */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-10">
              <svg className="w-5 h-5 fill-none text-gray-400" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <div className="w-full h-[500px] bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={foodItem.image} 
                alt={foodItem.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Food Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Deal Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-gray-600">Deal Of The Day</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                20%
              </span>
            </div>

            {/* Food Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              TODAY'S <span className="text-red-500">The {foodItem.name}</span> DAY
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {foodItem.description}
            </p>

            {/* Choose Platform */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Platform</h3>

            {/* Platform Options */}
            <div className="space-y-3 mb-8">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    selectedPlatform === platform.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center`}>
                        <img src={platform.logo} alt={platform.name} className="w-8 h-8 rounded-lg" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-red-500 text-xs">30-35 mins</span>
                          <div className="flex items-center gap-1">
                            {renderStars(platform.rating)}
                            <span className="text-xs">{platform.rating}</span>
                          </div>
                          <span className="text-xs">+ {platform.deliveryFee} Delivery Fee</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{platform.price} AED</div>
                      <div className="text-sm text-gray-500 line-through">{platform.originalPrice} AED</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg font-semibold text-gray-900">Quantity:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-xl font-semibold text-gray-900 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-red-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              Add to Cart • {selectedPlatformData && (parseFloat(selectedPlatformData.price) * quantity).toFixed(2)} AED
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FoodItemPage;