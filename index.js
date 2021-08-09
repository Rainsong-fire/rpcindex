let request = require('request')

// Call the Infura API and check that the address is valid.
//this object is used to detail the request to infura
let options = {
    url:'https://filecoin.infura.io',
    method: 'post',
    headers: { 'content-type' : 'application/json' },
    auth: { user: '1wLpgwOI1m6kzvnsqrT0dfjmetd', pass: 'deb20f42292a719787b5bb0a6fa87410'},
//the last member is the body, where stores the details of api request, such as the method called the params.etc.
    //cautions: the body is a string as a whole!!!!
    body:'{"jsonrpc":"2.0","id":0, "method":"Filecoin.WalletValidateAddress", "params": ["t1npbdebqhmt6vo6asvrg64knpxjiftacpv4ccvja"] }'
    //cautions: the params is not string ,it is a list!!!!!!!
}

function callback(error, response, body) {
    console.log(response.statusCode)
    if (!error && response.statusCode == 200) {
        console.log(response.statusCode)
        json = response.body;
        var obj = JSON.parse(json);
        hex = obj.result.number;
        final = parseInt(hex, 16)
        console.log(final)
        console.log(body)
    }
}

request(options, callback);