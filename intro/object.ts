function createUser({name:string,isPaid:boolean}){
}
createUser({name:'raj',isPaid:false})


//Type Aliases
type User={
    name:string;
    email:string;
    isActive:boolean

}

function createUser1(user:User):User{
    return {name:"",email:'',isActive:true}

}

createUser1({
    name:'raj',
    email:'',
    isActive:true
})



//Read Only and optional 

type User1={
    readonly _id:string       //readonly defines it can't be changed in future
    name:string
    email:string
    isActive:boolean
    creditcardDetails ?:number   // ? defines that this parameter is optional for this object


}

let Raj:User1={
    _id :"1234",
    name:"h",
    email:"r@r.com",
    isActive:false
    //here i am not giving creditcardDetails so it is fine because that is optional.
}

// Raj._id="2345"   this is not possible

//............................................................................//

type cardNumber={
    cardNumber:string
}
type cardDate={
    cardDetails:string
}

type cardDetails=cardNumber &cardDate &{
    cvv:number
}









export {}