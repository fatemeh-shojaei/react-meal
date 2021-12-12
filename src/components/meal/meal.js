import React from "react";
import Card from "../UI/Card/Card";
import classes from './meal.module.css'

const Meal = () => {
  return <Card className={classes.meal}>
      <h2>
          Delicious Food, Delivered To You
      </h2>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious</p>
      <p>lunch or dinner at home.</p>
      <p>all our meals are cooked with high-guality ingredients, just-in-time and of course by</p>
      <p>experienced chefs</p>
  </Card>;
};

export default Meal;
