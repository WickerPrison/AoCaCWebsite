import './table.css';
import TableEntry from './tableEntry';

export default function Table({tableData, contentData, title, options={}}){
    return (
    <section className="table">
        <h3 className="table-header">{title? title : tableData.title}</h3>
        {tableData.explanation ? <p className="table-explanation">{tableData.explanation}</p> : null}
        {contentData.map((entry, index) => {
            return <TableEntry key={index} tableData={tableData} content={entry} options={options}/>
        })}
    </section>
    )
}