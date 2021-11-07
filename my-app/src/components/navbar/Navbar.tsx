import { AppBar, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "../..";
import { LOGIN_ROUTE } from "../../utils/constants";
import './styles.scss'

export const Navbar = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return (

        <AppBar color={'primary'} position="static">
            <Toolbar >
                {user ?
                    <button onClick={() => auth.signOut()}>выйти</button>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        <p>Not logged in</p>
                    </NavLink >

                }
            </Toolbar>
        </AppBar>

    )
}