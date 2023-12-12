
/**
 * Perform Atbash cipher encryption or decryption on the input text.
 * @param {string} language - The value of language.
 * @returns {string} - The processed language result.
 */
export const getAlphabet = (language) => {
    switch (language) {
        case 'English':
            return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        case 'Turkish':
            return 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ';
        case 'Arabic':
            return 'اأبتثجحخدذرزسشصضطظعغفقكلمنهويى';
        case 'Russian':
            return 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        default:
            // Default to English alphabet
            return -1;
    }

};


/**
 * Perform Atbash cipher encryption or decryption on the input text.
 * @param {string} inputText - The text to be encrypted or decrypted.
 * @returns {string} - The processed text.
 */
export const AtbashCipher = (inputText, language) => {
    const alphabet = getAlphabet(language);
    const reversedAlphabet = alphabet.split('').reverse().join('');

    /**
     * Transform an individual character based on Atbash cipher logic.
     * @param {string} char - The character to be transformed.
     * @returns {string} - The transformed character.
     */
    const transformCharacter = (char) => {
        if (char === ' ') {
            // Preserve spaces
            return ' ';
        }

        const isUpperCase = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toUpperCase());

        if (index !== -1) {
            return isUpperCase ? reversedAlphabet[index] : reversedAlphabet[index].toLowerCase();
        }

        return char; // Return non-alphabetic characters unchanged
    };

    // Map each character of the input text through the transformCharacter function
    // and then join the resulting array to form the processed text
    return inputText.split('').map(transformCharacter).join('');
};



/**
 * Perform Caesar cipher encryption or decryption on the input text.
 * @param {string} inputText - The text to be encrypted or decrypted.
 * @param {number} shiftA - The number of positions to shift the characters.
 * @param {boolean} isEncrypt - A flag indicating whether to encrypt (true) or decrypt (false).
 * @param {string} language - The language for the alphabet (e.g., 'english', 'turkish').
 * @returns {string} - The processed text.
 */
export const CaesarCipher = (inputText, shiftA, isEncrypt, language) => {
    const alphabet = getAlphabet(language);

    /**
     * Transform an individual character based on Caesar cipher logic.
     * @param {string} char - The character to be transformed.
     * @returns {string} - The transformed character.
     */
    const transformCharacter = (char) => {
        if (char === ' ') {
            // Preserve spaces
            return ' ';
        }

        const isUpperCase = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toUpperCase());

        if (index !== -1) {
            // Perform the Caesar cipher shift
            const shiftedIndex = isEncrypt
                ? (index + shiftA +  getAlphabet(language).length) %  getAlphabet(language).length
                : (index - shiftA + getAlphabet(language).length) %  getAlphabet(language).length;
            return isUpperCase ? alphabet[shiftedIndex] : alphabet[shiftedIndex].toLowerCase();
        }

        return char; // Return non-alphabetic characters unchanged
    };

    // Map each character of the input text through the transformCharacter function
    // and then join the resulting array to form the processed text
    return inputText.split('').map(transformCharacter).join('');
};



/**
 * Perform Affine cipher encryption or decryption on the input text.
 * @param {string} inputText - The text to be encrypted or decrypted.
 * @param {number} shiftA - The first part of the key for the Affine cipher.
 * @param {number} shiftB - The second part of the key for the Affine cipher.
 * @param {boolean} isEncrypt - A flag indicating whether to encrypt (true) or decrypt (false).
 * @param {string} language - The language for the alphabet (e.g., 'english', 'turkish').
 * @returns {string} - The processed text.
 */
export const AffineCipher = (inputText, shiftA, shiftB, isEncrypt, language) => {
    const alphabet = getAlphabet(language);

    /**
     * Calculate the modular multiplicative inverse of a number.
     * @param {number} a - The number for which to find the inverse.
     * @param {number} m - The modulus.
     * @returns {number} - The modular multiplicative inverse.
     */
    const modInverse = (a, m) => {
        a = (a % m + m) % m;
        for (let i = 1; i < m; i++) {
            if ((a * i) % m === 1) {
                return i;
            }
        }
        return 1;
    };

    /**
     * Transform an individual character based on Affine cipher logic.
     * @param {string} char - The character to be transformed.
     * @returns {string} - The transformed character.
     */
    const transformCharacter = (char) => {
        const isUpperCase = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toUpperCase());

        if (index !== -1) {
            // Perform the Affine cipher transformation
            const transformedIndex = isEncrypt
                ? (shiftA * index + shiftB) % getAlphabet(language).length 
                : (modInverse(shiftA, getAlphabet(language).length ) * (index - shiftB +  getAlphabet(language).length )) % getAlphabet(language).length ;

            return isUpperCase ? alphabet[transformedIndex] : alphabet[transformedIndex].toLowerCase();
        }

        // Return non-alphabetic characters unchanged
        return char;
    };

    // Map each character of the input text through the transformCharacter function
    // and then join the resulting array to form the processed text
    return inputText.split('').map(transformCharacter).join('');
};




/**
 * Perform Vigenère cipher encryption or decryption on the input text.
 * @param {string} inputText - The text to be encrypted or decrypted.
 * @param {string} key - The key for the Vigenère cipher.
 * @param {boolean} isEncrypt - A flag indicating whether to encrypt (true) or decrypt (false).
 * @param {string} language - The language for the alphabet (e.g., 'english', 'turkish').
 * @returns {string} - The processed text.
 */
export const VigenereCipher = (inputText, key, isEncrypt, language) => {
    const alphabet = getAlphabet(language);

    /**
     * Transform an individual character based on Vigenère cipher logic.
     * @param {string} char - The character to be transformed.
     * @param {number} keyIndex - The index of the key character to use for transformation.
     * @returns {string} - The transformed character.
     */
    const transformCharacter = (char, keyIndex) => {
        const isUpperCase = char === char.toUpperCase();
        const charIndex = alphabet.indexOf(char.toUpperCase());

        if (charIndex !== -1) {
            // Perform the Vigenère cipher transformation
            const keyChar = key[keyIndex % key.length].toUpperCase();
            const keyIndexInAlphabet = alphabet.indexOf(keyChar);

            const transformedIndex = isEncrypt
                ? (charIndex + keyIndexInAlphabet) % getAlphabet(language).length 
                : (charIndex - keyIndexInAlphabet +  getAlphabet(language).length ) %  getAlphabet(language).length;

            return isUpperCase ? alphabet[transformedIndex] : alphabet[transformedIndex].toLowerCase();
        }

        // Return non-alphabetic characters unchanged
        return char;
    };

    let keyIndex = 0;

    // Map each character of the input text through the transformCharacter function
    // and then join the resulting array to form the processed text
    return inputText.split('').map((char) => {
        if (/^[a-zA-ZÇçĞğİıÖöŞşÜü\u0400-\u04FF\u0600-\u06FF\s]*$/.test(char)) {
            const transformedChar = transformCharacter(char, keyIndex);
            keyIndex++;
            return transformedChar;
        }
        return char;
    }).join('');
};
