import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { Categories, Hero, SpecialOffers, Restaurants } from '../../components/pages/Home';

interface DishItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  orderTime: string;
}

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
}

interface CategoryItem {
  id: string;
  name: string;
  image: string;
}

const HomePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Recommended');

  const specialOffers: DishItem[] = [
    {
      id: '1',
      name: 'Kebab',
      price: '10 AED',
      rating: 4.5,
      image: '/images/img_unsplash_uc0hzduitwy.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      orderTime: '30-45 mins.'
    },
    {
      id: '2',
      name: 'Chicken Tikka',
      price: '15 AED',
      rating: 4.8,
      image: '/images/img_unsplash_uc0hzduitwy_198x198.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      orderTime: '30-35 mins.'
    },
    {
      id: '3',
      name: 'Desi Chowmein',
      price: '8 AED',
      rating: 4.2,
      image: '/images/img_unsplash_uc0hzduitwy_1.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      orderTime: '50 mins'
    },
    {
      id: '4',
      name: 'Chicken Chargha',
      price: '28 AED',
      rating: 5.0,
      image: '/images/img_unsplash_uc0hzduitwy_2.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      orderTime: '60-65 mins'
    }
  ];

  const categories: CategoryItem[] = [
    { id: '1', name: 'Pizza', image: '/images/img_image.png' },
    { id: '2', name: 'Burger', image: '/images/img_image_106x106.png' },
    { id: '3', name: 'Cake', image: '/images/img_image_1.png' },
    { id: '4', name: 'Sub-sandwich', image: '/images/img_image_2.png' },
    { id: '5', name: 'Chowmein', image: '/images/img_image_3.png' },
    { id: '6', name: 'Arabic', image: '/images/img_image_4.png' },
    { id: '7', name: 'Chinese', image: '/images/img_image_5.png' },
    { id: '8', name: 'Continental', image: '/images/img_image_6.png' },
    { id: '9', name: 'Breakfast', image: '/images/img_image_7.png' },
    { id: '10', name: 'Shawarma', image: '/images/img_image_8.png' },
    { id: '11', name: 'Coffee', image: '/images/img_image_9.png' }
  ];

  const restaurants: RestaurantItem[] = [
    {
      id: '1',
      name: 'KFC',
      cuisine: 'North Indian',
      rating: 4.8,
      deliveryFee: 'Free',
      deliveryTime: '30-45 mins.',
      totalPrice: '230 AED',
      image: '/images/img_4.png',
      logo: '/images/talabat-logo-main.png',
      discount: '20% off'
    },
    {
      id: '2',
      name: 'Hardee\'s',
      cuisine: 'North Indian',
      rating: 4.8,
      deliveryFee: '5 AED',
      deliveryTime: '30-35 mins.',
      totalPrice: '82 AED',
      image: '/images/img_frame_45.png',
      logo: '/images/noon-logo-main.png',
      discount: '20% off'
    },
    {
      id: '3',
      name: 'Shwaya House',
      cuisine: 'North Indian',
      rating: 4.8,
      deliveryFee: '7 AED',
      deliveryTime: '30-45 mins.',
      totalPrice: '40 AED',
      image: '/images/img_frame_45_228x322.png',
      logo: '/images/noon-logo-main.png',
      discount: '20% off'
    },
    {
      id: '4',
      name: 'Baba Sultan Pizza and Pies',
      cuisine: 'North Indian',
      rating: 4.8,
      deliveryFee: '7 AED',
      deliveryTime: '50 mins',
      totalPrice: '70 AED',
      image: '/images/img_frame_45_1.png',
      logo: '/images/careem-logo-main.png',
      discount: '20% off'
    }
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <Header />
      <Categories categories={categories} />
      <Hero />
      <SpecialOffers specialOffers={specialOffers} />
      <Restaurants 
        restaurants={restaurants} 
        selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
      />
      <Footer />
    </div>
  );
};

export default HomePage;