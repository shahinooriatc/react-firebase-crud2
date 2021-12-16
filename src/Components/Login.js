import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');



    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(data => {
                // Signed in 
                const user = data.user;
                setLoggedInUser(user)
                // ...
              
                console.log(user.displayName);
                console.log(loggedInUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    return (
        <>

            <div>
                <h2>{loggedInUser.displayName}/{loggedInUser.photoURL}</h2>
                <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Email" /><br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' placeholder="Password" /><br />
                <button className='disabled' onClick={() => handleLogin()}>Login</button>

            </div>
        </>
    );
};

export default Login;