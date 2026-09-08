const { error, log } = require("console");
const fs = require("fs");
const http = require("http");

// first get all the  api data. stored in variable and pass to the res.write(); or res.end();
const data = fs.readFileSync("userApi.json");
const originalData = JSON.parse(data);
console.log(originalData);

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1> Welcome to Home Page ! </h1>");
    res.end(); // give signal to end the response
  } else if (req.url == "/users") {
    // INSTEAD OF THIS YOU USED ABOVE SOLUTION :
    // fs.readFile('userApi.json','utf-8',(error, data)=>{
    //     console.log(error)
    //     console.log(data) // this data are in json format so you need to convert into the javascript object using json.parse();
    //     res.write(data);
    //     res.end();
    // })
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.write(data);
    // res.end(originalData.users[0].firstName);
    res.end();
  }
});
server.listen(5000, "127.0.0.1", () => {
  console.log("server started ....");
});
