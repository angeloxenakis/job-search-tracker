import React from "react"
import { Login } from "./Login"
import { SignUp } from "./SignUp"
import "../styles/Auth.css"

export const Auth = () => {
    return(
        <div className="auth-page">
            <div className="auth-container">
                <Login />
                <SignUp />
            </div>
        </div>
    )
}