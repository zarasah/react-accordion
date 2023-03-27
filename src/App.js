import Accordion from './functionalComponent/Accordion';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';

function App() {
  const URL = 'https://countriesnow.space/api/v0.1/countries/capital';
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setData(data.data))
  }, [])
  
  function handlePageBtnClick(page) {
    setPage(page)
  }
  const length = data.length;
  const count = 10;
  const start = (page - 1) * count;
  const end = start + count;
  
  const showData = data.slice(start, end)

  return (
    <div>
      <h1>React Accordion Demo</h1>
      {
        showData.map((item, index) => {
          return <Accordion key = {index} data = {item} />
        })
      }
      <div className = "pagination">
      <Pagination length = { length } count = { count } handlePageBtnClick = {handlePageBtnClick} />
      </div>
    </div>
  )
}

export default App;
