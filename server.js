// Pull in Express to create API Server
const express = require('express')
const app = express();

// Parse JSON in the Request Body
app.use(express.json());

// Listen for POST Requests on the Root URL
app.post("/", (request, response) => {

    // Copy the Accept Header of the Request to the Response if Applicable
    const acceptHeader = request.get('Accept');
    if (acceptHeader) response.setHeader('Accept', acceptHeader);

    // Respond with everything in the request body
    response.json({...request.body});

});

// Use Port Environment Variable if set, else default to 3000
const port = process.env.PORT || 3000;

// Create Express Server listening on port
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export the server for testing
module.exports = server;