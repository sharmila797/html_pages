let f=1,i=6;
for(let n=1;n<=i;n++)
{
f=f*n;
}
console.log("factorial: ",f)


let leap=10000;
if((leap %4 ==0) || ((leap %100 ==0)&&(leap%400 ==0)))
{
    console.log("leap year")
}
else{
    console.log("not leap year")
}

n=20;
switch(n)
{
    case 1:
        console.log("jdhkjhj")
        break;
        case 2:
            console.log("22222jdhkjhj")
        break;
default:
    console.log("000000000jdhkjhj")
        break;
}

let c;
 console.log(sample(2))
 sample(9)
 console.log("hjkhj", c)

function sample(a)
{
    if(a%2==0)
    {
        let c;
        return c="Even"
    }
    else
    {
        let c;
        return c="odd"
    }
}


let l=9023;
let funcs=(a)=>{return l*5;}

console.log(funcs(l))



let user={}

user={
    name:"Sharmila",
    age:26,
    address:"nfj jnji jhiu dfer kkoi",
    place:'chennai'
}
console.log(user)

user.name="S.Sharmila"

console.log( user)

let s="SS"

user.name=s+" "+user.name;
console.log(user)

// delete user.name;
console.log(user.name)
console.log(user)

for(  key in user)
{
    console.log("iii",key);
    console.log("userrr",user[key])
    console.log("age",key.age)
}

let b=user
console.log("dferfgr",b)
user.age=22
console.log(b)



function A()
{
    this.a=10,
    this.b=55,
    this.c=function(n)
    {
return this.a+this.b+n
    }
    
}
let zz=new A()
console.log(zz.c(45))

let a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0;i<a.length;i++)
{
    for(let j=0;j<a[i].length;j++)
    {
        console.log(a[i][j])
    }
}


let set=new Set();
set.add('ghgbfhydueh')
.add(86859898745)
.add('fgvrfvbf')
.add(8)
.add(9)
.add(7)
.add(7)
.add(9)
.add(8)
.add(2);

// set.clear();
console.log("set value",set)



let bb=new Date("1900-09-22");

console.log(bb.getFullYear())


function addd(n)
{
    if(n==1)
    {
        return 1;
    }
return n+addd(n-1);
}
console.log(addd(15))


class User
{
 #name; #age  ; #dob;
constructor(name,age,dob){
    this.#name=name
    this.#age=age
    this.#dob=dob
}
display(){
console.log(this.#age)
console.log(this.#name)
return this.#dob;
}
get age(){
return aa.#age;
}
get name(){
    return aa.#name;
}
set name(name){
this.#name=name;
}
set age(age){
    this.#age=age;
}

}

let aa=new User("fgfgg",12,9908);
console.log("name details",aa.name,aa.age) 
aa.display()
console.log(aa.display())
aa.name="sharmila"
aa.age=26 + 1 +" only";
console.log(aa.name)
console.log(aa.age)



class AA{
   name;
   age;
constructor(n,a){
this.name=n;
this.age=a
}
disp(){
    console.log("AA")
    console.log("444",this.name)
    console.log("555",this.age)
  console.log("666",this.dob)
}
    
}
class BB extends AA{

    dob;
    constructor(n,a,d){
        super(n,a);
        // this.name=n;
        this.dob=d;
    }
   
    disp(){
        console.log("BB")
        console.log("111",this.name)
        console.log("222",this.age)
        console.log("333",this.dob)
        return 23+6;
    }
}

  let C=new AA("ss",22,2222);
let D=new BB("ssar",23,2000)

// console.log(D)
console.log(C.disp())


