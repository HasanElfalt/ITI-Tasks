
db.createCollection("Student", {
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["firstName", "isFired", "courses"],
            properties:{
                firstName:{ bsonType:"string"},
                lastName:{bsonType:"string"},
                isFired:{bsonType:"bool"},
                facultyID:{bsonType:"number"},
                courses:{
                    bsonType:"array",
                    items:{
                        bsonType:"object",
                        properties:{
                            courseID:{bsonType:"string"},
                            grade:{bsonType:"number"}
                        }
                    }
                }
            }
        }
    }
})

db.Student.insertMany([
  {
    firstName: "Hassan",
    lastName: "Mohamed",
    isFired: false,
    facultyID: 101,
    courses: [
      { courseID: "CS101", grade: 95 },
      { courseID: "CS102", grade: 77 }
    ]
  },{
    firstName: "Hassan",
    lastName: "Mostafa",
    isFired: false,
    facultyID: 101,
    courses: [
      { courseID: "CS101", grade: 68 },
      { courseID: "CS103", grade: 55 }
    ]
  }
  ,{
    firstName: "Ahmed",
    lastName: "Saeed",
    isFired: true,
    facultyID: 102,
    courses: [
      { courseID: "CS101", grade: 70 },
      { courseID: "CS103", grade: 59 }
    ]
  },{
    firstName: "Mahmoud",
    lastName: "Ahmed",
    isFired: false,
    facultyID: 102,
    courses: [
      { courseID: "CS101", grade: 77 },
      { courseID: "CS103", grade: 72 }
    ]
  }
]);

db.Student.find();


db.createCollection("Faculty", {
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["facultyName"],
            properties:{
                facultyName:{ bsonType:"string"},
                address:{bsonType:"string"},
            }
        }
    }
})

db.Faculty.insertMany([
  {
    _id: 101,
    facultyName: "Engineering",
    address: "Giza"
  },
  {
    _id: 102,
    facultyName: "Computer Science",
    address: "Cairo"
  }
]);

db.Faculty.find();

db.createCollection("Course", {
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["courseName","finalMark"],
            properties:{
                courseName:{ bsonType:"string"},
                finalMark:{bsonType:"number"},
            }
        }
    }
});

db.Course.insertMany([
  {
    _id: "CS101",
    courseName: "Mathematics",
    finalMark: 90
  },
  {
    _id: "CS102",
    courseName: "Java",
    finalMark: 95
  },
  {
    _id: "CS103",
    courseName: "English",
    finalMark: 85
  },
]);

db.Course.find();


//2
db.Student.aggregate([{
    $project:{
        fullName:{
            $concat:["$firstName", " ","$lastName"]
        },
        AvgGrade: {$avg:"$courses.grade"}
    },
    
}]);
    //2 - another way
db.Student.aggregate([{
    $unwind:"$courses"
},{
    $group:{
        _id: "$_id",
        firstName: { $first: "$firstName" },
        AvgGrade: {$avg:"$courses.grade"}
    }
},{
    $project:{
        firstName:1,
        AvgGrade: 1
 },}]);

//3
db.Student.aggregate([{
    $project:{
        fullName:{
            $concat:["$firstName", " ","$lastName"]
        },
        finalMark:{
            $sum:"$courses.grade",
        },
    }
}]);

//4
db.Student.aggregate([{
    $match:{firstName:"Hassan", lastName:"Mohamed"}
},{
    $lookup:{
        from:"Course",
        localField:"courses.courseID",
        foreignField:"_id",
        as:"Courses"
    }
}]);


//4
db.Student.aggregate([
    {
    $match:{firstName:"Hassan", lastName:"Mohamed"}
    },{
    $lookup:{
        from:"Faculty",
        localField:"facultyID",
        foreignField:"_id",
        as:"faculty"
    }
    }
]);

