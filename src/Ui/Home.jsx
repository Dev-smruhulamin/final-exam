// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Items from "./Items";
import Recipe from "./Recipe";

export default function Home() {
  const [mealLetter, setMealLetter] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItemMeal] = useState([]);
  const [show, setshowMeal] = useState(false);
  const [search, setSearch] = useState([]);
  console.log(search);

  useEffect(() => {
    fetch(mealLetter)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setItemMeal(data.meals);
        setshowMeal(true);
      });
  }, [mealLetter]);

  const setLetter = (alpha) => {
    setMealLetter(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`
    );
  };

  const searchFood = (e) => {
    if (e.key == "Enter") {
      setMealLetter(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
    }
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Your Favourite Item</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            numquam perspiciatis. Sunt tempora aperiam iusto?
          </p>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            placeholder="Search your Meal"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchFood}
          />
        </div>
        <div className="container">
          {show ? <Items data={item} /> : "Not Found"}
        </div>
        <div className="recipeContainer">
          <Recipe alphaLetter={(alpha) => setLetter(alpha)} />
        </div>
      </div>
    </>
  );
}
