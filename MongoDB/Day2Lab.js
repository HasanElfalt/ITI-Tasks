
db.Instructors.find()

db.Instructors.find({salary:{$gt:4000}},{firstName:1, salary:1})

db.Instructors.find({age:{$lte:25}},{})

db.Instructors.find({$and:[{"address.city":"mansoura"}, {"address.street":{$in:[14,10]}}]},{firstName:true, address:true, salary:true});

db.Instructors.find({$and:[{courses:"js"},{courses:"jquery"}]})

db.Instructors.find({courses:{$exists:true}}).forEach(ins => {
    print(`FirstName: ${ins.firstName}, Courses: ${ins.courses.length}`)
})

db.Instructors.find({$and:[{firstName:{$exists:true}},{lastName:{$exists:true}}]}, {firstName:1, lastName:1, age:1}).sort({firstName:1}, {lastName:-1});

//Bonus
db.instructorsData.insert(db.Instructors.find({$and:[{firstName:{$exists:true}},{lastName:{$exists:true}}]}, {firstName:1, lastName:1, age:1}).sort({firstName:1}, {lastName:-1}).toArray());          

db.Instructors.find({$or:[{firstName:"mohammed"}, {lastName:"mohammed"}]});

db.Instructors.deleteOne({$and:[{firstName:"ebtesam"},{courses:{$size:5}}]})

db.Instructors.updateMany({},{$set:{active:true}})

db.Instructors.updateOne({$and:[{firstName:"mazen"},{lastName:"mohammed"},{courses:"EF"}]},{$set:{"courses.$":"jquery"}})

db.Instructors.updateOne({$and:[{firstName:"noha"}, {lastName:"hesham"}]}, {$addToSet:{courses:"jquery"}})

db.Instructors.updateOne({$and:[{firstName:"mazen"},{lastName:"amen"}]},{$unset:{courses:"sadsa"}})

db.Instructors.updateMany({courses:{$size:3}}, {$inc:{salary:-500}})

db.Instructors.updateMany({},{$rename:{"address":"fullAddress"}})

db.Instructors.updateOne({$and:[{firstName:"noha"}, {lastName:"hesham"}]}, {$set:{"fullAddress.street":20}})
