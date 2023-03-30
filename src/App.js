import { useState } from 'react';
import AppFunctional from './functionalComponent/AppFunctional';
import AppClass from './classComponent/AppClass';


function App() {
  const [firstToggle, setFirstToggle]= useState(false);
  const [secondToggle, setSecondToggle]= useState(false);

  function handleClick(event) {
    if(event.target.name === "first") {
      setFirstToggle(!firstToggle);
    } else {
      setSecondToggle(!secondToggle);
    }
  }

    return (
      <div className="main">
        <h1>React Accordion</h1>
        <div className="accordion">
        <div className={secondToggle ? "accordion-content" : "accordion-item"}>
            <div className="accordion-title">
            <div className="title">Functional Component</div>
            <button className="plus" onClick={handleClick} name = "first">{firstToggle ? "X" : "|||"}</button>
            </div>
            <div className={firstToggle ? "active" : "accordion-content"}><AppFunctional /></div>
        </div>
        <div className={firstToggle ? "accordion-content" : "accordion-item"}>
            <div className="accordion-title">
            <div className="title">Class Component</div>
            <button className="plus" onClick={handleClick} name = "second">{secondToggle ? "X" : "|||"}</button>
            </div>
            <div className={secondToggle ? "active" : "accordion-content"}><AppClass /></div>
        </div>
        </div>
    </div>
  )
}

export default App;
