import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase"; 


function Login() {
  const history = useHistory();
const [email, setEmail]  = useState('');
const [password, setPassword] = useState('');

const signIn = e => {
  e.preventDefault()

  //some fancy firebase login profiles 
auth.signInWithEmailAndPassword(email, password).then(auth => {
  history.push('/')
})
.catch(error => alert(error.message))
}

const register = e => {
e.preventDefault();

//Do some fany firebase register profiles

auth.createUserWithEmailAndPassword(email, password).then((auth) => {
  // it successfully created a new user with email and password
  console.log(auth);
  if (auth) {
    history.push('/')
  }
})
.catch(error => alert(error.message))
}


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input type="text" value= {email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value= {password} onChange={e => setPassword(e.target.value)}/>

          <button type= 'submit' onClick={signIn} className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing in you agree to amazon condition of use and sale.Please see
          our privacy notice, our cookies notice and our interest based ad
          notice.
        </p>

        <button onClick= {register} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
