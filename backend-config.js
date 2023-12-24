```javascript
// Import necessary modules
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Define configuration for the backend
const config = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/mydatabase',
    CORS_OPTIONS: {
        origin: process.env.CORS_ORIGIN || '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204
    }
};

module.exports = config;
```
