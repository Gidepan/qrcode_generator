//routes.js

const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/generate-qr', controller.generateQR);

module.exports = router;
// In the code snippet above, we define a new router using express.Router() and import the controller module. We then define a POST route /generate-qr that calls the generateQR method from the controller module.