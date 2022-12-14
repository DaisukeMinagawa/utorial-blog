import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'


const Login = () => {
    const loginInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
        })
    }

    return (
        <div>
            <p>Login</p>
            <button onClick={loginInWithGoogle}>Login with Google</button>
        </div>
    )
}

export default Login