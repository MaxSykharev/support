import firebase from "firebase";
import React, { useContext } from "react";
import { Context } from "..";

export const Login = () => {
    const { auth } = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
    }
    return (
        <div>

            <button onClick={login}>войти через Google</button>
        </div>
    )
}