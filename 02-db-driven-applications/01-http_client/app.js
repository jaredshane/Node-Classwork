const { get } = require('http')

const { argv: [,, arg]} = process



get(`http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"${arg}","Type":"price","Params":["c"]}]}`, (res) => {
  // console.log(res)

  const statusCode = res.statusCode
  const contentType = res.headers['content-type']
  let error = null
  // console.log(res.headers)
  if (statusCode !== 200) {
    error = new Error(`Request failed.\nStatus Code: ${statusCode}`)
  }
  else if (!/^text\/javascript/.test(contentType)) {
    error = new Error(`Invalid content-type.\nExpected text/javascript but received ${contentType}`)
  }

  if (error) {
    console.log(error.message)
    res.resume();
    return;
  }


  let dataReturned = '';
  res.on('data', (buff) => {
    // console.log('buff', buff)
    dataReturned += buff.toString()
    // console.log('dataReturned', dataReturned)
    // console.log(body)
  })
  res.on('end', () => {
    let { Elements: [{ DataSeries: { close: { values }} }] } = JSON.parse(dataReturned)
    // console.log(values)
    let sum = values.reduce((a, b) => a + b, 0);
    sum = sum / 365
    console.log(sum.toFixed(2));
  })
})
