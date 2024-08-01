const axios = require('axios');
// const http = require('http');

exports.getReport = function(pdfPath, params, res) {
    const auth = "Basic amFzcGVyYWRtaW46amFzcGVyYWRtaW4=";
    const url  = 'http://10.12.12.175:8080/jasperserver/rest_v2/reports/reports/';

    let options = {
        responseType: 'arraybuffer',
        headers : {
            "Authorization": auth
        },
    }

    if (params) {
        options.params = params;
    }

    axios.get(url + pdfPath, options).then(function(response) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            res.end(response.data);
    }).catch(function(error) {
        console.log(`Error -> ${error.name} : ${error.message}`);

        res.status(500).send({
            message: 'Terjadi kesalahan saat memuat PDF!'
        })
    });
}

exports.getReportExcel = function(pdfPath, params, res) {
    const auth = "Basic amFzcGVyYWRtaW46amFzcGVyYWRtaW4=";
    const url  = 'http://10.12.12.175:8080/jasperserver/rest_v2/reports/reports/';

    let options = {
        responseType: 'arraybuffer',
        headers : {
            "Authorization": auth
        },
    }

    if (params) {
        options.params = params;
    }

    axios.get(url + pdfPath, options).then(function(response) {
            res.setHeader('Content-Type', 'application/vnd.ms-excel');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            res.end(response.data);
    }).catch(function(error) {
        console.log(`Error -> ${error.name} : ${error.message}`);

        res.status(500).send({
            message: 'Terjadi kesalahan saat memuat file Excel!'
        })
    });
}