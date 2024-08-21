import {Link} from 'react-router-dom';
import auth from '../../utils/auth';

export default function HomePageSection(props) {
    return (
        <section>
            {props.data.map((result) => {
                return (!result.loggedIn || result.loggedIn && auth.loggedIn()
                    ?  <Link to={result.link} className='page-button' key={result.label} href={result.link}><h4>{result.label}</h4></Link>
                    : <Link to={'Login'} className='page-button' key={result.label} href={'Login'}><h4>{result.label}</h4></Link>)
            })}
        </section>
    );
}