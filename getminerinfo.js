//this is the code for get pending of msig
let request = require('request')


let options = {
    url:'http://127.0.0.1:1234/rpc/v1',
    method: 'post',
    headers: { 'content-type' : 'application/json' },
    headers: {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.q8bmFopRibNBkyc_0pI8ze11d9EdDTmyjxwfcbfTFbE'},

// 本程序要进行getstateminerinfo，用直连node ，调用rpc 的方式。用的是read权限。address为 miner actor 的address。tipsetkey 放在的是单独的[]中。
    body:'{"jsonrpc":"2.0","id":0, "method":"Filecoin.StateMinerInfo", "params": ["t09900",[{"/":"bafy2bzacecaev6iggjwh3ddme7ggvribodaiw5hcmwkq4ydd6mss2arm6cd3c"}]]}'
    //cautions: the params is not string ,it is a list!!!!!!!there is no map in the list, only the params listed by order.
    //params 中，两个tipsetkey 都是放在[]中的。每个都放在{} 内的。
}

function callback(error, response, body) {
    console.log(response.statusCode)
    if (!error && response.statusCode == 200) {
        console.log('成功拉成功啦成功啦成功啦成功拉黑陈陈公公啦陈公公啦车哦那个高龄啊')
        console.log('以下是显示内容')
        json = response.body;
        console.log('this is the body')
        console.log(body)
        console.log('above is the body, maybe zero~')
        var obj = JSON.parse(json);
        hex = obj.result.number;
        final = parseInt(hex, 16)
        console.log('this is the final')
        console.log(final)
        console.log('above is the final')
        console.log('this is the response')
        console.log(response)
        console.log('above is response')
    }
}

request(options, callback);