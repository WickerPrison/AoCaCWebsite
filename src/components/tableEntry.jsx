export default function TableEntry({tableData, content}){
    return (
    <div className="table-entry">
        <div className="table-label">{content.Name}</div>
        <div className="column-1">
            {tableData.column1.map((property, index) => {
                return <p key={index}><strong>{property}: </strong>{content[property]}</p>
            })}
        </div>
        {tableData.column2 ?(
        <div className="column-2">
        {tableData.column2.map((property, index) => {
                return <p key={index}><strong>{property}: </strong>{content[property]}</p>
            })}
        </div>
        ): null}
        <div className="table-description">{tableData.description ? content[tableData.description] : content.Description}</div>
    </div>
    )
}