import { Component } from "react";

class PaginationClass extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
   
    render() {
        const { length, count, handlePageBtnClick } = this.props;
        const pageCount = Math.ceil(length / count);
        const pageArray = Array.from({length: pageCount}, (_, index) => index + 1)
        return (
            <div className = "pagination">
                {
                    pageArray.map((item, index) => {
                        return <button key = {index} name = {item} onClick = {(event) => handlePageBtnClick(event.target.name)}>{item}</button>
                    })
                }
            </div>
        )
    }
}

export default PaginationClass;