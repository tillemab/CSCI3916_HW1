// Pull in Express to Create API Server
const express = require('express')
const app = express();

// Ability to Parse JSON Responses
app.use(express.json());

app.post("/", (req, res) => {

    const acceptHeader = req.get('Accept');

    if (acceptHeader) {
        res.setHeader('Accept', acceptHeader)
    }

    const responseBody = {
        ...req.body
    }

    res.json(responseBody)

});

// Use port environment variable, else default to 3000
const port = process.env.PORT || 3000;

const server = app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});

module.exports = server;