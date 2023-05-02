import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="m-5">
      <div className="text-center">
        <h1 className="text-2xl text-amber-400">Choose a Category</h1>
        <h1 className="text-6xl font-medium">Recipe Categories</h1>
      </div>
      <div className="grid md:grid-cols-5 mt-10">
        {data.map((ct) => (
          <div className="text-center">
            <div className="avatar hover:animate-[wiggle_1s_ease-in-out_infinite]">
              <div className="w-40 rounded-full">
                <img src={ct.image} />
              </div>
            </div>
            <h3 className="text-xl font-medium mt-3">{ct.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
