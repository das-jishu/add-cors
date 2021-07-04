const express = require('express')
const dotenv = require('dotenv');
const rateLimit = require("express-rate-limit");
const utils = require("./utils.js");

const app = express()

const limiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.get('/', function (req, res) {
    return res.status(200).json({
        status: "pass",
        message: "Welcome to add-cors! Attach this base URL in front of the API endpoint to set CORS headers to the response.",
    });
})

app.get('/*', function (req, res) {
    let requestUrl = req.params[0]
    isValidURL = utils.validateURL(requestUrl)
    if (isValidURL == false) 
        return res.status(400).json({
            status: "fail",
            message: "Invalid URL. Please enter a valid API endpoint.",
        });
    
    if (requestUrl.startsWith("http") == false)
        requestUrl = "http://" + requestUrl;

    utils.fetchData(requestUrl).then((data) => {
        //data = JSON.stringify(data)
        //console.log("DATA: " + data)
        res.header('Access-Control-Allow-Origin','*');
        res.statusCode = 200;
        res.send(data)
    }).catch(e => {
        res.status(400).json({
            status: "fail",
            message: "Failed to fetch data from API. Please verify endpoint or try later.",
            error: e
        });
    });
})

dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Proxy server running on port ${port}...`);
});