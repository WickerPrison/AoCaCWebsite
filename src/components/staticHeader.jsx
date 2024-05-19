import {Link} from 'react-router-dom';

const styles={
    staticHeader:{
        position: "absolute",
    }
}

export default function StaticHeader() {
    return (
        <header style={styles.staticHeader}>
            <h1><Link id="HomeButton" to="/AoCaCWebsite">Age of Conquest and Calamity</Link></h1>
        </header>
    );
  }