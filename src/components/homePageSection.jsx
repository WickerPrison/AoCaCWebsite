import {Link} from 'react-router-dom';

export default function HomePageSection(props) {
    return (
        <section>
            {props.data.map((result) => {
                return <Link className='page-button' key={result.label} href={result.link}><h4>{result.label}</h4></Link>
            })}
        </section>
    );
}