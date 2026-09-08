const http = require('http')

let resources = [];

const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url
    if(url==='/' && method ==='GET'){
    
res.end(JSON.stringify(resources))

    }else if(url==='/product' && method==='POST'){
        let body = '';
        req.on('data',(chunk)=>{
             body = body + chunk
        });
        req.on('end',()=>{
            const newResources = JSON.stringify(body)
            resources.push(newResources)
            res.statusCode = 201
            res.end(JSON.stringify({ message: 'Resource created', data: newResources }))
        })
    }else if(url==='/product' && method === 'put'){
        let body ='';
        req.on('data',(chunk)=>{
            body = body + chunk
        } );
        req.on('end',()=>{
            const updatedResource = JSON.stringify(body);
            resources = resources.map((resource)=>{
                resources.id ===id ? updatedResource : resources
                res.statusCode = 200;
                res.end(JSON.stringify({message:'resource updated',data:updatedResource}))
            })

        })
    }else if (method === 'PATCH' && url === '/products') {
        // Handle PATCH: Partially update a resource

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
    
        req.on('end', () => {
          const partialData = JSON.parse(body);
          let updatedResource;
          resources = resources.map(resource => {
            if (resource.id === id) {
              updatedResource = { ...resource, ...partialData };
              return updatedResource;
            }
            return resource;
          });
          res.statusCode = 200; // OK
          res.end(JSON.stringify({ message: 'Resource partially updated', data: updatedResource }));
        });
    
      }else if (method === 'DELETE' && url === '/products'){
        // Handle DELETE: Remove a resource
        resources = resources.filter(resource => resource.id !== id);
        res.statusCode = 200; // OK
        res.end(JSON.stringify({ message: `Resource with ID ${id} deleted` }));
      }else {
        // Handle unsupported routes or methods
        res.statusCode = 404; // Not Found
        res.end(JSON.stringify({ message: 'Route or method not found' }));
      }
      
})
console.log(resources)


server.listen(3000,()=>{
    console.log('server start on port number 3000')
})