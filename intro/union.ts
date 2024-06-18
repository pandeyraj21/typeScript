let score:number |string =33
score="Raj"

// by using union we can use set of dtypes

type User1={
    name:string;
    email:string;
    isActive:boolean

}
type User2={
    name:string;
    email:string;
    

}

let Raj:User1 |User2 ={name:'raj',email:'r@r.com'}







//functions
function getDbId(id:number|string){
  
    if(id==='string'){
        id.toUpperCase
    }
}


//arrays
const superHero:(number|string)[]=[2,3,4,'kl']  


//variables

let seatAllotment :"aisle" |"middle"|"window"   //this variable can have only these values only
seatAllotment='window' //this is allowed
// seatAllotment='crew'  //this is giving error i can say not allowed
