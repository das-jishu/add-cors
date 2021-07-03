const express = require('express')
const app = express()
const dotenv = require('dotenv');
const fetch = require("node-fetch");

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('Welcome to add-cors!')
})

app.get('/*', function (req, res) {
    const requestUrl = req.params[0]
    isValidURL = validateURL(requestUrl)
    if (isValidURL == false) 
        return res.send("Invalid URL. Can't fetch.")

    fetchData(requestUrl).then((data) => {
        data = JSON.stringify(data)
        console.log("DATA: " + data)
        res.header('Access-Control-Allow-Origin','*');
        res.send(data)
    }).catch(e => {
        res.send("ERROR.")
    });
    //console.log(requestUrl)
    //console.log(data)
    //res.send("URL: " + requestUrl + "\nData: " + data)
})

async function fetchData(url) {
    //console.log(8)
    const data = await fetch(url).catch(e => {
        console.log("ERROR WHILE FETCHING API.")
    });
    
    //console.log("DATA: " + data)
    let response = await data.json();
    console.log("RESPONSE:" + response)
    return response
    //return data
    //return 30
}

function validateURL(str) 
{ 
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/; 
    if (regexp.test(str))  
        return true; 
    else 
        return false; 
} 

dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});