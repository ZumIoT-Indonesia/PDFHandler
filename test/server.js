const express = require('express');
const pdfHandler = require('../index.js')

const app    = express();

app.get('/test-report', (req, res) => pdfHandler.getReport('interactive/MKN/ReportRFQ.pdf', req.query, res))

app.listen(3000, () => {
    console.log("Server is listening");
});