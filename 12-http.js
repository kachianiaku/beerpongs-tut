const http= require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our page')
    }
    if(req.url==='/about'){
        res.end('here is a short history of our website')
    }
     res.end(`
     <h1>OOPS</h1>
     <p>Error 404, the page you are looking for does not exist</p>
     <a href='/'>go back to home </a>`)
})
server.listen(8000); 
