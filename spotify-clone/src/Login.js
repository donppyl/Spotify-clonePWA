import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
            <img
                src="https://static.diffen.com/uploadz/5/5c/spotify.jpg"
                alt=""
            />
            <a href={accessUrl}>LOGIN TO SPOTIFY</a>
        </div>
    );
}

export default Login;