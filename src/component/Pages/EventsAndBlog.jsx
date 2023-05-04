import React, { useContext } from 'react';
import img1 from '../../assets/eventsandBlog pic/blog1.jpg';
import img2 from '../../assets/eventsandBlog pic/blog2.jpg';
import img3 from '../../assets/eventsandBlog pic/blog3.jpg';
import { FaCalendarAlt } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
const EventsAndBlog = () => {
 
  return (
    <div className="my-32">
     
      <div>
        <h1 className="text-2xl text-center text-orange-400 " style={{fontFamily:'monospace'}}>
          The Latest News
        </h1>
        <h1 className="text-center text-5xl mt-7">Our  Events</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 border  p-14">
        <div>
          <img
            src={img1}
            alt=""
          />
          <div className="flex items-center gap-3 my-7">
            <FaCalendarAlt></FaCalendarAlt> <span>May 12, 2020</span>
          </div>

          <h3
            className="my-5 text-2xl
          "
          >
            Japanese Horseradish : True Fact About Ramen
          </h3>
          <p className="text-slate-400">
          Japanese horseradish, also known as "wasabi," is a commonly used condiment in Japanese cuisine, including ramen. Wasabi has a strong, pungent flavor and is often served with sushi, sashimi, and other Japanese dishes.

However, it is important to note that many of the "wasabi" products sold in the United States...
          </p>
        </div>
        <div>
          <img
            src={img2}
            alt=""
          />{' '}
          <div className="flex items-center gap-3 my-7">
            <FaCalendarAlt></FaCalendarAlt> <span>April 12, 2023</span>
          </div>
          <h3
            className="my-5 text-2xl
          "
          >
            8 Way to Adjust Your Nutrition for The Season
          </h3>
          <p className="text-slate-400">
            Eat Seasonal Foods: Eating foods that are in season can be a great
            way to get the nutrients your body needs during a particular time of
            year. Stay Hydrated: It's important to drink plenty of fluids,
            especially during the hot summer months. Drinking water, coconut
            water, herbal tea, and fresh juice can help you stay hydrated...
          </p>
        </div>
        <div>
          <img
            src={img3}
            alt=""
          />
          <div className="flex items-center gap-3 my-7">
            <FaCalendarAlt></FaCalendarAlt> <span>April 12, 2022</span>
          </div>

          <h3
            className="my-5 text-2xl
          "
          >
            How to Cook Ramen : 7 Step (with Pictures)
          </h3>
          <p className="text-slate-400">
            For this recipe, you will need Ramen noodles, broth or bouillon,
            vegetables (optional), meat or protein (optional), and toppings
            (optional).Fill a pot with water and bring it to a boil.Add the
            Ramen noodles to the boiling water and stir to prevent them from
            sticking together. Cook the noodles for 2-3 minutes or until they
            are tender...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsAndBlog;
