const http = require('http');
var fs = require('fs');
var data = fs.readFileSync(__dirname + '/accounts.json', 'utf8');
var accounts = JSON.parse(data);
console.log(JSON.stringify(accounts));

const requestListener = function (req, res) {
    var foundAccount = accounts.find(function (acc) {
        return acc.method == req.method && acc.url == req.url;
    });
    if (!foundAccount) {
        res.writeHead(404);
        res.end("Oops, Requested Method or url doesn't match..");
        return;
    }

    var handlerName = foundAccount.handler;
    const handler = new Handler();

    switch (foundAccount.method) {
        case 'GET':
            handler[handlerName](res);
            break;
        case 'POST':
            handler[handlerName](res);
            break;
        case 'PUT':
            handler[handlerName](res);
            break;
        case 'DELETE':
            handler[handlerName](res);
            break;
    }
}

class Handler {
    handleGetAccDetails(res) {
        console.log("Get Method");
        res.writeHead(200);
        res.end("Get Account Success...");
    }
    handlePostAccDetails(res) {
        console.log("Post Method");
        res.writeHead(200);
        res.end("Post Account Success...");
    }
    handlePutAccDetails(res) {
        console.log("Put Method");
        res.writeHead(200);
        res.end("Put Account Success...");
    }
    handleDeleteAccDetails(res) {
        console.log("Delete Method");
        res.writeHead(200);
        res.end("Delete Account Success...");
    }
}


const server = http.createServer(requestListener);
server.listen(8080);

