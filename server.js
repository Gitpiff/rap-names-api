const express = require("express")
const app = express()
const PORT = 8000

const rappers = {
    "savage":{
        "age": 29,
        "birthName": "Abraham - Joseph",
        "location": "London, England"
    },
    "chance":{
        "age": 29,
        "birthName": "Chancellor Bennet",
        "location": "Chicago, Illinois"
    },
    "springfield":{
        "age": 29,
        "birthName": "springfield",
        "location": "springfield"
    },
    "unknown": {
        "age": 0,
        "birthName": "unknown",
        "location": "unknown"
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:rapper", (request, response) => {
    //avoid case errors, make everything lower case
    const rappersName = request.params.rapper.toLocaleLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    } else {
        response.json(rappers["unknown"])
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}! Betta Go Catch It!`)
})
