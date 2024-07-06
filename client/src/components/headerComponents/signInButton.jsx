import "./signInButton.css";
import Auth from "../../utils/auth";
import {Link} from 'react-router-dom';

export default function SignInButton(){
    
    if(Auth.loggedIn()){
        return (
            <h1 id="login-button" onClick={Auth.logout}>Log Out</h1>
        )
    }
    else{
        return(
            <h1><Link id="login-button" to="/Login">Login/Sign Up</Link></h1>
        )
    }
}