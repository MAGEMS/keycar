import React, { useState } from 'react';

const DiscountCodeInput = () => {
    const [discountCode, setDiscountCode] = useState("");
  
    const handleInputChange = (event) => {
      setDiscountCode(event.target.value);
    };
  
    return (
      <div className="searchMenu-date px-20 lg:py-20 lg:px-0 w-full">
        <input
          type="text"
          className="input -outline-blue-1 text-blue-1 size-38 rounded-4 text-15 text-light-1 ls-2 lh-16 discount-code-input"
          value={discountCode}
          onChange={handleInputChange}
          placeholder="Enter your code"
        />
      </div>
    );
};

export default DiscountCodeInput;