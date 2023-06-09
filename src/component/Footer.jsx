import React from 'react';

const Footer = () => {
  return (
    <footer className=" p-10  bg-slate-400">
      <div>
        <div>
          <span className="footer-title text-white">
            Connect with us for update and offers.
          </span>
          <div className="form-control w-80">
            <div className="relative mt-5">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 "
              />
              <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 " />
      {/* ====================gmail======================= */}
      <div className="footer">
        <div>
          <span className="footer-title">BongDine</span>
          <p>
          Discover mouth-watering recipes for every occasion on our  <br />{' '}food recipe website. Our team of chefs and food bloggers <br />{' '} curate easy-to-follow recipes with step-by-step <br />{' '}instructions and nutritional information. Whether <br />{' '}you're a novice cook or an experienced home chef, we <br />{' '}have something for everyone. Start exploring our <br />{' '}collection of recipes today and create lasting <br />{' '}memories with your loved ones.<br />{' '}
            
          </p>
        </div>
        <div>
          <span className="footer-title">About</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Developers</a>
          <a className="link link-hover">Mobile Apps</a>
        </div>
        <div>
          <span className="footer-title">Business</span>
          <a className="link link-hover">Add a Restaurant</a>
          <a className="link link-hover">Buniess Order Guidelines</a>
          <a className="link link-hover">Orders</a>
          <a className="link link-hover">Book</a>
          <a className="link link-hover">Trace</a>
          <a className="link link-hover">Advertise</a>
        </div>
        <div>
          <span className="footer-title">Partner With Us</span>
          <a className="link link-hover">For Restaurants</a>
          <a className="link link-hover">For Driver</a>
          <a className="link link-hover">Cookie policy</a>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4 ">
              <a className="bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-black"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center mt-5">
          Copyright © 2023 - All right reserved by{' '}
          <span className="bg-yellow-500 p-1 rounded-lg">BongDine</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
