import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = ({ categories }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  // Show dropdown when mouse enters button or dropdown
  const showDropdown = () => setDropdownVisible(true);

  // Hide dropdown when mouse leaves button or dropdown
  const hideDropdown = () => setDropdownVisible(false);

  // Handle category click
  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
    setDropdownVisible(false); // Hide dropdown after click
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        className=" "
      >
        Categories
      </button>
      
      {/* Dropdown menu */}
      {isDropdownVisible && (
        <ul
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
        >
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
