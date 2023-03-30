import { Component } from 'react';
import AccordionClass from './AccordionClass';
import PaginationClass from './PaginationClass';

class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1,
        }
    }

    handlePageBtnClick = (page) => {
        this.setState(() => {
            return { page }
        })
    }

    componentDidMount() {
        fetch('https://countriesnow.space/api/v0.1/countries/capital')
          .then(response => response.json())
          .then(result => this.setState((state) => {
            return {data: result.data}
          }))
      }

    render() {
        const data = this.state.data;
        const length = data.length;
        const count = 10;
        const start = (this.state.page - 1) * count;
        const end = start + count;
        const showData = data.slice(start, end);
        
        return (
            <div className = "wrapper">
            <h2>React Accordion - Class Component</h2>
            {
                showData.map((item, index) => {
                    return <AccordionClass key = {index} item = {item} />
            })
            }
            <PaginationClass length = { length } count = { count } handlePageBtnClick = {this.handlePageBtnClick} />
            </div>
        )
    } 
}

export default AppClass;
