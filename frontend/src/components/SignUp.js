import React from "react"

export const SignUp = () => {
    return(
        <div className="signup-panel">
            <form className="signup-form">
            <h1>Sign Up</h1>
            <div className="login-caption">New here? Create an account below!</div>
            <input type="text" placeholder="Username" name="username"/>
                <br></br>
                <input type="password" placeholder="Password" name="password"/>
                <br></br>
                <input type="password" placeholder="Email Address" name="email"/>
                <br></br>
                <input type="password" placeholder="Location" name="location"/>
                <br></br>
                <button className="signup-btn">Sign Up</button>
            </form>
        </div>
    )
}
