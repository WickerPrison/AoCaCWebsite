import './table.css';
import TableEntry from './tableEntry';

export default function Table({tableData, contentData, title}){
    return (
    <section className="table">
        <h3 className="table-header">{title? title : tableData.title}</h3>
        {tableData.explanation ? <p class="table-explanation">{tableData.explanation}</p> : null}
        {contentData.map((entry) => {
            return <TableEntry key={entry.Name} tableData={tableData} content={entry}/>
        })}
    </section>
    )
}