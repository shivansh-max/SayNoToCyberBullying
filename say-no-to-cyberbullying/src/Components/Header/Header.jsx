import React from "react";
import Logo from "./../../Assests/LOGO.png";

export default function Header({ sHG, hg }) {
    const switchOp = () => {
        console.log("called");
        sHG(!hg);
    };

    return (
        <>
            <div className="center">
                <img className="LOGO" src={Logo} alt="" />
                <div className="Header">
                    <div className="title ">
                        
                        <h1>Say No 2 Cyber Bullying</h1>
                    </div>
                    <div className="Options">
                        <button onClick={switchOp}>
                            <h1 className="Option">{!hg ? "Home" : "Games"}</h1>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}
