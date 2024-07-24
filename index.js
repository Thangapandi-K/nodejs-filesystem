// import express

const express = require('express')

// create app

const app = express();

// middleware

app.use(express.json());


// server

PORT = 3001

app.listen(PORT, () => {
    console.log(`Server Running Successfully on http://localhost:${PORT}`)
})