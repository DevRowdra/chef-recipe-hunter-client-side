import React from 'react';
import pic1 from '../assets/caro pic/Fotolia_1848649_Subscription_L-800x475.jpg';
import pic2 from '../assets/caro pic/Fotolia_20703315_Subscription_L-800x475.jpg';
import pic3 from '../assets/caro pic/Fotolia_4619038_Subscription_L-800x475.jpg';
import pic4 from '../assets/caro pic/Fotolia_6221608_Subscription_L-800x475.jpg';
const Banner = () => {
  // test
  return (
    <div>
      <div className="carousel w-full h-auto  ">
        <div
          id="slide1"
          className="carousel-item relative w-full"
        >
          <img src={pic1} />
          <div className="absolute top-10 left-0 right-0  w-60">
            <h2 className="text-white text-4xl font-bold text-center">
              Salt Roasted Chicken
            </h2>
            <p className="text-center text-blue-900">
              Easily add-in a short description about your recipe! This can be
              of any length. Remember, you are trying to sell your recipe!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full"
        >
          <img
            src={pic2}
            className="w-full"
          />
           <div className="absolute top-10 left-0 right-0  w-60">
            <h2 className="text-gray-500 text-4xl font-bold text-center">
              Salt Roasted Chicken  
            </h2>
            <p className="text-center text-red-300">
              Easily add-in a short description about your recipe! This can be
              of any length. Remember, you are trying to sell your recipe!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full"
        >
          <img
            src={pic3}
            className="w-full"
          />
           <div className="absolute top-10 left-0 right-0  w-60">
            <h2 className="text-slate-950 text-4xl font-bold text-center">
              Salt Roasted Chicken
            </h2>
            <p className="text-center text-blue-900">
              Easily add-in a short description about your recipe! This can be
              of any length. Remember, you are trying to sell your recipe!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full"
        >
          <img
            src={pic4}
            className="w-full"
          />
           <div className="absolute top-10 left-0 right-0  w-60">
            <h2 className="text-slate-950 text-4xl font-bold text-center">
            Traditional Spaghetti
            </h2>
            <p className="text-center text-blue-900">
            Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
