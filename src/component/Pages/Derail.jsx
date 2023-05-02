import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Derail = ({recipe}) => {
  const [disabledButtons, setDisabledButtons] = useState(false);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
             <ToastContainer />
        <figure><img className='h-52' src={recipe.recipe_img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe.recipe_name}
            
          </h2>
          <p>{recipe.cooking_method}</p>
          <button className="card-actions justify-end">
              {recipe.ingredients.map(ig=> <div className="badge badge-outline bg-yellow-400 border border-none">{ig}</div>  )}
            
          </button>
      <div className='flex items-center gap-3'>
        <span>Rating:{recipe.rating}</span> <FaStar></FaStar>
      </div>
      <button type='button'
        onClick={()=>{
          console.log('first')
          setDisabledButtons(true)
          toast("Your Favorite Added ! ")
        }}
        className="btn gap-2 "
        disabled={disabledButtons}
      
      >
        Favorite
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
        </div>
      </div>
    );
};

export default Derail;