const express = require('express')
const app = express()
const set = require('lodash.set')

const apps = [
    { id: '1', name: 'my-app-001' },
    { id: '2', name: 'my-app-002' },
    { id: '3', name: 'my-app-003' },
    { id: '4', name: 'my-app-004' },
    { id: '5', name: 'my-app-005' },
    { id: '6', name: 'my-app-006' },
    { id: '7', name: 'my-app-007' },
    { id: '8', name: 'my-app-008' },
    { id: '9', name: 'my-app-009' },
    { id: '10', name: 'my-app-010' },
    { id: '11', name: 'my-app-011' },
    { id: '12', name: 'my-app-012' },
    { id: '13', name: 'my-app-013' },
    { id: '14', name: 'my-app-014' },
    { id: '15', name: 'my-app-015' },
    { id: '16', name: 'my-app-016' },
    { id: '17', name: 'my-app-017' },
    { id: '18', name: 'my-app-018' },
    { id: '19', name: 'my-app-019' },
    { id: '20', name: 'my-app-020' },
    { id: '21', name: 'my-app-021' },
    { id: '22', name: 'my-app-022' },
    { id: '23', name: 'my-app-023' },
    { id: '24', name: 'my-app-024' },
    { id: '25', name: 'my-app-025' },
    { id: '26', name: 'my-app-026' },
    { id: '27', name: 'my-app-027' },
    { id: '28', name: 'my-app-028' },
    { id: '29', name: 'my-app-029' },
    { id: '30', name: 'my-app-030' },
    { id: '31', name: 'my-app-031' },
    { id: '32', name: 'my-app-032' },
    { id: '33', name: 'my-app-033' },
    { id: '34', name: 'my-app-034' },
    { id: '35', name: 'my-app-035' },
    { id: '36', name: 'my-app-036' },
    { id: '37', name: 'my-app-037' },
    { id: '38', name: 'my-app-038' },
    { id: '39', name: 'my-app-039' },
    { id: '40', name: 'my-app-040' },
    { id: '41', name: 'my-app-041' },
    { id: '42', name: 'my-app-042' },
    { id: '43', name: 'my-app-043' },
    { id: '44', name: 'my-app-044' },
    { id: '45', name: 'my-app-045' },
    { id: '46', name: 'my-app-046' },
    { id: '47', name: 'my-app-047' },
    { id: '48', name: 'my-app-048' },
    { id: '49', name: 'my-app-049' },
    { id: '50', name: 'my-app-050' },
    { id: '51', name: 'my-app-051' },
    { id: '52', name: 'my-app-052' },
    { id: '53', name: 'my-app-053' },
    { id: '54', name: 'my-app-054' },
    { id: '55', name: 'my-app-055' },
    { id: '56', name: 'my-app-056' },
    { id: '57', name: 'my-app-057' },
    { id: '58', name: 'my-app-058' },
    { id: '59', name: 'my-app-059' },
    { id: '60', name: 'my-app-060' },
    { id: '61', name: 'my-app-061' },
    { id: '62', name: 'my-app-062' },
    { id: '63', name: 'my-app-063' },
    { id: '64', name: 'my-app-064' },
    { id: '65', name: 'my-app-065' },
    { id: '66', name: 'my-app-066' },
    { id: '67', name: 'my-app-067' },
    { id: '68', name: 'my-app-068' },
    { id: '69', name: 'my-app-069' },
    { id: '70', name: 'my-app-070' },
    { id: '71', name: 'my-app-071' },
    { id: '72', name: 'my-app-072' },
    { id: '73', name: 'my-app-073' },
    { id: '74', name: 'my-app-074' },
    { id: '75', name: 'my-app-075' },
    { id: '76', name: 'my-app-076' },
    { id: '77', name: 'my-app-077' },
    { id: '78', name: 'my-app-078' },
    { id: '79', name: 'my-app-079' },
    { id: '80', name: 'my-app-080' },
    { id: '81', name: 'my-app-081' },
    { id: '82', name: 'my-app-082' },
    { id: '83', name: 'my-app-083' },
    { id: '84', name: 'my-app-084' },
    { id: '85', name: 'my-app-085' },
    { id: '86', name: 'my-app-086' },
    { id: '87', name: 'my-app-087' },
    { id: '88', name: 'my-app-088' },
    { id: '89', name: 'my-app-089' },
    { id: '90', name: 'my-app-090' },
    { id: '91', name: 'my-app-091' },
    { id: '92', name: 'my-app-092' },
    { id: '93', name: 'my-app-093' },
    { id: '94', name: 'my-app-094' },
    { id: '95', name: 'my-app-095' },
    { id: '96', name: 'my-app-096' },
    { id: '97', name: 'my-app-097' },
    { id: '98', name: 'my-app-098' },
    { id: '99', name: 'my-app-099' }
]

// URL Decoding
function decode(queryString) {
    const queryStringPieces = queryString.split("&");
    const decodedQueryString = {};

    for (const piece of queryStringPieces) {
        let [key, value] = piece.split("=");
        value = value || ""; // If a value is not defined, it should be decoded as an empty string
        set(decodedQueryString, key, value);
    }
    return decodedQueryString;
}

app.get('/apps', (req, res) => {

    const params = decode(req._parsedUrl.query)
    let by = params.range.by || "id" //  values: "id" || "name"   **required
    let start = null
    let end = null
    by == "id" ? start = params.range.start || 1  : start = params.range.start || apps[0].name
    by == "id" ? end = params.range.end ||  apps[apps.length -1].id : end = params.range.end || apps[apps.length -1].name
    let max = params.range.max || 50  // default: 50, **can be omitted
    let order = params.range.order || 'asc'
    let page = params.range.page || 1
    let indexOfLast = page * max;
    let indexOfFirst = indexOfLast- max;

    function getResult() {
        switch(by) {
            case "id":
                if(order === 'asc') return apps.slice(start - 1, end).slice(indexOfFirst,indexOfLast)
                if(order === 'dsc') return apps.slice(start - 1, end).slice(indexOfFirst,indexOfLast).sort().reverse()
            case "name":
                let first = e => e.name === start;
                let last = e => e.name === end;
                if(order === 'asc') return apps.slice(apps.findIndex(first), apps.findIndex(last) + 1).slice(indexOfFirst,indexOfLast)
                if(order === 'dsc') return apps.slice(apps.findIndex(first), apps.findIndex(last) + 1).slice(indexOfFirst,indexOfLast).sort().reverse()
        }
    }

    res.json(getResult())
})

app.listen(3000)