
var express = require("express");
var app = express();
var path = require("path");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static(__dirname + "/Client"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

io.on("connection", () => {
    console.log("a user is connected")
})

/*
var dbURL = "mongodb+srv://HassanElfalt:01114827838@hassan.ypdyawb.mongodb.net/test"
mongoose.connect(dbURL, (err) => {
    console.log("mongodb connected", err);
});*/
var dbURL = "mongodb+srv://HassanElfalt:01114827838@hassan.ypdyawb.mongodb.net/test";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("mongodb connected!");
});

var Message = mongoose.model("Messages", { name: String, message: String })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/index.html"));
});

app.get('/messages', (req, res) => {
    /*Message.find({}, (err, messages) => {
        res.send(messages);
    })*/
    Message.find({}).then((messages) => {
        res.send(messages);
    }).catch((err) => {
        console.log(err);
    });

})

app.post('/messages', (req, res) => {
    /*var message = new Message(req.body);
    message.save((err) => {
        if (err)
            sendStatus(500);
            
        res.sendStatus(200);
    })*/

    var message = new Message(req.body);
    message.save()
        .then(() => {
            io.emit('message', req.body);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

http.listen(PORT, () => console.log("http://localhost:" + PORT))