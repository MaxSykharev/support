import { Button } from "@mui/material";
import firebase from "firebase";
import React, { useContext } from "react";
import { Context } from "../..";
import './styles.scss'

export const Login = () => {
    const { auth } = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
    }
    return (
        <div className='container'>
            <Button onClick={login} variant="contained" disableElevation>

                войти через Google
            </Button>
        </div>
    )
}