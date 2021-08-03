// Types in TS //
// var message:string = "Hi Kamran Jabbar"
// var number:number = 10
// var float_val:number = 10.3
// var condition:boolean = true
// var condition01: any = 123

// console.log(message)
// console.log(number)
// console.log(float_val)
// console.log(condition)
// console.log(condition01)





// Functions/Routens/Methods //
// let id: number;
// let student_name:string;
// let email:string;

// function setStudentValue(s_id:number, s_name:string, s_email:string) : void {
//     this.id = s_id;
//     this.student_name = s_name;
//     this.email = s_email
// }

// function printStudent() :  void {
    // console.log("The ID of student is " + this.id);
    // console.log("The Name of student is " + this.student_name);
    // console.log("The Email of student is " + this.email);
// }

// setStudentValue(1, "Kamran Jabbar", "kamranajabbar@gmail.com");
// printStudent();





// OOP bases example with constructor  (Setter/getter function) //
// class Student {
//     id: number;
//     student_name:string;
//     email:string;

//     constructor(s_id:number, s_name:string, s_email:string) {
//         this.id = s_id;
//         this.student_name = s_name;
//         this.email = s_email
//     }

//     printStudent() : void {
//         console.log("The ID of student is " + this.id);
//         console.log("The Name of student is " + this.student_name);
//         console.log("The Email of student is " + this.email);
//     }
// }

// let student = new Student(1, "KJ", "kj@live.com");
// console.log(student);
// student.printStudent();






// OOP bases example without constructor (Setter/getter function) //
// class Student {
//     id: number;
//     student_name:string;
//     email:string;

//     setStudentValue(s_id:number, s_name:string, s_email:string): void {
//         this.id = s_id;
//         this.student_name = s_name;
//         this.email = s_email
//     }

//     printStudent(): void {
//         console.log("The ID of student is " + this.id);
//         console.log("The Name of student is " + this.student_name);
//         console.log("The Email of student is " + this.email);
//     }
// }

// let student = new Student();
// console.log(student);
// student.setStudentValue(2,"AJ","aj@gmail.com");
// student.printStudent();




//  //
import { TaskCollection } from "./taskCollection";

let task01: TaskCollection = new TaskCollection();

task01.addTodo("Get Mango");
task01.addTodo("Get Apple");
task01.printAll();

task01.taskDone(2);
task01.printAll();

task01.addTodo("Eggs");
task01.addTodo("Meats");
task01.getTodoById(3);
