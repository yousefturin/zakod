import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Cryptography() {
    return (
        <>
            <div className="dispaly-container">
                <video
                    src={process.env.PUBLIC_URL + "/videos/video-4.mp4"}
                    autoPlay
                    loop
                    muted
                />
                <h1>Cryptography</h1>
            </div>
            <Footer />
        </>
    );
}
