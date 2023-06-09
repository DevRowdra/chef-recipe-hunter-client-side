import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Pages/Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fData = async () => {
      const response = await fetch(
        'https://chef-recipe-hunter-server-side-devrowdra.vercel.app/chef/'
      );
      const data = await response.json();
      setChefs(data);
      setLoader(false);
    };
    fData();
  }, []);
  console.log(chefs);
  if (loader) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-5xl m-11">Best Chef </h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid md:grid-cols-3 gap-y-6">
        {/* ======================================== */}

        {chefs.map((chef) => (
          <div className="card w-96 bg-red-100 shadow-xl">
            <figure>
              <LazyLoadImage
                src={chef.chef_picture}
                alt="chef"
                effect="blur"
                className="h-48 mt-3 "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chef.chef_name}</h2>
              <p>Experience: {chef.years_of_experience}yer</p>
              <p>Recipes: {chef.num_recipes}</p>
              <p>Likes:{chef.likes}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <Link to={`chef/${chef.chef_id}`}>View Recipes</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
