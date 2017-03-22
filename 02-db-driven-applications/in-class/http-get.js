const { get } = require('https')
const { readFile } = require("fs")

//AJAX like request
get('https://node-http.firebaseio.com/words.json', (res) => {
  const statusCode = res.statusCode
  const contentType = res.headers['content-type']
  let error = null
  console.log(res.headers)
  if (statusCode !== 200) {
    error = new Error(`Request failed.\n Status Code: ${statusCode}`)
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error(`Invalid content-type.\n Expected application/json but received ${contentType}`)
  }

  if (error) {
    console.log(error.message)
    res.resume();
    return;
  }



  let body = ''
  res.on('data', (buff) => {
    // console.log('status', res.statusCode)
    body += buff.toString()
  })
  res.on('end', () => {
    console.log(JSON.parse(body).slice(0, 10))
  })
})
