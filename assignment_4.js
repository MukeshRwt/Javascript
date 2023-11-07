 // Q-1- find the Smaller angle 
function Minimal_Angle(hours,minutes) {
 
    if (hours < 0 || hours > 12 || minutes < 0 || minutes >= 60) {
        return "Invalid input";
    }

    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = minutes * 6;


    const angle = Math.abs(hourAngle - minuteAngle);

    return Math.min(360 - angle, angle);
}
const hours = 6;  
const minutes = 0;  
const result = Minimal_Angle(hours,minutes);
console.log(result);

// Q -2
function check_leap(year){
    if(year%4==0 && year %100 !=0){
       return "Leap year";
    }
    else{
        return "Non Leap year"
    }
}
let year = 2024;
let resut = check_leap(year);
console.log(resut);


// Q-3
function Perfect_Check(N) 
{
var temp = 0;
   for(var i=1;i<=N/2;i++)
     {
         if(N%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === N && temp !== 0)
        {
      return 'Yes'
        } 
     else
        {
          return 'No'
        }   
 } 
 console.log(Perfect_Check(3)); 

 // Q-4 
function Reverse_Number(number) {
    const reversedNumber = parseInt(number.toString().split('').reverse().join(''));
    return reversedNumber;
  }

  console.log(Reverse_Number(1900)); // Output: 91
  console.log(Reverse_Number(2012));


// Q-5 
  function Substring_Check(s1, s2) {
    if(s1.includes(s2)){
        return 'Yes';
    }
    else{
        return 'No';
    }
  }
  let s1= 'hiii this is Prepbuddy';
  let s2 = 'Prepbuddy';
  let result1 = Substring_Check(s1,s2)
console.log(result1);