import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-base-200">
      <div className="py-20 px-5 max-w-7xl mx-auto">
        <h1 className="text-3xl text-center font-bold mb-10">
          Customer Testimonial
        </h1>

        <div>
          <div className="flex flex-col md:flex-row gap-5 bg-[url(/testi-bg.png)]  ">
            <div className="bg-white shadow-sm rounded p-8 max-w-[424px]">
              <div className="flex gap-4 justify-start items-center pb-3">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="/testi-1.png"
                  alt=""
                />
                <div>
                  <h1 className="text-[20px] font-semibold">
                    Afiya Jaman Sinigdha
                  </h1>
                  <p>Desiger</p>
                </div>
              </div>
              <p className="text-[#686565]">
                I've tried countless beauty products, but nothing compares to
                this. The texture, scent, and results are just amazing. My skin
                feels so smooth and radiant—I'm obsessed!
              </p>
            </div>
            <div className="bg-white shadow-sm rounded p-8 max-w-[424px]">
              <div className="flex gap-4 justify-start items-center pb-3">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="/testi-2.png"
                  alt=""
                />
                <div>
                  <h1 className="text-[20px] font-semibold">Mrs Riyan Hasan</h1>
                  <p>Doctor</p>
                </div>
              </div>
              <p className="text-[#686565]">
                I was skeptical at first, but after just a week of using these
                products, I noticed a real difference. My skin looks healthier
                and more even-toned. Plus, the packaging is so cute!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
