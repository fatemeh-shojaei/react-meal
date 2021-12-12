import React from "react";
import classes from "./Basket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Basket = () => {
  return (
    <div className={classes.basket}>
      <FontAwesomeIcon  icon={faShoppingBasket} className={classes["font-icon"]} size="1x" color="azure" />
      <p>Your Cart</p>
      <div className={classes.counter}>0</div>
    </div>
  );
};

export default Basket;
