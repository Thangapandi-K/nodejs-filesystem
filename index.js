// imports

const express = require('express')
const fs = require('fs')

// create app

const app = express();

// middleware

app.use(express.json());




// route


// '/newFile' API endpoint to create new file

app.get('/newFile', (request, response) => {

    // new file content
let content = `${new Date()}`

    // new file name
let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let seconds = new Date().getSeconds();


function fileName() {
    return  `${date}-${month}-${year}-${hour}-${minute}-${seconds}.txt`
}

    fs.writeFile('./newFiles/' + fileName() , content, (error) => {
        if(!error) {
            response.send('New File Created Sucessfully !')
          } else {
            response.send('Error')
          }
    })

})


// server

PORT = 3000

app.listen(PORT, () => {
    console.log(`Server Running Successfully on http://localhost:3000`)
})