import { useState } from "react";
import Buton from "../components/button";
import Imagge from "../components/imagge";
import "../styles/counter.css";

const Counter = () => {
    const [, setCount] = useState(<Imagge />);

    const scaleUp = () => {
        setCount({ width: "120%", height: "auto" });
    };

    const scaleDown = () => {
        setCount({ width: "80%", height: "auto" });
    };
    return (
        <div className="counter-container">
            <Buton clickHandler={scaleUp}>ScaleUp</Buton>
            <Buton clickHandler={scaleDown}>ScaleDown</Buton>
        </div>
    );
}

export default Counter;