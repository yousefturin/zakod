import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import CustomAlert from "./CustomAlert";
import { AtbashCipher, CaesarCipher, AffineCipher } from './CiphersLogic';


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



    const handleCipherChange = (e) => {
        setCipher(e.target.value);
    };



    const handleTextChange = (e) => {
        const inputValue = e.target.value;
        const regex = /^[a-zA-Z\s]*$/; // Include \s to allow spaces
        
        if (!regex.test(inputValue)) {
            showAlert("Please enter text with letters only, no numbers or special characters.");
        } else {
            // Convert the input text to capital letters
            const capitalText = inputValue.toUpperCase();
            setText(capitalText);
        }
    };



    const handleKeyAChange = (e) => {
        const value = e.target.value;
        if (
            value === "" ||
            (!isNaN(value) && parseInt(value, 10) >= 0 && parseInt(value, 10) <= 25)
        ) {
            setKeyA(value);
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
            const processedText = AffineCipher(text, shiftValueA, shiftValueB, isEncrypt);
            setOutput(processedText);
        }else {
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
