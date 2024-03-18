# Borissolodov-func

Borissolodov-func is a Node.js module for cryptocurrency trading. It provides functions to fetch current cryptocurrency prices and perform cryptographic operations like encryption and decryption.

## Installation

You can install Borissolodov-func via npm: `npm install borissolodov-func`

## Usage

```javascript
const CryptoBot = require('cryptobot');

// Example: Fetch current Bitcoin price
CryptoBot.getCryptoPrices('BTC')
    .then(price => console.log(`Current Bitcoin price: $${price}`))
    .catch(err => console.error(err));

// Example: Encrypt and decrypt data
const data = { message: 'Hello, CryptoBot!' };
const secretKey = 'SuperSecretKey';

const encryptedData = CryptoBot.encryptData(data, secretKey);
console.log('Encrypted Data:', encryptedData);

const decryptedData = CryptoBot.decryptData(encryptedData, secretKey);
console.log('Decrypted Data:', decryptedData);
```

