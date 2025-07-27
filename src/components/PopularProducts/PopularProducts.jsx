import React from "react";

const products = [
  {
    name: "Lipstick",
    price: 120,
    discount: true,
    image: "/product-1.png",
  },
  {
    name: "Lip Balm",
    price: 120,
    discount: false,
    image: "/product-2.png",
  },
  { name: "Blush", price: 120, discount: false, image: "/product-3.png" },
  {
    name: "Eye Shadow",
    price: 120,
    discount: true,
    image: "/product-4.png",
  },
  { name: "Maskara", price: 120, discount: true, image: "/product-5.png" },
  {
    name: "Foundation",
    price: 120,
    discount: false,
    image: "/product-6.png",
  },
  { name: "Jel", price: 120, discount: false, image: "/product-7.png" },
  { name: "Cream", price: 120, discount: false, image: "/product-8.png" },
];

const PopularProducts = () => {
  return (
    <section className="py-20 px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Popular Product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center">
        {products.map((product, idx) => (
          <div key={idx}>
            <div className="bg-base-300 max-w-[300px] h-[350px] rounded relative">
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  50%
                </div>
              )}
              <img
                className="p-5 max-w-[250px] h-[300px] mx-auto my-auto object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div>
              <p className="text-gray-500 py-3 text-[14px] font-normal">
                Better Wood and Home
              </p>
              <h1 className="text-[20px] font-semibold">{product.name}</h1>
              <p className="text-red-400 text-sm pb-5">
                Price:${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
