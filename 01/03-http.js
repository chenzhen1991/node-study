const http = require('http');
const fs = require('fs')

const server = http.createServer((request, response) => {
    // console.log('request', getPrototypeChain(requst));
    // console.log('response', getPrototypeChain(response));
    // console.log('request');
    // response.end('hello node')

    const {url, method, headers} = request

    if(url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text-html');
            response.end(data)
        })
    } else if(url === '/user' && method === 'GET'){
        response.writeHead(200, {'Content-Type':'application/json'});
        response.end(JSON.stringify({user: '老邹'}))
    } else if(method === 'GET' && headers.accept.indexOf('image/*')){
        fs.createReadStream('.' + url).pipe(response)
    }
})

server.listen(3000)

function getPrototypeChain(obj){
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)){
        protoChain.push(obj)
    }

    return protoChain
}