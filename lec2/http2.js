const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req,res)=>{
    const data = querystring.parse(req.url.split('?')[1]);

    
res.end(JSON.stringify({
    status:'ok',
    user:{
        name:data.name,
        age:data.age
    }
}))
})
server.listen(8080,()=> console.log("Server started successfully at port:"))