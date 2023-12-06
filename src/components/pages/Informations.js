import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";
import IntroDisplay from "../IntroDisplay";

export default function Information() {
    return (
        <>
            <div className="dispaly-container">
            <img 
            className="video-background"
                src={process.env.PUBLIC_URL + "/videos/gif-2.gif"}
                alt="video"
            />
                
                <h1>Blogs</h1>
                <h4>Unlocking Secrets : Delve into the Fascinating World of Cryptography</h4>
                
            </div>
            <IntroDisplay />
            <Cards />
            <Footer />
        </>
    );
}
