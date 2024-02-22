// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Items({ data }) {
  console.log(data);

  let navigate = useNavigate();

  return (
    <>
      {!data
        ? "Not Found"
        // eslint-disable-next-line react/prop-types
        : data.map((item) => {
            return (
              <div
                className="card"
                key={item.idMeal}
                onClick={() => {
                  navigate(`/${item.idMeal}`);
                }}
              >
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
              </div>
            );
          })}
    </>
  );
}
