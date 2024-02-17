import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // if(foodItems.length === 0){
  //   return <h5>I am still hungry</h5>
  // }

  // let errorMessage = foodItems.length === 0 ? <h5>I am still hungry</h5> : '';
  return (
    <>
      <h4>Health food</h4>
      {/* <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li>
      </ul> */}
      {/* <ErrorMessage items={foodItems} /> */}
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
