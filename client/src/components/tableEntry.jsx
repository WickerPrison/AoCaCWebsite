export default function TableEntry({tableData, content, options = {}}){
    return (
        <div className="table-entry">
            <div className="table-label" style={options.nameBasis ? {flexBasis: options.nameBasis}:null}>{content.Name}</div>
            {tableData.column1 ? (
            <div className="column column-1">
                {tableData.column1.map((property, index) => {
                    return <p key={index}><strong>{property}: </strong>{content[property]}</p>
                })}
            </div>
            ):null}
            {tableData.column2 ?(
            <div className="column column-2" style={options.column2Basis ? {flexBasis: options.column2Basis}: null}>
                {tableData.column2.map((property, index) => {
                    return <p key={index}><strong>{property}: </strong>{content[property]}</p>
                })}
            </div>
            ): null}
            <div className="table-description">{tableData.description ? content[tableData.description] : content.Description}</div>
        </div>
    )
}