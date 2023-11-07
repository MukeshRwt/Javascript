// Q-1  find the number of digit

function find_digit(N){
    let count=0;
    while(N!=0){

        N =parseInt(N/10);
        count++
    }
    return count;
}
let N = 1234;
let Res = find_digit(N);
console.log('digit :  ',Res);

// Q-2  find five 

function find_five(N1){
    let count=0;
    while(N1!=0){
        let lastdigit =(N1%10);
       if (lastdigit ==5){
        count++;
       }
        N1 = parseInt(N1/10)
    }
    return count;
}
let N1 = 15552345;
let rEs = find_five(N1);
console.log(rEs);

// Q-3  Find Sum

function find_sum(n1){
    let sum =0;
    for(let i=1;i<=n1;i++){
        if(i%2==0){
        sum = sum+i;
    }
    }
    return sum;
}
let n1 =6;
let res1 = find_sum(n1);
console.log('sum =',res1);

// Q-4 sum of digit 

function number_sum(n2){
    let sum=0;
    while(n2!=0){

        let lastdigit =(n2%10);
        sum = sum+lastdigit
        n2 = parseInt(n2/10)
    }
    return sum;
}
let n2 = 12345;
let res2 = number_sum(n2);
console.log('sum ',res2);


// Q-5 print the Odds

function odd(x){

    for(let i=2;i<=x;i++){
    if(i%2!=0){
    console.log(i)
    }
}
}
let x=10;
console.log(2);
odd(x);



// Q-6 print pattern

function print_pattern(N){
    for(let i=1;i<=N;i++){
        let row =' ';
        for(let j=1;j<=i;j++){
          row =row+'*'
        }
console.log(row);
    }
}
print_pattern(5);

// Q-7 prime of not
function  prime_check(number) {
    if (number <= 1) {
      return "no";
    }
    if (number <= 3) {
      return "yes";
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return "no";
    }
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return "no";
      }
    }
  
    return "yes";
  }
  
  const number = 5; 
  const result = prime_check(number);
  console.log(result);

  
// Q-8 print num

function printNumbers(num){
    for(let i=1;i <=num;i++){     
console.log(i);
    }
}
let num = 4;
 printNumbers(num);

// Q-9 print table 

function print_table(num2){
    for(let i=1;i<=10;i++){
       console.log(num2+'*'+ i+' = '+i*num2 ) 
        
    }
}
let num2 = 3;
print_table(num2);