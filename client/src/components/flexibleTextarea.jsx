

export default function FlexibleTextarea({input, setOutput, classNames}){
    function adjustSize(e){
        e.target.style.height = 'inherit';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    return(
        <textarea className={`large-text-input ${classNames}`} value={input} onChange={e => {setOutput(e.target.value); adjustSize(e)}}></textarea>
    )
}