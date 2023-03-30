import { Component } from 'react';

class AccordionClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState((state) => {
        return {isOpen: !state.isOpen}
    })
  };

  render() {
    const { isOpen } = this.state;
    const { name, capital } = this.props.item;
    
    return (
        <div className="main">
        <div className="accordion">
        <div className="accordion-item">
            <div className="accordion-title" onClick={this.handleClick}>
            <div className="title">{name}</div>
            <button className="plus">{isOpen ? "X" : "|||"}</button>
            </div>
            <div className={isOpen ? "active" : "accordion-content"}>{capital}</div>
        </div>
        </div>
    </div>
    );
  }
}

export default AccordionClass;