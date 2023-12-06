import React from "react";
import "../../App.css";
import Footer from "../Footer";
import DecryptionEncryption from "../DecryptionEncryption";

export default function Cryptography() {
  return (
    <>
      <div className="dispaly-container">
      <img 
            className="video-background"
                src={process.env.PUBLIC_URL + "/videos/gif-3.gif"}
                alt="video"
            />
        <h1 className="info-display-exeption">Cryptography</h1>
        <DecryptionEncryption />
      </div>
      <Footer />
    </>
  );
}
