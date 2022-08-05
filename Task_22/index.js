// // Accessing Object Properties

// // let person={fristName:"kumar",lastName:"bisen",color:"fair"}
// // document.getElementById("demo").innerHTML=person["fristName"] +" " + person["lastName"] + " his skintone is " + person["color"];

// // Using the JavaScript Keyword new
// let person=new Object();
// person.fristName="kumar";
// person.lastName= "bisen";
// person.age="22";
// person.skinTone="fair";

// document.getElementById("demo").innerHTML=
// person.fristName + " " + person.lastName + " " + person.age;

// JavaScript for...in Loop

// let person={
//     fristName:"kumar",
//     lastName:"bisen",
//     color:"fair",
//     nationality:"indian"
//     }
//     let txt=" ";
//     for(let x in person){
//         txt += person[x] + " ";
//     }x
//     person.age=22;     // Adding New Properties
//     delete  person.nationality;
//     document.getElementById("demo").innerHTML=txt + " " + person.age;

// Deleting Properties
//     let person={
//         fristName:"kumar",
//         lastName:"bisen",
//         color:"fair",
//         nationality:"indian"
//         }
//         delete  person.nationality;
//     document.getElementById("demo").innerHTML=person.fristName +" " + person.lastName +" " + person.nationality;


//     Nested Objects

// let myObj={
//     name:"rupesh",
//     age:22,
//     car:{
//         car1:"BMW",
//         car2:"Royal Rose",
//         car3:"mahindra"
//     }
// }
// document.getElementById("demo").innerHTML=myObj.name + " age is " + myObj.age + " near by car " + myObj.car.car2 + " " + myObj.car.car3;


// Nested Arrays and Objects


//     let myObj={
//         name:"rupesh",
//         age:22,
//         car:[
//             {name1:"ford",models:["it","is","cool",]},
//             {name1:"BMW",models:["big","lack","nice" ]},
//             {name1:"Royal Rose",models:["felling","creaze","take one tour"]}
//         ]
//     }
//     let txt=" ";
//     for (let i in myObj.car){
//        txt += "<h2>" + myObj.car[i].name1 +"</h2> ";
//        for (let j in myObj.car[i].models){
//             txt += myObj.car[i].models[j] + "<br>";
//        }
// }
//     document.getElementById("demo").innerHTML=txt;

// Adding a Method to an Object and Using Built-In Methods means toUpperCase() method

// let person = {
//     fristName: "kumar",
//     lastName: "bisen",
//     color: "fair",
//     nationality: "indian",
//     fullname: function () { return (this. fristName + " " + this. lastName + " " + this.nationality + " " + this.color).toUpperCase();}
// };
// document.getElementById("demo").innerHTML = JSON.stringify(person);

// JavaScript Events

// console.log("iam in event");
// document.getElementById("event").addEventListener
// ('click',function(){
//     console.log("you have click the heading")
// });

// // String Length

// let text="RUPESH BISEN";
// document.getElementById("demo").innerHTML =text.length;


// JavaScript Arrays

let car=["alto",
"mursidies",
"audi",
"royalrose",
 "volvo"];
document.getElementById("demo").innerHTML=car;