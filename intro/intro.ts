let user ={name:"Raj",age:10}



console.log("raj");
console.log(user.name);




// functions

function addTwo(num:number){

    return num+2;
}

addTwo(5)



function addThree(num:number):number{

    return num+2;
}
//this will insure that function take a number as a input and it will return also a number.

let myValue=addTwo(5)


//syntax for arrow function
const hello=(s:string):string=>{
    return ''


}


//////////ARRAYS

const heros=['thor',"Loki","IronMan"]

heros.map((hero:string):string =>{
//this function will return a string and take input also a string.
return `hero is ${hero}`


})




/////never
function fail(msg:string):never{
    throw new Error(msg);
    //this function will never return a value.

}

