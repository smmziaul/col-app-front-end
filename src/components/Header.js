import React from 'react'

const Header = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center",

    };

    return (
        <header style={mystyle}>
            <h1>
                Col-App, a College-Finder App
            </h1>
        </header>
    )
}

export default Header
