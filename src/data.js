const data={
    admin:[
        {id:1,name:"admin",email:"admin@gmail.com",password:"admin"}
    ],
    faculty:[
        {id:1,name:"faculty",email:"faculty1@gmail.com",password:"faculty1",branch:"cse",phone:"99999991"},
        {id:2,name:"faculty",email:"faculty2@gmail.com",password:"faculty2",branch:"cse",phone:"99999992"},
        {id:3,name:"faculty",email:"faculty3@gmail.com",password:"faculty3",branch:"cse",phone:"99999993"},
        {id:4,name:"faculty",email:"faculty4@gmail.com",password:"faculty4",branch:"cse",phone:"99999994"},
        {id:5,name:"faculty",email:"faculty5@gmail.com",password:"faculty5",branch:"cse",phone:"99999995"},
        {id:6,name:"faculty",email:"faculty6@gmail.com",password:"faculty6",branch:"cse",phone:"99999996"},
        {id:7,name:"faculty",email:"faculty7@gmail.com",password:"faculty7",branch:"cse",phone:"99999997"},
        {id:8,name:"faculty",email:"faculty8@gmail.com",password:"faculty8",branch:"cse",phone:"99999998"},
        {id:9,name:"faculty",email:"faculty9@gmail.com",password:"faculty9",branch:"cse",phone:"99999999"},
        {id:10,name:"faculty",email:"faculty10@gmail.com",password:"faculty10",branch:"cse",phone:"999999910"},
    ],
    student:[
        {id:1,name:"student",email:"student1@gmail.com",password:"student1",branch:"react1",phone:"99988991"},
        {id:2,name:"student",email:"student2@gmail.com",password:"student2",branch:"react1",phone:"99988992"},
        {id:3,name:"student",email:"student3@gmail.com",password:"student3",branch:"react1",phone:"99988993"},
        {id:4,name:"student",email:"student4@gmail.com",password:"student4",branch:"react3",phone:"99988994"},
        {id:5,name:"student",email:"student5@gmail.com",password:"student5",branch:"react3",phone:"99988995"},
        {id:6,name:"student",email:"student6@gmail.com",password:"student6",branch:"react3",phone:"99988996"},
        {id:7,name:"student",email:"student7@gmail.com",password:"student7",branch:"react2",phone:"99988997"},
        {id:8,name:"student",email:"student8@gmail.com",password:"student8",branch:"react2",phone:"99988998"},
        {id:9,name:"student",email:"student9@gmail.com",password:"student9",branch:"react2",phone:"99988999"},
        {id:10,name:"student",email:"student10@gmail.com",password:"student10",branch:"react3",phone:"999889910"},
    ],
    courses:[
        {id:1, name:"react1", price:1000, days:111},
        {id:1, name:"react1", price:1000, days:111},
        {id:1, name:"react1", price:1000, days:111},
    ],
    slot:[
        {id:1, name:"7-8"},
        {id:2, name:"8-9"},
        {id:3, name:"9-10"},
        {id:4, name:"10-11"},
        {id:5, name:"11-12"},

    ],
    batch:[],
    menu:[
       { lable:"Admin", to:"/Admin"},
       { lable:"Faculty" ,to:"/Faculty"},
       { lable:"Student" ,to:"/Student"},
       { lable:"Courses" ,to:"/Courses"},
       { lable:"Slot" ,to:"/Slot"},
       { lable:"Chart" ,to:"/Chart"},
       { lable:"Graph" ,to:"/Graph"},
       { lable:"Attendance" ,to:"/Attendance"},
       { lable:"Planner" ,to:"/Planner"},


    ],
}
export default data