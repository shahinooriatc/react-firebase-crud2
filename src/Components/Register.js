import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const handleRegister = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL:phone
                }).then(() => {
                    setLoggedInUser(user);
                    setDisplayName(user.user.displayName)
                    setUserPhone(user.user.photoURL)
                    
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div>
            <h2>{displayName}/{userPhone}</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} name='name' placeholder="Name" /> <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Email" /><br />
            <input type="phone" onChange={(e) => setPhone(e.target.value)} name='phone' placeholder="Phone" /><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' placeholder="Password" /><br />
            <button onClick={() => handleRegister()}>Register</button>

        </div>
    );
};

export default Register;