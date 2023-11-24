import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Encryption Models!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/image-8.jpg"
                            text="Unlock the past with the Affine Cipher, where numbers and letters combine to create a symphony of secrecy. Decode mysteries, reveal hidden messages, where each letter holds a secret key."
                            lable="Affine Cipher"
                            path="/information/affine"
                        />
                        <CardItem
                            src="images/image-10.jpg"
                            text="Reveal historical mysteries using the Caesar Cipher, a cryptographic marvel where the dance of numbers and letters orchestrates a captivating tune of clandestine communication."
                            lable="Caesar Cipher"
                            path="/information/caesar"
                        />
                        <CardItem
                            src="images/image-16.jpg"
                            text="Dive into the enigmatic world of the Atbash Cipher, where letters take a cryptic detour, revealing hidden messages in plain sight. Uncover the secret language within!"
                            lable="Atbash Cipher"
                            path="/information/atbash"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
