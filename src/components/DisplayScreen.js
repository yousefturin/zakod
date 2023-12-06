import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./DisplayScreen.css";
import { Link } from "react-router-dom";

function DisplayScreen() {
    return (
        <div className="dispaly-container">
            <img 
            className="video-background"
                src={process.env.PUBLIC_URL + "/videos/gif-1.gif"}
                alt="video"
            />
            <h1> Cryptography</h1>
            <p>Secure your messages!</p>
            <div className="display-btns">
                <Link to="/cryptography" className="btn-mobile">
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        GET STARTED
                    </Button>
                </Link>
                <Link to="/information" className="btn-mobile">
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                    >
                        READ MORE
                        <i class="far fa-arrow-alt-circle-right" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default DisplayScreen;
