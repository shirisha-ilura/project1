import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top Header */}
      <div className="flex justify-start items-center w-full px-4 sm:px-6 lg:px-[120px] py-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <h1 className="text-lg sm:text-xl lg:text-[26px] font-poppins font-semibold leading-[41px] text-[#2e2e2e]">
            NAME OF APP
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-start gap-9">
            <nav className="flex gap-9 items-start">
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e]">Home</span>
                <div className="w-8 h-1 bg-[#e50300] rounded-[2px]"></div>
              </div>
              <button role="menuitem" className="text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
                Blog
              </button>
              <button role="menuitem" className="text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
                About Us
              </button>
              <button role="menuitem" className="text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
                Contact
              </button>
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex gap-6 items-center">
            <button className="text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
              Sign Up
            </button>
            <Button className="px-[30px] py-1.5 text-[13px] font-poppins font-normal leading-[21px] rounded-[6px]">
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search and Location Bar */}
      <div className="flex flex-col lg:flex-row gap-2 items-center w-full px-4 sm:px-6 lg:px-[120px] lg:pr-[90px] mt-5">
        <div className="flex flex-col sm:flex-row items-center w-full gap-4 lg:gap-7">
          {/* Category Dropdown and Search */}
          <div className="flex w-full lg:flex-1 border border-[#828282] rounded-[3px] bg-white">
            <div className="relative">
              <button 
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex items-center justify-center px-4 py-3 bg-white rounded-l-[3px] border-r border-[#828282]"
              >
                <span className="text-[12px] font-quicksand font-bold leading-4 text-black mr-2">All Categories</span>
                <img src="/images/img_icon.svg" alt="dropdown" className="w-3 h-3" />
                <div className="w-px h-4 bg-[#828282] ml-3"></div>
              </button>
              
              {categoryOpen && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-b-md shadow-lg z-10">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm">Fruits & Vegetables</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm">Meat & Seafood</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm">Dairy & Eggs</button>
                </div>
              )}
            </div>
            
            <div className="flex-1 px-4 py-3">
              <input 
                type="text" 
                placeholder="Search for items..."
                className="w-full text-[12px] font-lato font-normal leading-[15px] text-[#838383] bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Location Selector */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#ececec] rounded shadow-[4px_4px_13px_#0000000c] w-full sm:w-auto lg:w-[16%]">
            <img src="/images/img_icon_gray_400.svg" alt="location" className="w-3 h-[30px]" />
            <span className="text-[12px] font-quicksand font-medium leading-4 text-[#828282]">Your Location</span>
            <img src="/images/img_icon_gray_600_02.svg" alt="dropdown" className="w-3 h-3" />
          </div>
        </div>

        {/* Cart, Wishlist, Account */}
        <div className="flex items-center gap-4 mt-4 lg:mt-1 w-full sm:w-auto justify-center lg:justify-end lg:w-[16%]">
          <div className="flex items-center gap-1">
            <div className="relative">
              <img src="/images/img_header.svg" alt="wishlist" className="w-[22px] h-[22px]" />
              <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-[#e50300] text-white text-[10px] font-lato font-medium leading-[13px] text-center rounded-full flex items-center justify-center">
                6
              </span>
            </div>
            <span className="text-[13px] font-lato font-normal leading-[17px] text-[#7e7e7e] hidden sm:inline">Wishlist</span>
          </div>
          
          <div className="flex items-center gap-1">
            <img src="/images/img_header_black_900.svg" alt="cart" className="w-[22px] h-[22px]" />
            <span className="text-[13px] font-lato font-normal leading-[17px] text-[#7e7e7e] hidden sm:inline">Cart</span>
          </div>
          
          <div className="flex items-center gap-1">
            <img src="/images/img_header_black_900_22x22.svg" alt="account" className="w-[22px] h-[22px]" />
            <span className="text-[13px] font-lato font-normal leading-[17px] text-[#7e7e7e] hidden sm:inline">Account</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center items-center w-full border-t border-b border-[#ececec] bg-white px-4 sm:px-6 lg:px-[118px] py-2.5 mt-2">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[86%] gap-4">
          {/* Browse Categories Button */}
          <div className="w-full lg:w-[18%]">
            <button className="flex justify-between items-center w-full bg-[#e50300] text-white px-[18px] py-3 rounded-[6px] hover:bg-[#d10300] transition-colors">
              <span className="text-[13px] font-outfit font-light leading-[18px]">Browse all Categories</span>
              <img src="/images/img_ep_arrow_up.svg" alt="arrow" className="w-3 h-2.5" />
            </button>
          </div>

          {/* Main Navigation Menu */}
          <nav className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-4 lg:gap-9 items-center w-full lg:w-auto`}>
            <div className="flex items-center gap-2">
              <img src="/images/img_icon_hot_svg.svg" alt="deals" className="w-5 h-5" />
              <span className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e]">Deals</span>
            </div>
            
            <button role="menuitem" className="text-[16px] font-quicksand font-bold leading-5 text-[#f54748] hover:text-[#e50300] transition-colors">
              Home
            </button>
            
            <button role="menuitem" className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e] hover:text-[#f54748] transition-colors">
              About
            </button>
            
            <div className="flex items-center gap-2">
              <button role="menuitem" aria-haspopup="true" aria-expanded="false" className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e] hover:text-[#f54748] transition-colors">
                Shop
              </button>
              <img src="/images/img_arrow_up.svg" alt="dropdown" className="w-2 h-2" />
            </div>
            
            <div className="flex items-center gap-2">
              <button role="menuitem" aria-haspopup="true" aria-expanded="false" className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e] hover:text-[#f54748] transition-colors">
                Vendors
              </button>
              <img src="/images/img_arrow_up.svg" alt="dropdown" className="w-2 h-2" />
            </div>
            
            <div className="flex items-center gap-2">
              <button role="menuitem" aria-haspopup="true" aria-expanded="false" className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e] hover:text-[#f54748] transition-colors">
                Mega menu
              </button>
              <img src="/images/img_arrow_up.svg" alt="dropdown" className="w-2 h-2" />
            </div>
            
            <div className="flex items-center gap-2">
              <button role="menuitem" aria-haspopup="true" aria-expanded="false" className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e] hover:text-[#f54748] transition-colors">
                Blog
              </button>
              <img src="/images/img_arrow_up.svg" alt="dropdown" className="w-2 h-2" />
            </div>
            
            <div className="flex items-center gap-2">
              <button role="menuitem" aria-haspopup="true" aria-expanded="false" className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e] hover:text-[#f54748] transition-colors">
                Pages
              </button>
              <img src="/images/img_arrow_up.svg" alt="dropdown" className="w-2 h-2" />
            </div>
            
            <button role="menuitem" className="text-[16px] font-quicksand font-bold leading-5 text-[#253d4e] hover:text-[#f54748] transition-colors">
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col gap-4">
            <button className="text-left text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
              Blog
            </button>
            <button className="text-left text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
              About Us
            </button>
            <button className="text-left text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
              Contact
            </button>
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button className="text-[13px] font-poppins font-normal leading-[21px] text-[#2e2e2e] hover:text-[#e50300] transition-colors">
                Sign Up
              </button>
              <Button className="px-[30px] py-1.5 text-[13px] font-poppins font-normal leading-[21px] rounded-[6px]">
                Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;