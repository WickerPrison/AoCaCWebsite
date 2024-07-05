import "./signInButton.css";
import Auth from "../../utils/auth";
import {Link} from 'react-router-dom';

export default function SignInButton(){
    
    if(Auth.loggedIn()){
        return (
            <h1 id="sign-in-button">Log Out</h1>
        )
    }
    else{
        return(
            <h1><Link id="login-button" to="/">Login/Sign Up</Link></h1>
        )
    }
}