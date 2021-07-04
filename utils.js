const fetch = require("node-fetch");

module.exports.fetchData = async function fetchData(url) {
    const data = await fetch(url).catch(e => {
        //console.log("ERROR WHILE FETCHING API. " + e)
    });
    
    let response = await data.json();
    //console.log("RESPONSE:" + response)
    return response
}

/*
Validate the URL which is passed as a parameter to the fetch request.
*/
module.exports.validateURL = function validateURL(str) 
{ 
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/; 
    if (regexp.test(str))  
        return true; 
    else 
        return false; 
} 