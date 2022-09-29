var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url=="/"){
        res.writeHead(200,"utf-8",{"context-type":"text/html"})
        res.end(`<a href="/welcome">welcome</a>
          &nbsp  <a href="/contact">contact</a>`)
    }
    else if(req.url == "/welcome"){
        res.writeHead(200, {
            "Content-type": "text/html",
        })
        res.end("Welcome to dominos!");
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{"context-type":"text/json"})
        res.end(JSON.stringify({
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
        }))
    }
    else {
        res.writeHead(404, {
            "Content-type": "text/html",
        })
        res.end("Page not found");
    }
 
}
httpServer.listen(8081,()=>console.log("success"))
module.exports = httpServer;