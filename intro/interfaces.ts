//interfaces is like type in ts but it is kind of class

interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    startTrail():string           //this line ensure that the return type of the function should be string type.
    getCoupon(couponnmae:string,value:number):number

}

interface User{
    githubToken:string            //iterface allow's to reopening it self.
}

interface Admin extends User{
    role:"admin"|"ta"|"learner"        //interface allow's inheritance


}

const Raj:User ={
    dbId:22,
    email:"r@R.com",
    userId:2211,
    githubToken:'err',
    startTrail:()=>{
        return 'trail Started'
    },
    getCoupon(name:'Raj',gr:20){
        return 28
    }
    
}

const Raj1:Admin ={
    dbId:22,
    role:'admin',
    email:"r@R.com",
    userId:2211,
    githubToken:'err',
    startTrail:()=>{
        return 'trail Started'
    },
    getCoupon(name:'Raj',gr:20){
        return 28
    }
    
}