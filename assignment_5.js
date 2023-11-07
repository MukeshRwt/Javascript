// Q_1 find the product 
function Find_prod(arr){
   let prod = 1;
for(let i=0;i<arr.length;i++){
prod = prod*arr[i];
}
return  prod;
}
let arr = [5, 1, 2, 3, 4, 5];
let result = Find_prod(arr);
console.log(" product = ", result);

// Q_2 find the sun
function find_sum(arr2){
   let sum = 0;
   for(let i =0;i<arr2.length;i++){
       sum +=arr2[i];
   }
   return sum;
}
let arr2 = [1, 2, 3, 4, 5]
let result2= find_sum(arr2);
console.log( "sum = "+result2);

// Q-3 
function findCont(arr3,num){
   let   count = 0;
  for(let i =0;i<arr3.length;i++){
      if(num == arr3[i]){
          count++;
      }
  }
  return count++;
    }
  let arr3 = [4,3,3,1,2]
  let num =3
  let res = findCont(arr3,num);
  console.log('no of occurrence' ,res);


  // Q-4 Even odd
function findEvenOdd(A){
   let sumA =0;
   let sumB=0;
   for(let i = 0; i<A.length;i++){
       if(A[i]%2==0){
          sumA = sumA+A[i];
       }
   else{
       sumB = sumB+A[i];
   }
   }
   return [sumA, sumB];
}
let A = [1, 2, 3, 4 ,5 ,6,7];
let result1 = findEvenOdd(A);
console.log( "sum of even or odd element = ",result1);


// Q-5 no is present or not 
function find_num(arr4,f){
   for(let i = 0; i<arr4.length;i++){
       if(f===arr[i]){
           return 'Yes'
       }
       else{
           return 'No'
       }
   }
}
let arr4 = [1,2,3,4,5,2];
let f= 6;
console.log('number  present -> ',find_num(arr4,f));


//  Q-6 higher age 
// function highAge(age){
//     let arrresult =[];
//     for(let i = 0; i<age.length;i++){
//         if(age[i]>=18){
//             arrresult.push(age[i]);
//         }
//     }
//     return arrresult
// }
// age = [10, 20, 30, 23, 13, 18, 6];
// let result6 = highAge(age);
// console.log(result6);

// using filter 
function highAge(age){
   let hAge = age.filter(a => a>=18)
   return hAge; 
 }
 age = [10, 20, 30, 23, 13, 18, 6];
 let result6 = highAge(age);
 console.log("higher age " , result6);
 

//  Q-7
 function Inc_Arr(arr7){
   let incArr = arr7.map(num => num+1);
     return incArr;
 }
 let arr7 = [1, 2, 3, 4, 5, 6, 7];
 let result7 =Inc_Arr(arr7);
 console.log(result7);


 // Q -8 pass or not 
function isAllPass(marks){
   for(let i =0;i<marks.length;i++){
    if(marks[i]>32){
     return 'Yes'
    }
    else{
      return 'No'
    }
   }
}
let marks = [7, 44, 53, 64, 75, 86, 97];
let res1 =isAllPass(marks)
console.log(res1);

// Q- 9 Unique color shirt 
let shirts = [6,3,2,4,1,2,3];
let count =1;
for(let i =0; i<shirts.length;i++){
    if(shirts[i] !==shirts[i+1]){
     count=count+1;
    }
    }
 
 console.log("Unique shirt" , count);


 // Q-10 min and max
function min_max(Arr){
   let min = Arr[0];
let max = Arr[0];
for(let i =0; i<Arr.length;i++){
   if(Arr[i]>max){
       max = Arr[i];
   }
   if(Arr[i]<min){
       min =Arr[i];
   }
   }
    return console.log(min , max);
}
let Arr =  [100, 20, 30, 23, 13, 18, 6];
console.log(min_max(Arr));