export default function Pagination(props) {
    const { length, count, handlePageBtnClick } = props;
    const pageCount = Math.ceil(length / count);
    const pageArray = Array.from({length: pageCount}, (_, index) => index + 1)
   
    return (
        <div>
            {
                pageArray.map((item, index) => {
                    return <button key = {index} name = {item} onClick = {(event) => handlePageBtnClick(event.target.name)}>{item}</button>
                })
            }
        </div>
    )
}