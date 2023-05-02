import React, { useEffect, useState } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import Loading from './Loading';
import { FaStar } from 'react-icons/fa';
import Derail from './Derail';

const ChefDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(false);
  //   const navigation = useNavigation()
  //   console.log(navigation.state)
  // if (navigation.state === 'loading') {
  //   return <h1>loading</h1>
  // }
  // const handleFavorite=()=>{
  //   console.log('first')
  //   setDisabledButtons(true)
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
  // ===============================
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
              <p className="py-6">Recipes: {chef.num_recipes}</p>
              <p className="py-6">Experience: {chef.years_of_experience}</p>
              <p className="py-6">Likes: {chef.likes}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-5xl m-11">Chef Best Recipes </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="grid md:grid-cols-3 gap-y-6">
          {recipes.map((recipe) => (
            <Derail recipe={recipe}></Derail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
