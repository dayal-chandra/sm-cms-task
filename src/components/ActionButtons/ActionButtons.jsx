import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="p-2 rounded-full bg-white shadow-sm">
        <img className="w-5 h-5 " src="/Search.png" alt="" />
      </div>
      <div className="p-2 rounded-full bg-white shadow-sm">
        <img className="w-5 h-5" src="/Bag.png" alt="" />
      </div>
      <div className="p-2 rounded-full bg-white shadow-sm">
        <img className="w-5 h-5" src="/Profile.png" alt="" />
      </div>
    </div>
  );
};

export default ActionButtons;
