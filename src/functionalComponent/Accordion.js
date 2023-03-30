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
            <div className="accordion-title" onClick={handleClick}>
            <div className="title">{name}</div>
            <button className="plus">{flag ? "X" : "|||"}</button>
            </div>
            <div className={flag ? "active" : "accordion-content"}>{capital}</div>
        </div>
        </div>
    </div>
    );
}