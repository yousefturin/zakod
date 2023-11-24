import React from "react";
import "../../App.css";
import Footer from "../Footer";
import DecryptionEncryption from "../DecryptionEncryption";

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
        <h1 className="info-display-exeption">Cryptography</h1>
        <DecryptionEncryption />
      </div>
      <Footer />
    </>
  );
}
