// CryptoBot.js
const axios = require('axios');
const CryptoJS = require('crypto-js');

// Function to fetch current cryptocurrency prices
async function getCryptoPrices(cryptoSymbol) {
    try {
        const response = await axios.get(`https://api.coinbase.com/v2/prices/${cryptoSymbol}-USD/spot`);
        return response.data.data.amount;
    } catch (error) {
        throw new Error(`Error fetching ${cryptoSymbol} price: ${error.message}`);
    }
}

// Function to encrypt data using AES encryption
function encryptData(data, secretKey) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}

// Function to decrypt data using AES decryption
function decryptData(encryptedData, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

module.exports = {
    getCryptoPrices,
    encryptData,
    decryptData
};
