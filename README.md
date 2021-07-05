# add-cors

![Add CORS cover image](https://github.com/das-jishu/add-cors/blob/master/images/add-cors-cover.png?raw=true)

 [![Build Status](https://travis-ci.com/das-jishu/add-cors.svg?branch=master)](https://travis-ci.com/github/das-jishu/add-cors)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT "MIT License")
 ![GitHub repo size](https://img.shields.io/github/repo-size/das-jishu/add-cors)
 [![Active](http://img.shields.io/badge/Status-Active-green.svg)](https://github.com/das-jishu/add-cors)
 [![Generic badge](https://img.shields.io/badge/framework-node-yellow.svg)](https://www.typescriptlang.org/)
 
**Description:** A Node proxy to add CORS headers to a request made to an API endpoint.

#
 
![Image of error due to blockage by CORS policy](https://github.com/das-jishu/add-cors/blob/master/images/no-cors-error.PNG?raw=true)

<br-->
The image above shows a response blocked due to CORS policy not satisfied since correct headers were not present on the response. Frontend code won't have access to responses if responses don't have CORS headers embedded in it. If the backend server is owned by you, you can add the headers to solve the problem. If it isn't owned by you, a proxy server comes into play.
 
#

### HOW TO USE

**BASE URL:** https://attach-cors.herokuapp.com/

Append the base URL infront of the API endpoint and perform the request as usual. The request will be passed through the proxy to get the response. CORS headers will be added to the response and sent back.

```JS
   fetch("some-API-with-no-CORS")                                    // ERROR
   fetch("https://attach-cors.herokuapp.com/some-API-with-no-cors")  // SUCCESS
```

Note that it is a public proxy with rate limiting applied, so responses might be delayed. A better approach would be to create your own proxy server to handle the requests. This can be done with the following commands:

```bash
   git clone https://github.com/das-jishu/add-cors.git
   cd add-cors/
   npm install
   heroku create cors-everywhere //cors-everywhere is an example. Use a unique name for heroku to create.
   git push heroku master
```

Prerequisites: [Installing the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

After executing the above commands, your own server would be running and available at https://cors-everywhere.herokuapp.com/
You can make requests to endpoints simply by attaching the URL infront of it.

Example: https://cors-everywhere.herokuapp.com/http://www.check-cors.com
 
#

### EXTRAS

Feel free to add any additional features by creating a pull request.
