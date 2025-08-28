import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main">
        <input className="email" type="text" placeholder="Enter your email" />
        <input className="password" type="password" placeholder="Enter your password" />
        <button className="login">Log in</button>
        <h5>Forgotten password?</h5>
        <hr />
        <button className="newaccount">Create New Account</button>
    </div>
);
};

export default Main;
