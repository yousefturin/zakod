/**
 * Perform Atbash cipher encryption or decryption on the input text.
 * @param {string} inputText - The text to be encrypted or decrypted.
 * @returns {string} - The processed text.
 */
export const AtbashCipher = (inputText) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
 * @returns {string} - The processed text.
 */
export const CaesarCipher = (inputText, shiftA, isEncrypt) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
                ? (index + shiftA + 26) % 26
                : (index - shiftA + 26) % 26;
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
 * @returns {string} - The processed text.
 */
export const AffineCipher = (inputText, shiftA, shiftB, isEncrypt) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
                ? (shiftA * index + shiftB) % 26
                : (modInverse(shiftA, 26) * (index - shiftB + 26)) % 26;

            return isUpperCase ? alphabet[transformedIndex] : alphabet[transformedIndex].toLowerCase();
        }

        // Return non-alphabetic characters unchanged
        return char;
    };

    // Map each character of the input text through the transformCharacter function
    // and then join the resulting array to form the processed text
    return inputText.split('').map(transformCharacter).join('');
};