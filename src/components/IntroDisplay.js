import React from "react";
import "./IntroDisplay.css";

function IntroDisplay() {
    return (
        <>
            <div className="intro-container">
                <h2>What Is Cryptography?</h2>
                <p className="header-text-">
                    Cryptography is the practice and study of techniques for securing
                    communication and data in the presence of adversaries.
                </p>
                <img
                    className="image-display"
                    src="/images/encryption-meaning-what-is-cryptography-zakod.png"
                    alt="Encryption Meaning illustration"
                />
                <p>
                    Alright, now that you know ” what is cryptography ” let’s see how
                    cryptography can help secure the connection between Andy and Sam.
                </p>
                <p>
                    So, to protect his message, Andy first convert his readable message to
                    unreadable form. Here, he converts the message to some random numbers.
                    After that, he uses a key to encrypt his message, in Cryptography, we
                    call this ciphertext.{" "}
                </p>
                <p>
                    Andy sends this ciphertext or encrypted message over the communication
                    channel, he won’t have to worry about somebody in the middle of
                    discovering his private messages. Suppose, Eaves here discover the
                    message and he somehow manages to alter it before it reaches Sam.
                </p>
                <img
                    className="image-display"
                    src="/images/sending-message-over-network-what-is-cryptography-zakod-1.png"
                    alt="Encryption Meaning illustration"
                />
                <p>
                    Now, Sam would need a key to decrypt the message to recover the
                    original plaintext. In order to convert the ciphertext into plain
                    text, Sam would need to use the decryption key. Using the key he would
                    convert the ciphertext or the numerical value to the corresponding
                    plain text.
                </p>
                <p>
                    After using the key for decryption what will come out is the original
                    plaintext message, is an error. Now, this error is very important. It
                    is the way Sam knows that message sent by Andy is not the same as the
                    message that he received. Thus, we can say that encryption is
                    important to communicate or share information over the network.
                </p>
                <p>
                    Now, based on the type of keys and encryption algorithms, cryptography
                    is classified under the following categories:
                </p>
                <h2>Encryption Algorithms</h2>
                <p>
                    Cryptography is broadly classified into two categories:{" "}
                    <strong> Symmetric key Cryptography </strong> and{" "}
                    <strong> Asymmetric key Cryptography </strong> (popularly known as
                    public key cryptography).
                </p>
                <img
                    className="image-display"
                    src="/images/encryption-algorithms-what-is-cryptography-zakod-2.png"
                    alt="Encryption Meaning illustration"
                />
                <p>
                    Now Symmetric key Cryptography is further categorized as Classical
                    Cryptography and Modern Cryptography.
                </p>
                <p>
                    Further drilling down, Classical Cryptography is divided into
                    Transposition Cipher and Substitution Cipher. On the other hand,
                    Modern Cryptography is divided into Stream Cipher and Block Cipher.
                </p>
                <p>So, let’s understand these algorithms with examples.</p>
                <h2>How various Cryptographic Algorithms Works?</h2>
                <p>Let’s start with the Symmetric key encryption</p>
                <h2>Symmetric Key Cryptography</h2>
                <p>
                    An encryption system in which the sender and receiver of a message
                    share a single, common key that is used to encrypt and decrypt the
                    message. The most popular symmetric–key system is the Data Encryption
                    Standard (DES)
                </p>
                <img
                    className="image-display"
                    src="/images/symmetric-key-what-is-cryptography-zakod-3.png"
                    alt="Encryption Meaning illustration"
                />
                <h2>Transposition Ciphers</h2>
                <p>
                    In Cryptography, a transposition cipher is a method of encryption by
                    which the positions held by units of plaintext (which are commonly
                    characters or groups of characters) are shifted according to a regular
                    system, so that the ciphertext constitutes a permutation of the
                    plaintext. That is, the order of the units is changed (the plaintext
                    is reordered). Mathematically, a bijective function is used on the
                    characters’ positions to encrypt and an inverse function to decrypt.
                </p>
                <h2>Example: </h2>
                <img
                    className="image-display"
                    src="/images/transposition-cipher-what-is-cryptography-zakod-4.png"
                    alt="Encryption Meaning illustration"
                />
                <h2>Substitution Cipher</h2>
                <p>
                    Method of encryption by which units of plaintext are replaced with
                    ciphertext, according to a fixed system; the “units” may be single
                    letters (the most common), pairs of letters, triplets of letters,
                    mixtures of the above, and so forth.{" "}
                </p>
                <h2>Example: </h2>
                <p>
                    Consider this example shown on the slide: Using the system just
                    discussed, the keyword “zebras” gives us the following alphabets:
                </p>
                <img
                    className="image-display"
                    src="/images/substitution-cipher-example-what-is-cryptography-zakod-5.png"
                    alt="Encryption Meaning illustration"
                />
                <h2>Stream Cipher</h2>
                <p>
                    Symmetric or secret-key encryption algorithm that encrypts a single
                    bit at a time. With a Stream Cipher, the same plaintext bit or byte
                    will encrypt to a different bit or byte every time it is encrypted.
                </p>
                <img
                    className="image-display"
                    src="/images/Stream-cipher-what-is-cryptography-zakod-6.png"
                    alt="Encryption Meaning illustration"
                />
                <h2>Block Cipher</h2>
                <p>
                    An encryption method that applies a deterministic algorithm along with
                    a symmetric key to encrypt a block of text, rather than encrypting one
                    bit at a time as in stream ciphers{" "}
                </p>
                <img
                    className="image-display"
                    src="/images/Block-cipher-aht-is-cryptography-zakod-7.png"
                    alt="Encryption Meaning illustration"
                />
                <h2>Example:</h2>
                <p>
                    Example: A common block cipher, AES, encrypts 128-bit blocks with a
                    key of predetermined length: 128, 192, or 256 bits. Block ciphers are
                    pseudorandom permutation (PRP) families that operate on the fixed size
                    block of bits. PRPs are functions that cannot be differentiated from
                    completely random permutations and thus, are considered reliable until
                    proven unreliable.
                </p>
                <h2>Asymmetric Key Encryption (or Public Key Cryptography)</h2>
                <p>
                    The encryption process where different keys are used for encrypting
                    and decrypting the information. Keys are different but are
                    mathematically related, such that retrieving the plain text by
                    decrypting ciphertext is feasible.{" "}
                </p>
                <img
                    className="image-display"
                    src="/images/public-key-encryption-what-is-cryptography-zakod-8.png"
                    alt="Encryption Meaning illustration"
                />
                <p>
                    Alright, this was it for “What is Cryptography” blog. To safeguard
                    your information and data shared over the internet it is important to
                    use strong encryption algorithms, to avoid any catastrophic
                    situations.{" "}
                </p>
            </div>
        </>
    );
}

export default IntroDisplay;
