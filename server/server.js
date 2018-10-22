const express = require('express')
const app = express()
const Port = 9000;


app.listen(Port, () => {
    console.log(`Now listening on port ${Port}`)
})