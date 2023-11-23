import React from "react";
import "./Caesar.css";

function CaesarDisplay() {
    return (
        <>
            <div className="caesar-container">
                <p className="caesar-header-text">
                    The Caesar cipher, a straightforward encryption method employed by
                    <strong> Julius Caesar </strong> to communicate covertly with allies,
                    stands as a testament to ancient cryptographic ingenuity. Its
                    operation involves shifting the letters in the plaintext message by a
                    specified number of positions, often referred to as the{" "}
                    <strong> "shift" </strong> or <strong> "key." </strong>
                </p>
                <p className="caesar-header-text">
                    This technique represents one of the earliest and most uncomplicated
                    forms of encryption. Essentially, it functions as{" "}
                    <strong> a substitution cipher,</strong> where each letter in the
                    original text is replaced by another letter located a fixed number of
                    positions down the alphabet. For instance, with a shift of 1,
                    <strong> A transforms into B, B becomes C,</strong> and so forth. The
                    method derives its name from <strong> Julius Caesar, </strong> who is
                    believed to have utilized it for confidential communication with his
                    officials.
                </p>
                <p className="caesar-header-text">
                    To cipher a given text using this method, an integral aspect is an
                    integer value known as the shift, indicating the number of positions
                    each letter in the text has been shifted downward.
                </p>
                <p className="caesar-header-text">
                    Representing encryption through modular arithmetic involves an initial
                    conversion of letters to numerical values based on the scheme: A = 0,
                    B = 1, ..., Z = 25. The mathematical description of encrypting a
                    letter with a shift of n is encapsulated by modular arithmetic.
                    <br />
                    For instance, with a shift of 3, the transformation unfolds as
                    follows:
                    <strong> A becomes D, B turns into E, C evolves into F,</strong> and
                    so forth. It's noteworthy that the alphabet wraps around, creating a
                    cyclical pattern. Beyond Z, the sequence recommences from A, ensuring
                    a continuous and coherent encryption process.
                </p>
                <img
                    className="image-display"
                    src="/images/caesar-cipher-1.png"
                    alt="Caesar Cipher illustration"
                />
                <h2>Encryption</h2>
                <p>
                    The Caesar cipher is a simple and classic encryption technique that
                    involves shifting the letters of the alphabet by a fixed amount. Here
                    is an example illustrating the application of the Caesar cipher for
                    encrypting the message <strong>"ZAKOD"</strong> with a{" "}
                    <strong> shift of 3 </strong>:
                </p>
                <ol>
                    <li>Start with the plaintext message: ZAKOD.</li>
                    <li>
                        Select a shift value; in this instance, we'll employ a shift of 3.
                    </li>
                    <li>
                        Substitute each letter in the plaintext message with the letter
                        positioned three places to the right in the alphabet:
                        <ul class="caesar-text-no-bullets">
                            <li>Z becomes C (shift 3 from Z)</li>
                            <li>A becomes D (shift 3 from A)</li>
                            <li>K becomes N (shift 3 from K)</li>
                            <li>O becomes R (shift 3 from O)</li>
                            <li>D becomes G (shift 3 from D)</li>
                        </ul>
                    </li>
                </ol>

                <p style={{ alignSelf: "flex-start" }}>
                    The resulting encrypted message is now <strong> "CDNRG." </strong>
                </p>

                <div className="caesar-text-box">
                    <p className="caesar-text plainText">
                        Plain :  ZAKOD{" "}
                    </p>
                    <p className="caesar-text plainText">
                        Key :  3
                    </p>
                    <p className="caesar-text cipherText">
                        Cipher :CDNRG
                    </p>
                </div>
                <h2>Decryption</h2>
                <p>
                    To decrypt a message encrypted using the Caesar cipher, the process is
                    straightforward. You reverse the encryption by shifting each letter
                    back by the same number of positions used for encryption. In this
                    specific example, where the message 'CDNRG' was encrypted with a
                    forward shift of 3, the decryption involves shifting each letter in
                    'CDNRG' backward by 3 positions. This returns the original message,
                    'ZAKOD.' resulting in:
                </p>
                <div className="caesar-text-box">
                    <p className="caesar-text cipherText">
                        Cipher : CDNRG
                    </p>
                    <p className="caesar-text plainText">
                        Key :  3
                    </p>
                    <p className="caesar-text plainText">
                        Plain : ZAKOD{" "}
                    </p>
                </div>

                <h2>Advantages:</h2>
                <ul>
                    <li>
                        <strong>Simple Implementation:</strong> Easy to implement and use,
                        making it suitable for beginners to learn about encryption.
                    </li>
                    <li>
                        <strong>Physical Implementation:</strong> Can be physically
                        implemented, for example, with a set of rotating disks or a set of
                        cards, known as a scytale, which can be useful in certain
                        situations.
                    </li>
                    <li>
                        <strong>Minimal Pre-shared Information:</strong> Requires only a
                        small set of pre-shared information.
                    </li>
                    <li>
                        <strong>Customizable Security:</strong> Can be modified easily to
                        create a more secure variant, such as by using multiple shift values
                        or keywords.
                    </li>
                </ul>

                <h2>Disadvantages:</h2>
                <ul>
                    <li>
                        <strong>Not secure against modern decryption methods:</strong> It
                        lacks protection against advanced decryption techniques, making it
                        unsuitable for secure communication.
                    </li>
                    <li>
                        <strong>Vulnerable to known-plaintext attacks:</strong> Attackers
                        can exploit situations where both the encrypted and unencrypted
                        versions of messages are accessible.
                    </li>
                    <li>
                        <strong>Prone to brute force attacks:</strong> The limited number of
                        possible keys makes it susceptible to attackers trying all
                        combinations until finding the correct one.
                    </li>
                    <li>
                        <strong>Not suitable for long text encryption:</strong> Due to its
                        vulnerability, it's not recommended for encrypting extensive text as
                        it could be easily cracked.
                    </li>
                    <li>
                        <strong>Not suitable for secure communication:</strong> Its
                        susceptibility makes it inappropriate for ensuring secure
                        communication.
                    </li>
                    <li>
                        <strong>Does not provide complete security:</strong> It lacks the
                        ability to ensure confidentiality, integrity, and authenticity in a
                        message.
                    </li>
                </ul>
            </div>
        </>
    );
}
export default CaesarDisplay;
