// Q-1- Create a fuction 
var obj = {
    name: '',
    setter: function( nam){
        this.name = nam;
        console.log("The name is "+ this.name);
    }
}
obj.setter('maxtern')


// Q-2- Delete a Parameter
var Obj ={
    name: 'mukesh',
    rollno: 31,
}
function rolldelete(rollobj){
 if(delete rollobj.rollno){
    console.log('true')
    console.log(Obj)
}
else{
    console.log('false')
}

}
rolldelete(Obj);


// Q-3- Check wether the package is Dream Package or not
var employee ={
    salary: 400000
}
function checkSalary( sl){
    if(sl.salary >= 500000){
       return 'Dream';
    }
    else{
        return 'NotDream';
    }
}
console.log(checkSalary(employee))



// Q-4- Check wether the object has a parameter or not
var obj={
    
}
function checkObj(){
if(Object.keys(obj).length===0){
    return true
}
return false
}
let res1 =checkObj(obj);
console.log(res1)





// Q-5 Merge the objects
var obj1={
name1: 'Lalit',
id: 123,
}
var obj2 ={
    State: 'Uttarakhand',
    code: 263656
}
function mergeObj(obj1,obj2){
   return {...obj1 ,...obj2 };
}
 let mergeObjs=mergeObj(obj1,obj2)
 console.log(mergeObjs)



// Q-6- Object Multiplyer
var data ={
    id :2,
    house:6,
}
function mulObj(object,N){
    let mul = 1;
    object= Object.values(data)
    for(let i=0;i<object.length;i++){
        mul = mul*object[i];

    }
    return `multiplication of two data =${mul} \n multiplication with N is = ${N*mul}`
}
let N=12
let res =mulObj(data,N);
console.log(res);



// Q-7- find the sum of object Menbers
var ObJ={
    a:1,
    b:2,
    c:3,
}
function sumOfObj(Obj){
    let sum=0;
     Obj =Object.values(ObJ);
    for(let i=0; i<Obj.length; i++){
        sum = sum+Obj[i]
    } 
return `sum of the numbers of the object = ${sum}`
}

let smobj =sumOfObj(ObJ);
console.log(smobj);


// Q-8- Check whether the Objects are same or not 
var object1={
    name: 'Mallu',
    age: 15

}
var object2={
    name: 'Mallu',
    age: 15

}
function isEqual(obj1 , obj2){
    obj1keys =Object.keys(object1);
    obj2keys = Object.keys(object1);
    
    if(obj1keys.length !==obj2keys.length){
        return false;
    }
    for(let objkeys of obj1keys ){
        if(obj1[objkeys] !== obj2[objkeys]){
            return false
        }
    }
    return true;
};
let result=isEqual(object1,object2);
console.log(result)