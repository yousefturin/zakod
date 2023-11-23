import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";
import IntroDisplay from "../IntroDisplay";

export default function Information() {
    return (
        <>
            <div className="dispaly-container">
                <video
                    src={process.env.PUBLIC_URL + "/videos/video-3.mp4"}
                    autoPlay
                    loop
                    muted
                />
                <h1>Blogs</h1>
            </div>
            <IntroDisplay />
            <Cards />
            <Footer />
        </>
    );
}
