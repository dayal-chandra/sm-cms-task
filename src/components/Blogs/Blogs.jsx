import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-20">
      <h1 className="text-3xl text-center font-bold mb-10">
        Latest News and Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex flex-col items-start justify-center space-y-4">
          <h1 className="text-2xl font-semibold">
            Embrace the Art of Color Harmony
          </h1>
          <p>
            Explore our collection of carefully choosen products expert advice
            and inspiring stories designed to help your discover your full
            potensial. Wheter you are seeking inspiration advice or the per fect
            product to elevate your routine.
          </p>
          <button className="py-2 px-8 text-white bg-[#CE4E61] rounded">
            Read More
          </button>
        </div>
        <div>
          <img
            className="w-[424px] h-[347px] object-cover"
            src="/blog-1.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-4">
          <h1 className="text-2xl font-semibold">
            Embrace the Art of Color Harmony
          </h1>
          <p>
            Explore our collection of carefully choosen products expert advice
            and inspiring stories designed to help your discover your full
            potensial. Wheter you are seeking inspiration advice or the per fect
            product to elevate your routine.
          </p>
          <button className="py-2 px-8 text-black border border-[#CE4E61] rounded">
            Read More
          </button>
        </div>
        <div>
          <img
            className="w-[424px] h-[347px] object-cover"
            src="/blog-2.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-4">
          <h1 className="text-2xl font-semibold">
            Embrace the Art of Color Harmony
          </h1>
          <p>
            Explore our collection of carefully choosen products expert advice
            and inspiring stories designed to help your discover your full
            potensial. Wheter you are seeking inspiration advice or the per fect
            product to elevate your routine.
          </p>
          <button className="py-2 px-8 text-black border border-[#CE4E61] rounded">
            Read More
          </button>
        </div>
        <div>
          <img
            className="w-[424px] h-[347px] object-cover"
            src="/blog-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
