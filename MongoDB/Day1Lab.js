//----------------------------------------------6----------------------------------------------
use ITI

db.createCollection("Instructors");

db.Instructors.insert({firstName:"Hassan", lastName:"Mohamed", age:27, salary:10000});

db.Instructors.insert(instructorsArray);

let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
               
		
		];
		
db.Instructors.insert(instructorsArray);

db.Instructors.insertOne({_id:10, age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]})
                
db.Instructors.find()

//----------------------------------------------7----------------------------------------------
db.Instructors.find()

db.Instructors.find({}, {firstName:1, lastName:1, address:1})

db.Instructors.find({age:21}, {firstName:1, "address.city":1})

db.Instructors.find({"address.city":"mansoura"},{firstName:1, age:1})

db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1})

db.instructors.find({courses:"mvc"},{firstName:1,courses:1})
