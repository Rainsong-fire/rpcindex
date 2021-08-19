let request = require('request')

// Call the Infura API and check that the address is valid.
//this object is used to detail the request to infura
let options = {
    url:'http://127.0.0.1:1234/rpc/v1',
    method: 'post',
    headers: { 'content-type' : 'application/json' },
    headers: {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE'},
//the last member is the body, where stores the details of api request, such as the method called the params.etc.
    //cautions: the body is a string as a whole!!!!
    body:'{"jsonrpc":"2.0","id":0, "method":"Filecoin.ChainHead", "params": [] }'
    //cautions: the params is not string ,it is a list!!!!!!!
}

function callback(error, response, body) {
    console.log(response.statusCode)
    if (!error && response.statusCode == 200) {
        console.log(response.statusCode)
        console.log('成功拉成功啦成功啦成功啦成功拉黑陈陈公公啦陈公公啦车哦那个高龄啊')
        json = response.body;
        var obj = JSON.parse(json);
        hex = obj.result.number;
        final = parseInt(hex, 16)
        console.log(final)
        console.log(body)
    }
}

request(options, callback);