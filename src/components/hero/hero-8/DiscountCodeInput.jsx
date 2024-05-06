import React, { useState } from 'react';

const DiscountCodeInput = () => {
  const [discountCode, setDiscountCode] = useState("");

  const handleInputChange = (event) => {
    setDiscountCode(event.target.value);
  };

  return (
    <div className="searchMenu-discountCode">
      <div className="searchMenu-discountCode__field">
        <input
          type="text"
          className="input -outline-blue-1 text-blue-1 size-16 rounded-4 text-15 text-light-1 ls-2 lh-16 discount-code-input w-full"
          value={discountCode}
          onChange={handleInputChange}
          placeholder="Enter your code"
        />
      </div>
    </div>
  );
};

export default DiscountCodeInput;