import React from "react";
import classes from "./Basket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Basket = () => {
  return (
    <div className={classes.basket}>
      <FontAwesomeIcon icon={faShoppingBasket} size="1x" color="azure" />
      <p>Your Cart</p>
      <div>0</div>
    </div>
  );
};

export default Basket;
