import React from "react";
import CustomAlert from "./utils/CustomAlert";
import { useDecryptionEncryptionLogic } from "./utils/DecryptionEncryptionLogic";
import "./DecryptionEncryption.css";
import Select from "react-select";

function DecryptionEncryption() {
    const {
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
        handleKeyBChange,
        handleKeyVigenèreChange,
        handleKeyCaesarChange,
        handleModeChange,
        handleProcess,
    } = useDecryptionEncryptionLogic();

    // Define options for the dropdown
    const cipherOptions = [
        { value: "Atbash", label: "Atbash" },
        { value: "Affine", label: "Affine" },
        { value: "Caesar", label: "Caesar" },
        { value: "Vigenère", label: "Vigenère" },
    ];

    const languageOptions = [
        { value: "English", label: "English" },
        { value: "Turkish", label: "Turkish" },
        { value: "Arabic", label: "Arabic" },
        { value: "Russian", label: "Russian" },
    ];

    const theme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: "#bad9db",
            primary: "#255f64",
            controlHeight: 20,
            primary50: "#a9c5c7",
        },
    });   


    return (
        <>
            {customAlert && <CustomAlert message={customAlert} />}
            <div className="Dec-Enc-container">
                <div>
                    <label htmlFor="cipher">Select Cipher:</label>
                    <div class="custom-select">
                        <Select
                            id="Select"
                            value={{ value: cipher, label: cipher }}
                            onChange={handleCipherChange}
                            options={cipherOptions}
                            theme={theme} // Apply custom styles
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="Language">Select Language:</label>
                    <div class="custom-select">
                        <Select
                            id="Select"
                            value={{ value: language, label: language }}
                            onChange={handleLanguageChange}
                            options={languageOptions}
                            theme={theme} // Apply custom styles
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="text">Input Text:</label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text (letters only, no numbers or special characters)"
                        onKeyDown={(e) => {
                            const charCode = e.key.charCodeAt(0);

                            // Allow Enter key, spaces, and alphabetic characters
                            if (e.key === "Enter" && text) {
                                e.preventDefault();
                                handleProcess();
                            } else if (e.key === " ") {
                                // Allow spaces, but do not preventDefault to allow typing spaces
                            } else if (
                                e.key !== " " &&
                                (charCode < 65 ||
                                    (charCode > 90 && charCode < 97) ||
                                    charCode > 122) &&
                                !e.key.match(/^[a-zA-ZÇçĞğİıÖöŞşÜü\u0400-\u04FF\u0600-\u06FF\s]*$/) // Allow Arabic, Russian, Turkish and English characters
                            ) {
                                e.preventDefault();
                            }
                        }}
                    ></textarea>
                </div>

                {cipher === "Affine" && (
                    <div>
                        <label htmlFor="keyAffineA">Key A:</label>
                        <input
                            type="text"
                            id="keyAffineA"
                            value={keyAffineA}
                            onChange={handleKeyAChange}
                            placeholder="Enter a co-prime number (e.g., 1, 5)"
                        />
                        <label htmlFor="keyAffineB">Key B:</label>
                        <input
                            type="text"
                            id="keyAffineB"
                            value={keyAffineB}
                            onChange={handleKeyBChange}
                            placeholder="Enter a number (e.g., 12)"
                        />
                    </div>
                )}

                {cipher === "Vigenère" && (
                    <div>
                        <label htmlFor="keyAffineA">Key Text:</label>
                        <input
                            type="text"
                            id="keyAffineA"
                            value={keyVigenère}
                            onChange={handleKeyVigenèreChange}
                            placeholder="Enter a text (e.g., HELLO)"
                        />
                    </div>
                )}

                {cipher === "Caesar" && (
                    <div>
                        <label htmlFor="keyAffineA">Key:</label>
                        <input
                            type="text"
                            id="keyAffineA"
                            value={keyCaesar}
                            onChange={handleKeyCaesarChange}
                            placeholder="Enter a number (e.g., 12)"
                        />
                    </div>
                )}

                <div>
                    <label style={{ paddingRight: "20px" }}>
                        <input
                            type="radio"
                            name="mode"
                            value="encrypt"
                            checked={isEncrypt}
                            onChange={handleModeChange}
                        />
                        Encrypt
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="mode"
                            value="decrypt"
                            checked={!isEncrypt}
                            onChange={handleModeChange}
                        />
                        Decrypt
                    </label>
                </div>

                <button onClick={handleProcess}>Process</button>

                <div>
                    <label htmlFor="output">Output:</label>
                    <textarea id="output" value={output} readOnly></textarea>
                </div>
                <div className="powered-by-zakod-wrapper">
                    <img
                        className="logo-display-powered"
                        src="/images/codepen.png"
                        alt="Encryption Meaning illustration"
                    />
                    <p style={{ fontSize: "12px", paddingLeft: "5px", color: "#979999" }}>
                        Powered by <strong>Zakod</strong>
                    </p>
                </div>
            </div>
        </>
    );
}

export default DecryptionEncryption;
