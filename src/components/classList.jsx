import {Link} from 'react-router-dom';

export default function ClassList({fieldName, classes}) {
    return (
        <ul className='page-button'>
            <li><h4>{fieldName}</h4></li>
            {classes.map((result) => {
                return <li key={result} className="class-link"><Link className='page-button'>{result}</Link></li>
            })}
        </ul>
    );
}