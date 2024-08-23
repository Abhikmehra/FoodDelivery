import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../fooditem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list = [] } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2 style={{textAlign:"center",fontWeight:"900"}}>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.length === 0 ? (
          <p>No food items available</p>
        ) : (
          food_list.map((item) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null; // Explicitly return null if the condition isn't met
          })
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
