import StaticHeader from "../../components/headerComponents/staticHeader";
import {useState, useEffect} from 'react';
import Auth from '../../utils/auth';
import './login.css';

export default function Login(){
    const [signUp, setSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Submit = async (evt) => {
        evt.preventDefault();

        if(signUp){
            const response = await fetch('http://localhost:3001/api/Users', {
                method: 'POST',
                url: 'http://localhost:3001/api/Users',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            })

            if(response.ok){
                const token = await response.json();
                Auth.login(token);
            }
            else{
                alert(response.statusText);
            }
        }
        else{
            const response = await fetch('http://localhost:3001/api/Users/Login', {
                method: 'POST',
                url: 'http://localhost:3001/api/Users/Login',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            if(response.ok){
                const token = await response.json();
                console.log(token);
                if(token == "Auth Error"){
                    alert("Incorrect username or password");
                    return;
                }
                Auth.login(token);
            }
            else{
                alert(response.statusText);
            }
        }
    }

    return (
        <main id="login">
            <StaticHeader></StaticHeader>
            <form className="box card" onSubmit={evt => Submit(evt)}>
                <div className="box-header">{signUp ? "Sign Up" : "Log In"}</div>
                {signUp ? 
                <div className="login-field">
                    <label>Email: </label>
                    <input type="text" value={email} onChange={evt => setEmail(evt.target.value)}></input>
                </div>
                :null}
                <div className="login-field">
                    <label>Username: </label>
                    <input type="text" value={username} onChange={evt => setUsername(evt.target.value)}></input>
                </div>
                <div className="login-field">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={evt => setPassword(evt.target.value)}></input>
                </div>
                <button className="small-button">{signUp ? "Sign Up" : "Log In"}</button>
                {signUp ?
                <p>Already have an account? Log in <span onClick={() => setSignUp(!signUp)} className="sign-up">here</span></p>
                :<p>Don't have an account yet? Sign up <span onClick={() => setSignUp(!signUp)} className="sign-up">here</span></p>
                }
            </form>
        </main>
    )
}