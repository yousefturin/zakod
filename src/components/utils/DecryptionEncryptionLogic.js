import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import CustomAlert from "./CustomAlert";
import { AtbashCipher, CaesarCipher, AffineCipher, VigenereCipher, getAlphabet } from "./CiphersLogic";

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
    const [cipher, setCipher] = useState("Atbash");
    const [language, setLanguage] = useState("English");
    const [text, setText] = useState("");
    const [keyAffineA, setKeyA] = useState("");
    const [keyAffineB, setKeyB] = useState("");
    const [keyCaesar, setKeyCaesar] = useState("");
    const [keyVigenère, setKeyVigenère] = useState("");
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

    const handleLanguageChange = (selectedOption) => {
        // Ensure that selectedOption is defined before accessing its value property
        if (selectedOption && selectedOption.value) {
            setLanguage(selectedOption.value);
            setKeyA("");
            setKeyCaesar("");
            setKeyVigenère("");
            setIsEncrypt(true);
        } else {
            // Handle the case where selectedOption is undefined or doesn't have a value property
            // You can log an error or take appropriate action
            console.error("Invalid selected option:", selectedOption);
        }
    };

    const handleTextChange = (e) => {
        const inputValue = e.target.value;
        
        // Regular expression to allow English, Turkish, and Arabic letters, and spaces
        const regex = /^[a-zA-ZÇçĞğİıÖöŞşÜü\u0400-\u04FF\u0600-\u06FF\s]*$/;

    
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
            !isNaN(value) && parseInt(value, 10) >= 0 && parseInt(value, 10) <= getAlphabet(language).length;

        // Check if 'a' is co-prime with 26
        const isCoPrimeWith26 = isValidInput && isCoprime(parseInt(value, 10),getAlphabet(language).length);

        if (value === "" || (isValidInput && isCoPrimeWith26)) {
            setKeyA(value);
        } else {
            showAlert(
                `Please enter a valid number between 0 and ${[...getAlphabet(language)].length - 1} that is co-prime with ${[...getAlphabet(language)].length}.`
                );
        }
    };

    const handleKeyBChange = (e) => {
        const value = e.target.value;
        if (value === "" || !isNaN(value)) {
            setKeyB(value);
        }
    };

    const handleKeyCaesarChange = (e) => {
        const value = e.target.value;
        if (value === "" || !isNaN(value)) {
            setKeyCaesar(value);
        }
    };

    const handleKeyVigenèreChange = (e) => {
        const value = e.target.value;
        
        // Regular expression to allow English, Turkish, and Arabic letters, and spaces
        const regex = /^[a-zA-ZÇçĞğİıÖöŞşÜü\u0400-\u04FF\u0600-\u06FF\s]*$/;

        if (regex.test(value)) {
            // Convert the input text to capital letters
            const capitalText = value.toUpperCase();
            setKeyVigenère(capitalText);
        } else {
            showAlert(
                "Please enter text with letters only, no numbers or special characters."
            );
        }
    };

    const handleModeChange = () => {
        setIsEncrypt(!isEncrypt);
    };

    const isValidLanguageText = (text, language) => {
        const alphabet = getAlphabet(language);
        const regexLanguage = new RegExp(`^[${alphabet}\\s]*$`);
        return regexLanguage.test(text);
    };

    const handleProcess = () => {
        if (
            !text ||
            (cipher === "Affine" && (!keyAffineA || !keyAffineB)) ||
            (cipher === "Caesar" && !keyCaesar )||
            (cipher==="Vigenère" && !keyVigenère)
        ) {
            showAlert("Please provide all required inputs.");
            return;
        }
        if (
            !text ||
            (cipher === "Affine" && !isValidLanguageText(text, language)) ||
            (cipher === "Caesar" && !isValidLanguageText(text, language)) ||
            (cipher==="Vigenère" && !isValidLanguageText(text, language) )||
            (cipher === "Atbash" && !isValidLanguageText(text, language))
        ) {
            showAlert("Please select a correct language input.");
            return;
        }


        if (cipher === "Atbash") {
            const processedText = AtbashCipher(text, language);
            setOutput(processedText);

        } else if (cipher === "Caesar") {
            // Converting the value of keyAffineA to an integer using the parseInt function.
            const convertedKeyCaesar = keyCaesar % getAlphabet(language).length;
            const shiftValue = parseInt(convertedKeyCaesar, 10);
            const processedText = CaesarCipher(text, shiftValue, isEncrypt, language);
            setOutput(processedText);

        } else if (cipher === "Affine") {
            // Converting the value of keyAffineA, keyAffineB to an integer using the parseInt function.
            const convertedKeyB = keyAffineB % getAlphabet(language).length;
            const shiftValueA = parseInt(keyAffineA, 10);
            const shiftValueB = parseInt(convertedKeyB, 10);
            const processedText = AffineCipher(
                text,
                shiftValueA,
                shiftValueB,
                isEncrypt,
                language
            );
            setOutput(processedText);

        }else if (cipher === "Vigenère") {
            // Converting the value of keyAffineA, keyAffineB to an integer using the parseInt function.
            const shiftValue = keyVigenère
            const processedText = VigenereCipher(
                text,
                shiftValue,
                isEncrypt,
                language
            );
            setOutput(processedText);

        } else {
            // Handle other ciphers here if needed
            showAlert("Selected cipher is not supported yet.");
        }
    };
    
    return {
        cipher,
        language,
        text,
        keyAffineA,
        keyAffineB,
        keyCaesar,
        keyVigenère,
        output,
        isEncrypt,
        customAlert,
        handleCipherChange,
        handleLanguageChange,
        handleTextChange,
        handleKeyAChange,
        handleKeyCaesarChange,
        handleKeyVigenèreChange,
        handleKeyBChange,
        handleModeChange,
        handleProcess,
    };
};
