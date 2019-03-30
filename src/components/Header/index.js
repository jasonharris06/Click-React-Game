import React from "react";
import "./style.css";

const Header = (props) =>{
    return <h1 className="score">Score: {props.score} Highscore: {props.highscore}</h1>;
}

export default Header