const http = require('http')

//req stands for request 
//res stands for response (normally contains the request url)
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
        
    }

    if(req.url === '/about'){
        res.end('Here is the about page')
        
    }

    res.end(`
        <h1> Oops! </h1>
        <h1> Unable to locate page </h1>
        <a href="/"> Home </a>
    `)
   
})

server.listen(5000)