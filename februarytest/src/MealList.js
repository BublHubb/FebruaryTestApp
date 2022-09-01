import React, { useState, useEffect } from "react";
import "./MealList.css";
import MealData from "./Data";
import Sidebar from "./Sidebar";

export default function MealList(props) {
  //Managing State
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  //Use Effect Hooks
  useEffect(() => {
    setData(MealData);
  }, []);

  // Order Update
  const updateOrder = (meal) => {
    let newArray = basket;

    const foundMeal = newArray.find((item) => {
      return item.key == meal.key;
    });
    if (!foundMeal) {
      newArray.push(meal);
      setBasket(newArray);
      console.log(newArray);
    } else {
      newArray.map((item) => {
        if (item.key == foundMeal.key) {
          newArray.push({ ...item, quantity: foundMeal.quantity + 1 });
          setBasket(newArray);
          console.log(newArray);
        }
        // newArray.push({ ...newArray, quantity: foundMeal.quantity + 1 });
        // setBasket(newArray);
        // console.log(newArray);
      });
    }
  };

  return (
    <>
      <div className="meallist">
        {data.map((meal) => {
          return (
            <div className="mealitem" key={meal.key}>
              <img src={meal.img} alt="" />
              <div className="mealitemtext">
                <h3>{meal.foodName}</h3>
                <div className="mealitemtextinfo">
                  <p>{meal.rating} stars</p>
                  <p>-</p>
                  <p>{meal.foodStyle}</p>
                  <p>-</p>
                  <p>{meal.foodType}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  updateOrder(meal);
                }}
              >
                Add to order
              </button>
            </div>
          );
        })}
      </div>
      <Sidebar data={basket} />
    </>
  );
}
