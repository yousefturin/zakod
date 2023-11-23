import React from "react";
import "./Affine.css";
function AffineDisplay() {
    return (
        <>
            <div className="affine-container">
                <p className="affine-header-text">
                    The Affine cipher represents a form of monoalphabetic substitution
                    encryption. In this method, each letter within an alphabet corresponds
                    to its numeric equivalent. It undergoes encryption through a
                    straightforward mathematical function and is then transformed back
                    into a letter. The unique formula employed ensures that each letter
                    encrypts to precisely one other letter, and vice versa. Essentially,
                    the Affine cipher functions as a standard substitution cipher,
                    governed by a specific rule dictating the letter-to-letter mapping.
                </p>
                <p className="affine-header-text">
                    This entire process relies on operating within the bounds of modulo m,
                    where "m" signifies the length of the alphabet in use. In the context
                    of the Affine cipher, the letters in an alphabet of size "m" are
                    initially mapped to integers within the range 0 to m-1.
                </p>
                <p className="affine-header-text">
                    The 'key' for the Affine cipher comprises two numbers, denoted as "a"
                    and "b." For the purpose of this discussion, we assume the utilization
                    of a 26-character alphabet (m = 26). The selection of "a" is crucial,
                    as it should be relatively prime to "m" (meaning "a" should share no
                    common factors with "m").
                </p>
                <img
                    className="image-display"
                    src="/images/affine-cipher-2.png"
                    alt="Affine Cipher illustration example"
                />
                <h2>Encryption</h2>
                <p>
                    The Affine cipher employs modular arithmetic to convert the numerical
                    representation of each plaintext letter into a different numerical
                    value, corresponding to a ciphertext letter. This encryption process
                    involves two key parameters: a multiplicative factor (often denoted as
                    'a') and an additive factor (denoted as 'b'). The encryption function
                    for a single letter can be expressed as E(x)=(ax+b)modm, where x is
                    the numerical value of the plaintext letter, m is the size of the
                    alphabet, and \mod represents the modulo operation.
                </p>
                <p>
                    The choice of 'a' and 'b' values determines the specific
                    transformation applied to each letter during encryption. To enhance
                    security, it's essential to select 'a' and 'b' such that 'a' is
                    coprime to the size of the alphabet, ensuring a one-to-one mapping
                    between plaintext and ciphertext. This helps prevent certain
                    vulnerabilities, such as letter frequency analysis, making the Affine
                    cipher more resistant to cryptanalysis.
                </p>
                <div className="affine-text-box">
                    <p className="affine-text plainText">E ( x ) = ( a x + b ) mod m</p>
                    <p className="affine-text plainText">
                        modulus m : size of the alphabet
                    </p>
                    <p className="affine-text cipherText">a and b : key of the cipher.</p>
                    <p className="affine-text cipherText">
                        a must be chosen such that a and m are coprime.
                    </p>
                </div>
                <h2>Decryption</h2>
                <p>
                    In the process of deciphering the ciphertext, it is imperative to
                    execute the inverse operations on the encrypted text, thereby
                    unraveling the plaintext. The initial step involves converting each
                    letter in the ciphertext into its respective integer value.
                    Subsequently, the decryption function is applied to elucidate the
                    concealed content.
                </p>
                <div className="affine-text-box">
                    <p className="affine-text cipherText">
                        D ( x ) = a^-1 ( x - b ) mod m
                    </p>
                    <p className="affine-text plainText">
                        a^-1 : modular multiplicative inverse of a modulo m. i.e., it
                        satisfies the equation
                    </p>
                    <p className="affine-text plainText">1 = a a^-1 mod m .</p>
                </div>
                <h2>To find a multiplicative inverse</h2>
                <p style={{ alignSelf: "flex-start" }}>
                    Our objective is to identify a value, denoted as x, that satisfies the
                    following equation:
                    <strong> a . x = 1 ( mod 26 ) </strong>
                </p>
                <p>
                    Upon finding the specific value of x that renders the equation valid,
                    we designate it as the inverse of a, denoted as{" "}
                    <strong> a ^ - 1 </strong>. The most straightforward approach to
                    solving this equation involves systematically examining each integer
                    within the range of 1 to 25 to ascertain which one fulfills the
                    stipulated condition.
                </p>
                <div className="affine-text-box">
                    <p className="affine-text cipherText">
                        [g,x,d] = gcd(a,m); % we can ignore g and d, we dont need them
                    </p>
                    <p className="affine-text plainText">x = mod(x,m);</p>
                </div>
                <p>
                    Upon multiplying x and a and subsequently reducing the result modulo
                    26, the outcome should invariably be 1. It is imperative to recall
                    that this process encapsulates the definition of an inverse. In other
                    words, if the product a⋅x=1(mod26) holds true, then x qualifies as the
                    inverse of a, and reciprocally, a is also the inverse of x.
                </p>
                <h2>Example</h2>
                <img
                    className="image-display"
                    src="/images/affine-cipher-example-1.png"
                    alt="Affine Cipher illustration example"
                />
            </div>
        </>
    );
}


export default AffineDisplay;
