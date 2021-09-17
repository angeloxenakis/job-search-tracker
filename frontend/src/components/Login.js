import React from "react"

export const Login = () => {
    return(
        <div className="login-panel">
            <form className="login-form">
                <h1>Login</h1>
                <div className="login-caption">Enter your username and password below to login.</div>
                <input type="text" placeholder="Username" name="username"/>
                <br></br>
                <input type="password" placeholder="Password" name="password"/>
                <br></br>
                <button className="login-btn">Login</button>
            </form>
        </div>
    )
}
