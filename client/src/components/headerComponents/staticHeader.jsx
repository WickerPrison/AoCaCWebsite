import {Link} from 'react-router-dom';
import SignInButton from './signInButton';

const styles={
    staticHeader:{
        position: "absolute",
    }
}

export default function StaticHeader() {
    return (
        <header style={styles.staticHeader}>
            <h1><Link id="HomeButton" to="/">Age of Conquest and Calamity</Link></h1>
            <SignInButton></SignInButton>
        </header>
    );
  }