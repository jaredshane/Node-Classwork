const fs = require('fs');

let mergeValues = (values, content) => {
  //cycle over keys
  for (let key in values) {
    //replace all {{key}} with values from the values object
    content = content.replace(`{{${key}}}`, values[key]);
  }

  //return merged content
  return content;
}


let view = (templateName, values, response) => {
    //read from template files

    // fs.readFile(`./views/${templateName}.html`, (err, fileContents) => { //asynchronous version
    let fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: 'utf8'}) //synchronous version
      // if (err) throw err;
      //insert values into content
      fileContents = mergeValues(values, fileContents)
      //write out the response
      response.write(fileContents)
    // });

}

module.exports.view = view;
