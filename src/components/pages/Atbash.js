import React from "react";
import "../../App.css";
import Footer from "../Footer";
import AtbashDisplay from "../AtbashDisplay";

export default function Atbash() {
    return (
        <>
            <h1 className="atbash">Atbash</h1>
            <AtbashDisplay />
            <Footer />
        </>
    );
}
