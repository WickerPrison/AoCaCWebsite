import {Link} from 'react-router-dom';

function setClassName(setClass){
    sessionStorage.setItem('className', setClass);    
}

export default function ClassList({fieldName, classes}) {
    return (
        <ul className='page-button'>
            <li><h4>{fieldName}</h4></li>
            {classes.map((result) => {
                return <li onClick={() => setClassName(result)} key={result} className="class-link"><Link to="/AoCaCWebsite/TalentTree" className='page-button'>{result}</Link></li>
            })}
        </ul>
    );
}