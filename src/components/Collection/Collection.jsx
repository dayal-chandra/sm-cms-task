import React from "react";

const Collection = () => {
  return (
    <div className="text-center py-20 px-5">
      <h2 className="text-3xl font-bold mb-10">Browse by Collection</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
        <div>
          <img
            src="/cat-1.png"
            alt="Oil Cleansers"
            className="w-40 h-56 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold">Oil Cleansers</h3>
          <p className="text-sm text-orange-600 mt-1">5 Items</p>
        </div>

        <div>
          <img
            src="/cat-2.png"
            alt="Hand Cream"
            className="w-40 h-56 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold">Hand Cream</h3>
          <p className="text-sm text-orange-600 mt-1">5 Items</p>
        </div>

        <div>
          <img
            src="/cat-3.png"
            alt="Toners Skin"
            className="w-40 h-56 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold">Toners Skin</h3>
          <p className="text-sm text-orange-600 mt-1">5 Items</p>
        </div>

        <div>
          <img
            src="/cat-4.png"
            alt="Face Mask"
            className="w-40 h-56 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold">Face Mask</h3>
          <p className="text-sm text-orange-600 mt-1">5 Items</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
