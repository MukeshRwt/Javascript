// Q-1. Add Two Number 

function addTwoNum(a,b){
    return `${a+b}`;

}
let a= 10 ;
let b= 5;
 let res = addTwoNum(a,b);
console.log("Addition of  two number = " +res);

// Q-2. Finding if the conditions are obeyed or not 

function is_Valid(num1,num2){
    if((num1<10) && (num1>num2)){
  return true;
    }
    else{
        return false;
    }
}
let num1 = 5;
let num2 = 3;
console.log(is_Valid(num1,num2));

// Q-3. Check the condition 

function check(num1,num2){
    if(num1%10==0 || num2%10==0){
        return true;
    }
    else{
        return false;
    }
}
let num1=12;
let num2 = 20;
console.log(check(num1,num2));

// Q-4. Find the first digit of a 4 digit nimber 

function first_digit(n){
    var fdigit = n;
      if(n>999 && n<=9999){
      fdigit=parseInt(fdigit/1000);
      return 'first digit '+fdigit;
      }
      else{
        return 'invalid input';
      }
}
var n =4544;
console.log(first_digit(n));

// Q-5. Find the last digit of a 4 digit nimber 

function last_digit(n){
    let lastDigit=0;
        lastDigit=n%10;
         return lastDigit;
    }

const n =5556;
let res = last_digit(n);
console.log('last digit ',res);


// Q -6. Find the remainder 

function find_the_remainder(num1, num2){
    const rem = num1%num2;
   return rem;
}
const num1 = 9;
const num2 = 2;
 let res = find_the_remainder(num1,num2);
 console.log( 'remainder is '+res);

// Q-7. multiply two number

function mul_two_number(a,b){
    const mul =a*b;
    return mul;
}
const a  =2;
const b=5;
 const res = mul_two_number(a,b);
 console.log(res);

 // Q-8 marks calculator 

function sum(subj1,subj2,subj3){
    const tmarks = subj1+subj2+subj3;
   console.log("Total marks: "+tmarks);
   }
   function average(subj1,subj2,subj3){
       const avg = ((subj1+subj2+subj3)*100)/300;
       console.log("Avarage: "+avg);
   }
   const subj1 = 50;
   const subj2 = 20;
   const subj3 = 100;
   sum(subj1,subj2,subj3);
   average(subj1,subj2,subj3)