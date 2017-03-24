'use strict';

const express = require('express')
const app = express();



app.use('/home', express.static(__dirname + '/public/'))

app.use('/see-our-chickens', (req, res, next) => {
  console.log('chickens')
  res.sendFile(__dirname + '/public/see-our-chickens.html')
})

app.use('/see-our-eggs', express.static(__dirname + '/public/see-our-eggs.html'))




// app.use( (req, res, next) => {
//   console.log('hey')
// })

app.use((req, res, next) => {
  res.send('<div>Hey bud, sorry, you navigated to the wrong page. We only want you to <b>see-our-eggs</b> and <b>see-our-chickens</b> and eggs, we have lots of eggs.</div>')
  console.log(req.url)
  if (req.url.includes('egg')) {
    // console.log(req.res._header)
    let date = res._header.slice(98, 129)
    console.log(`You found the Easter Egg at ${date}

        ,ggadddd8888888bbbbaaa,_
     ,ad888,      'Y88,      'Y888baa,
   ,dP"  "Y8b,      '"Y8b,      '"Y8888ba,
  ,88      "Y88b,      '"Y8ba,       '"Y88Ya,
 ,P88b,      '"Y88b,       '"Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        '"Y8ba,_      'Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   '8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         '""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
'b,"Y88ba,         ""Y88baa,_         """Y888bd"
 'b, '"Y88ba,_         ""Y888baa,_         ,8"
  '8,   '""Y88ba,_         '"""Y8888baaaaaP"
   'Ya,     '""Y888ba,_           '"d88P"
     '"Yb,,_     '""Y888baa,__,,adP""'
         '"""YYYY8888888PPPP"""'
`)
  }
})




app.listen(3030);
