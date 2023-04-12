
const http = require("http");
const fs = require("fs");
const qs = require('querystring');

let mainHtml = fs.readFileSync("../Client/main.html").toString();
let welHtml = fs.readFileSync("../Client/welcome.html").toString();
let style = fs.readFileSync("../Client/style.css").toString();
let welStyle = fs.readFileSync("../Client/welStyle.css").toString();
let welScript = fs.readFileSync("../Client/script.js").toString();


let clientName="";
let mobile="";
let email="";
let address="";


http.createServer((req, res)=>{

    //#region Get 
    if(req.method == "GET"){
        switch(req.url){
            case '/':
            case '/client/main.html':
            case '/main.html':
                res.write(mainHtml);
            break;

            case '/client/welcome.html':
            case '/welcome.html':
                res.write(welHtml);
            break;
            
            case '/Client/style.css':
            case '/style.css':
                res.write(style);
            break;

            case '/Client/welStyle.css':
            case '/welStyle.css':
                res.write(welStyle);
            break;

            case '/script.js':
            case '/Client/script.js':
                res.write(welScript);
            break;
            
            default:

        }
        res.end();
    }
    //#endregion

    //#region POST
    else if(req.method == "POST"){
        req.on("data",(data)=>{
            //console.log(data.toString());
            // req.headers["Content-Type"] = "application/json"
            
            fs.readFile('clients.json', (err, oldData) => {
                if (err) throw err;
                const clients = JSON.parse(oldData);
                //console.log(clients);
                data = qs.parse(data.toString());
                console.log(clients["clients"]);
                
                //console.log(data);
                clients["clients"].push(data);
              
                fs.writeFile('clients.json', JSON.stringify(clients), (err) => {
                  if (err) throw err;
                  console.log('The file has been updated!');
                });
              });
            
            
            //fs.appendFileSync("clients.json",JSON.stringify(data.toString())+"\n");
            clientName = data.toString().split("&")[0].split("=")[1];
            mobile = data.toString().split("&")[1].split("=")[1];
            email = data.toString().split("&")[2].split("=")[1];
            address = data.toString().split("&")[3].split("=")[1];

            console.log(clientName);

        })

        req.on("end", ()=>{
            welHtml = welHtml.replace("{clientName}", clientName);
            welHtml = welHtml.replace("{MobileNumber}", mobile);
            welHtml = welHtml.replace("{Email}", email);
            welHtml = welHtml.replace("{Address}", address);

            res.write(welHtml);
            res.end();
        })
    }
    //#endregion
}).listen(7000,()=> console.log("Listining on port 7000"));