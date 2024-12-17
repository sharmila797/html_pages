//  let pn=12345678910n;
//  pn=pn+2024n;
// //  console.log(pn)


// let name="sharmila"
// console.log(`my name is ${name}`)

/* let input,ii;
input=prompt("what is your name??");
ii=confirm(input,"is it your name?"); */


// let a=29;
// if(a%2===0)
// {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


// console.log([]==[])



// const arr=[]
// arr[3]=5;
// arr.forEach(i =>{
//     console.log("entered for each",i)
// })

// for(const i of arr)
// {
//     console.log("entered for loop",i)
// }
//    for(let i=0;i<arr.length;i++)
//    {
//     console.log("entered for loop of i",arr[i])
//    }


//    let x=0;
 
//    if(!!++x)
//    {
//     console.log("true")
//    }
//    else{
//     console.log("false")
//    }

//    console.log(x)


   // const arr1=[1,2,3,4];
   // const str="1,2,3,4";
   // console.log(arr1==str)  
   
//    const name1="asdfgh";
// function DataT(){
//    let a=b=5;
//    console.log("function",delete a)
//    console.log("function b",delete b)
// }

//    DataT()
//    console.log("outside",delete name1)


// const name="asdfgh";
//   age=22;
// // console.log(delete name)
// // console.log(delete age)


// let newlist=[1].push(2);
// console.log(newlist.push(3))


// let newlist1 = [1].push(2);

// // // newlist.push(2);
// console.log("1111111",[1],newlist1); // Output: [1, 2]
// newlist1 = [1].push(3);
// console.log("222",[1],newlist1);
// //  newlist.push(3);
// // console.log(newlist); // Output: [1, 2, 3]


// let newlist = [1];
// newlist.push(2);
// console.log(newlist); // Output: [1, 2]
// newlist.push(3);
// console.log(newlist);


// a=10;
// const b=1+a;
// console.log(a+b) 

// let a;
// console.log(a);
//  a=10;
//  console.log(a)

//  // ReferenceError: Cannot access 'MyClass' before initialization

// class MyClass {
//   constructor() {
//     this.name = "Example";
//   }
// }

// var obj = new MyClass(); 

// a();
// let x=0;

// function a(){
//    console.log(x);
// }


// function x(){
//    let a=7;
//    function y(){
//       console.log(a);
//    }
//    return y;
// }
// var z=x();
// console.log(z)
// z();


// function createFunctions() {
//    let funcs = [];
//    for (let i = 0; i < 3; i++) {
//      funcs.push(function() {
//        console.log(i);
//      });
//    }
//    return funcs;
//  }
 
//  const functions = createFunctions();
//  functions[0](); // Logs: 0
//  functions[0](); // Logs: 1
//  functions[2](); // Logs: 2
 

//  function outerFunction() {
//    var counter = 0;  // Outer function variable
 
//    function innerFunction() {
//      counter++;  // Inner function accessing outer variable
//      console.log(counter);
//    }
 
//    return innerFunction;  // Returning the inner function as a closure
//  }
 
//  const increment = outerFunction();  // outerFunction is executed, returning innerFunction
//  increment();  // Logs: 1

//  console.log("checked")
//  increment();  // Logs: 2
//  increment();  // Logs: 3


// function createCounter() {
//    var count = 0;
//     function inner() {
//        count++;
//        console.log(count)
//        return count;
//    };

//    return inner;
// }

// createCounter()();
// createCounter()();
// const counter = createCounter();

// console.log(counter()); // 2
// console.log(counter());

// function multiplier(factor) {
//    return function(number) {
//        return number * factor;
//    };
// }


// console.log(multiplier(2)(5));
// console.log(multiplier(3)(10));
// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// function multiplier(factor) {
//    return function(number) {

//       console.log(factor,number);
//        return number * factor;
//    };
// }

// const double = multiplier(2);
// console.log(double(5)); // Output: 10

// setTimeout(function (){
//    console.log("settimeout")
// })

// function x(callback){

//    console.log("log of x");
//    callback();
// }
 
// x(function (){
//    console.log("log of y");
// })


// console.log("start")

// function x(){
//    console.log("x function")
// }

// x();

// setTimeout(x,0)

// console.log("end")


// const a=[2,4,56,7,1]

// const b=a.map(x=> x*5 )
  
// console.log(b)

// var objA={prop:42};
// var objB=objA;
// objB={check:90};
// console.log(objB,objA)


// var objA={prop:22}
// var objB=objA;
// objB={}
// console.log(objB,objA)


// console.log("ASD"+ +"null");


// var arr=[55,6,12,9,8,7]

// let sum=arr.reduce((max,current)=>{
//    if(max<current){
//       max=current;
//    }
//    return max;
// },0);
// console.log("sum value",sum)



// function fetchData(callback) {
//    setTimeout(() => {
//        callback("Data received!");
//    }, 5000);
// }

// fetchData((data) => {
//    console.log(data); // Output: "Data received!"
// });


// function fetchData() {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          reject("data not received");
//            resolve("Data received!");
          
//        }, 1000);
//    });
// }

// fetchData()
//     .then((data) => {
//         console.log(data); // Output: "Data received!"
//     })
//     .catch((error) => {
//         console.error("error values "+error);
//     });



// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received!");  // or reject("Error occurred!");
//         }, 3000);
//     });
// }

// async function handleData() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//         // document.getElementById("h1").innerHTML=data;
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// handleData();


function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data=null   //or "null"
           if(data){
            resolve(data)
           }
           else{
            reject("no data received")
           }
        }, 1000);
    }
    )
}

fetchData((data) => {
    if (data) { // Check if data is not null or undefined
        console.log(data.toUpperCase());
    } else {
        console.error("No data received or data is invalid.");
    }
});

fetchData().then((data)=>{
    console.log(data.toUpperCase());
}).catch((err)=>{
    console.log("no data received",err)
})
