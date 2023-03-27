import { useState } from "react";

export default function Accordion(props) {
    const [flag, setFlag] = useState(false);

    function handleClick() {
        setFlag(!flag);
    }
    
    const { name, capital } = props.data;
    
    return (
    <div className="main">
        <div className="accordion">
        <div className="accordion-item">
            <div className="accordion-title">
            <div className="title">{name}</div>
            <button className="plus" onClick={handleClick}>{flag ? "-" : "+"}</button>
            </div>
            <div className={flag ? "activ" : "accordion-content"}>{capital}</div>
        </div>
        </div>
    </div>
    );
}