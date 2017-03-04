// Handle HTTP route GET / and POST
const Profile = require("./profile.js");
const renderer = require('./renderer.js');
const commonHeaders = {'Content-Type': 'text/html'}
const queryString = require('querystring');



let homeRoute = (request, response) => {
  //if url === "/" && GET
  if (request.url === '/') {
    if(request.method.toLowerCase() === "get") {
      //show search
      response.writeHead(200, commonHeaders);
      renderer.view('header', {}, response)
      renderer.view("search", {}, response)
      renderer.view('footer', {}, response)
      response.end();
    } else {
        //if url === "/" && POST

        //get the post data from body
        request.on('data', (postBody) => {
          //extract the username
          let query = queryString.parse(postBody.toString())
          response.writeHead(303, {"Location": `/${query.username}`})
          response.end();
          //redirect to username

        })



    }
  }


}

//Handle HTTP route GET /username
let userRoute = (request, response) => {
  //if url === "/anything"
  let username = request.url.replace('/', '')
  if (username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response)
    //get JSON from treehouse

    let studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", (profileJSON) => {
      //show profile
      //store the values which we need
      let values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javaScript: profileJSON.points.JavaScript,
      }
      //Simple response
      // response.write(`${values.username} has ${values.badges} badges \n`)
      renderer.view('profile', values, response)
      renderer.view('footer', {}, response)
      response.end();
    });



    //on 'error'
    studentProfile.on("error", (error) => {
      //show error
      renderer.view('error', {errorMessage: error.message}, response)
      renderer.view('search', {}, response)
      renderer.view('footer', {}, response)
      response.end();
    });


  }
}


module.exports.home = homeRoute;
module.exports.user = userRoute;
