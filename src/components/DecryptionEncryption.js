import React from "react";
import CustomAlert from "./utils/CustomAlert";
import { useDecryptionEncryptionLogic } from "./utils/DecryptionEncryptionLogic";
import "./DecryptionEncryption.css";
import Select from "react-select";

function DecryptionEncryption() {
    const {
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
    } = useDecryptionEncryptionLogic();

    // Define options for the dropdown
    const cipherOptions = [
        { value: "atbash", label: "Atbash" },
        { value: "affine", label: "Affine" },
        { value: "caesar", label: "Caesar" },
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
                                    charCode > 122)
                            ) {
                                e.preventDefault();
                            }
                        }}
                    ></textarea>
                </div>

                {cipher === "affine" && (
                    <div>
                        <label htmlFor="keyA">Key A:</label>
                        <input
                            type="text"
                            id="keyA"
                            value={keyA}
                            onChange={handleKeyAChange}
                            placeholder="Enter a co-prime number (e.g., 1, 5)"
                        />
                        <label htmlFor="keyB">Key B:</label>
                        <input
                            type="text"
                            id="keyB"
                            value={keyB}
                            onChange={handleKeyBChange}
                            placeholder="Enter a number between 0 and 25 (e.g., 12)"
                        />
                    </div>
                )}

                {cipher === "caesar" && (
                    <div>
                        <label htmlFor="keyA">Key A:</label>
                        <input
                            type="text"
                            id="keyA"
                            value={keyA}
                            onChange={handleKeyAChange}
                            placeholder="Enter a number between 0 and 25 (e.g., 12)"
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
