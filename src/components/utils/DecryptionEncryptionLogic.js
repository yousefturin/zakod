import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import CustomAlert from "./CustomAlert";
import { AtbashCipher, CaesarCipher, AffineCipher } from "./CiphersLogic";

/**
 * Check if two numbers are coprime.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {boolean} - True if a and b are coprime, false otherwise.
 */
const isCoprime = (a, b) => {
    // Calculate the greatest common divisor (gcd) of a and b
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

    return gcd(a, b) === 1;
};

export const useDecryptionEncryptionLogic = () => {
    const [cipher, setCipher] = useState("atbash");
    const [text, setText] = useState("");
    const [keyA, setKeyA] = useState("");
    const [keyB, setKeyB] = useState("");
    const [output, setOutput] = useState("");
    const [isEncrypt, setIsEncrypt] = useState(true);

    const [customAlert, setCustomAlert] = useState(null);

    const showAlert = (message) => {
        setCustomAlert(message);
        setTimeout(() => {
            setCustomAlert(null);
        }, 1500);
    };

    const handleCipherChange = (selectedOption) => {
        // Ensure that selectedOption is defined before accessing its value property
        if (selectedOption && selectedOption.value) {
            setCipher(selectedOption.value);
        } else {
            // Handle the case where selectedOption is undefined or doesn't have a value property
            // You can log an error or take appropriate action
            console.error("Invalid selected option:", selectedOption);
        }
    };

    const handleTextChange = (e) => {
        const inputValue = e.target.value;
        const regex = /^[a-zA-Z\s]*$/; // Include \s to allow spaces

        if (regex.test(inputValue)) {
            // Convert the input text to capital letters
            const capitalText = inputValue.toUpperCase();
            setText(capitalText);
        } else {
            showAlert(
                "Please enter text with letters only, no numbers or special characters."
            );
        }
    };

    const handleKeyAChange = (e) => {
        const value = e.target.value;

        // Ensure that value is a number and within the range [0, 25]
        const isValidInput =
            !isNaN(value) && parseInt(value, 10) >= 0 && parseInt(value, 10) <= 25;

        // Check if 'a' is co-prime with 26
        const isCoPrimeWith26 = isValidInput && isCoprime(parseInt(value, 10), 26);

        if (value === "" || (isValidInput && isCoPrimeWith26)) {
            setKeyA(value);
        } else {
            showAlert(
                "Please enter a valid number between 0 and 25 that is coprime with 26."
            );
        }
    };

    const handleKeyBChange = (e) => {
        const value = e.target.value;
        if (
            value === "" ||
            (!isNaN(value) && parseInt(value, 10) >= 0 && parseInt(value, 10) <= 25)
        ) {
            setKeyB(value);
        }
    };

    const handleModeChange = () => {
        setIsEncrypt(!isEncrypt);
    };

    const handleProcess = () => {
        if (
            !text ||
            (cipher === "affine" && (!keyA || !keyB)) ||
            (cipher === "caesar" && !keyA)
        ) {
            showAlert("Please provide all required inputs.");
            return;
        }

        if (cipher === "atbash") {
            const processedText = AtbashCipher(text);
            setOutput(processedText);
        } else if (cipher === "caesar") {
            // Converting the value of keyA to an integer using the parseInt function.
            const shiftValue = parseInt(keyA, 10);
            const processedText = CaesarCipher(text, shiftValue, isEncrypt);
            setOutput(processedText);
        } else if (cipher === "affine") {
            // Converting the value of keyA, keyB to an integer using the parseInt function.
            const shiftValueA = parseInt(keyA, 10);
            const shiftValueB = parseInt(keyB, 10);
            const processedText = AffineCipher(
                text,
                shiftValueA,
                shiftValueB,
                isEncrypt
            );
            setOutput(processedText);
        } else {
            // Handle other ciphers here if needed
            showAlert("Selected cipher is not supported yet.");
        }
    };

    return {
        cipher,
        text,
        keyA,
        keyB,
        output,
        isEncrypt,
        customAlert,
        handleCipherChange,
        handleTextChange,
        handleKeyAChange,
        handleKeyBChange,
        handleModeChange,
        handleProcess,
    };
};
