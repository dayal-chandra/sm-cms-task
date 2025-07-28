import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-base-200">
      <div className="roboto-font max-w-6xl mx-auto px-5 py-20">
        <h1 className=" text-3xl text-center font-bold mb-10">
          Customer Testimonial
        </h1>
        <div className="md:relative w-full h-[500px] md:h-[300px] md:bg-[url(/testi-bg.png)] bg-no-repeat rounded bg-right">
          <div className="md:absolute top-12 flex flex-col md:flex-row gap-5 justify-center items-center">
            <div className="bg-white max-w-[350px] rounded p-6 flex flex-col items-start">
              <div className="flex gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/testi-1.png"
                  alt="profile picture"
                />
                <div>
                  <h3 className="font-semibold text-black">
                    Afiya Jaman Sinigdha
                  </h3>
                  <p className="text-[12px] text-gray-500">Designer</p>
                </div>
              </div>
              <p className="text-[14px] text-gray-500 pt-4">
                Explore our collection of carefully chosem products expert
                advice and inspiring stories designed to help you discover your
                full potential. Whether y ore seeking inspiration advice or the
                perfect product to elevate your routine.
              </p>
            </div>
            <div className="bg-white max-w-[350px] rounded p-6 flex flex-col items-start">
              <div className="flex gap-2 justify-center items-center">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/testi-2.png"
                  alt="profile picture"
                />
                <div>
                  <h3 className="font-semibold text-black">Riyan Hasan Rimu</h3>
                  <p className="text-[12px] text-gray-500">Designer</p>
                </div>
              </div>
              <p className="text-[14px] text-gray-500 pt-4">
                Explore our collection of carefully chosem products expert
                advice and inspiring stories designed to help you discover your
                full potential. Whether y ore seeking inspiration advice or the
                perfect product to elevate your routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
