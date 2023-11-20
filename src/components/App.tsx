import React from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import Png from '../assets/1.png';
import Jpg from '../assets/2.jpg';
import Chicken from '../assets/3.svg';

function TODO(a:number) {
    console.log('TODO');
}

export const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    // TODO('test');

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>Desktop</div>
    // }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>Mobile</div>
    // }

    return (
        <div>
            <img width={100} height={100} src={Png} alt="" />
            <img width={100} height={100} src={Jpg} alt=""/>
            <Chicken width={50} height={50}/>
            <Link to={"/about"}>About</Link>
            <Link to={"/shop"}>Shop</Link>
            <h1>{count}</h1>
            <div>
                <button className={classes.button} onClick={increment}>
                    +
                </button>
                <button className={classes.button} onClick={decrement}>
                    -
                </button>
            </div>
            <Outlet />
        </div>
    );
};
