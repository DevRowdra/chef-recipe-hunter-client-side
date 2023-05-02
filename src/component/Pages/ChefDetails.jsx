import React, { useEffect, useState } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import Loading from './Loading';
import { FaStar } from 'react-icons/fa';

const ChefDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  //   const navigation = useNavigation()
  //   console.log(navigation.state)
  // if (navigation.state === 'loading') {
  //   return <h1>loading</h1>
  // }

  useEffect(() => {
    const fetchData = async () => {
      const chefData = await fetch(`http://localhost:3000/chef/${id}`);
      const recipes = await fetch(`http://localhost:3000/chef/recipe/${id}`);

      const data1 = await chefData.json();
      const data2 = await recipes.json();

      setChef(data1);
      setRecipes(data2);
      setLoader(false);
    };

    fetchData();
  }, [id]);
  if (loader) {
    return <Loading></Loading>;
  }
  console.log(chef);
  console.log(recipes);
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={chef.chef_picture}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{chef.chef_name}</h1>
              <p className="py-6">{chef.short_bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-5xl m-11">Chef Best Recipes </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="grid md:grid-cols-3 gap-y-6">

{ recipes.map(recipe=><div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-52' src={recipe.recipe_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {recipe.recipe_name}
      
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        {recipe.ingredients.map(ig=> <div className="badge badge-outline">{ig}</div>  )}
      
    </div>
<div className='flex items-center gap-3'>
  <span>Rating:{recipe.rating}</span> <FaStar></FaStar>
</div>
  </div>
</div> )}





        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
