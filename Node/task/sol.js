
const fs = require("fs");
let resultFile = fs.createWriteStream("result.txt");

const http = require("http"); // http is a built in module
http.createServer((request, response)=>{
    //response.write("Hello World at Server");
    var url = request.url;
    console.log(url);

    if(url != "/favicon.ico"){

        var urlArr = url.split('/');
        var operation = urlArr[1];
        
        var res = parseFloat(urlArr[2]);
        switch (operation){
            case "add":
                for(let i=3; i<urlArr.length; i++){
        
                    res = res + parseFloat(urlArr[i]) ;
                }
            break;

            case "sub":
                for(let i=3; i<urlArr.length; i++){
        
                    res = res - parseFloat(urlArr[i]) ;
                }
            break;

            case "mul":
                for(let i=3; i<urlArr.length; i++){
        
                    res = res * parseFloat(urlArr[i]) ;
                }
            break;

            case "div":
                for(let i=3; i<urlArr.length; i++){
        
                    res = res / parseFloat(urlArr[i]) ;
                } 
            break;
        }
        if(isFinite(res)){
            fs.appendFileSync("result.txt", "Result is " + res + "\n");
            response.write("<h1>Result is " + res + " </h1>");
        }
    }
    //response.writeHead(200,"ok");
    
    response.end(); 
}).listen(7000)