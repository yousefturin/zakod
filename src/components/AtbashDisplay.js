import React from "react";
import "./Atbash.css";


function AtbashDisplay() {
    return (
        <>
            <div className="atbash-container">
                <p className="atbash-header-text">
                    The Atbash cipher stands as a unique substitution cipher, reliant on a
                    singular key. In this encryption method, each letter undergoes a
                    reversal, with <strong> A transforming into Z </strong> and vice
                    versa—from
                    <strong> Z to A. </strong> Initially designed to encode the Hebrew
                    alphabet, this cipher possesses adaptability, making it amenable to
                    the encoding of various alphabets through modification.
                </p>
                <img
                    className="image-display"
                    src="/images/atbash-cipher-2.png"
                    alt="Atbash Cipher illustration"
                />
                <h2>Encryption</h2>
                <p className="atbash-header-text">
                    To encrypt a message, locate the letter you intend to cipher in the
                    top row and substitute it with the corresponding letter in the bottom
                    row. Let's illustrate this process using the message 'ZAKOD.' Starting
                    with the first letter 'Z,' positioned above 'A,' the initial
                    ciphertext letter is 'A.' Moving forward, the next letter 'A,'
                    situated above 'Z,' follows suit. This pattern continues until the
                    entire message is encrypted as follows:
                </p>
                <div className="atbash-text-box">
                    <p className="atbash-text plainText">ZAKOD</p>
                    <p className="atbash-text cipherText">AZQLW</p>
                </div>
                <h2>Decryption</h2>
                <p>
                    To decrypt a message, identify the letter you wish to decipher in the
                    top row and replace it with the corresponding letter in the bottom
                    row. Let's demonstrate this process using the encrypted message
                    'AZQLW.' Beginning with the first letter 'A,' located above 'Z,' the
                    initial deciphered letter is 'Z.' Advancing, the next letter 'Z,'
                    positioned above 'A,' seamlessly continues the decryption sequence.
                    This pattern persists until the entire message is successfully
                    decrypted, resulting in:
                </p>
                <div className="atbash-text-box">
                    <p className="atbash-text plainText">AZQLW</p>
                    <p className="atbash-text cipherText">ZAKOD</p>
                </div>
                    <h2>Advantages:</h2>
                    <p> Given its nature as an affine cipher with
                    both a = 25 = b, there's no necessity to create distinct functions for
                    encryption and decryption. The same function can be employed for both
                    purposes.
                    </p>
                    <h2>Analysis:</h2>
                    <p> With a single constant key, it stands as
                    the easiest cipher to break, offering minimal security. Anyone can
                    easily infer its atbash nature and decrypt the message by reversing
                    the letters.
                    </p>
            </div>
        </>
    );
}

export default AtbashDisplay;
