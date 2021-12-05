import React from "react";
import Basket from "./Basket";

import classes from './MainHeader.module.css';

const MainHeader = () =>{
    return(
        <header className={classes["main-header"]}>
            <h1>ReactMeals</h1>
            <Basket />
        </header>
    );
}

export default MainHeader;