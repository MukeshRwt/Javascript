// Q-1-Fing findGrades
function findGrades(marks){
    let grade;
    switch(true){
        case marks>=41 && marks<=50:
            grade = "A"
            break;
            case marks>=31 && marks<=40:
                grade = "b"
                break;
                case marks>=21 && marks<=30:
                    grade = "c"
                    break;
                    case marks>=11 && marks<=20:
                        grade = "d"
                        break;
                        case marks>=0 && marks<=10:
                            grade = "e"
                            break;
                            default:
                                grade="invalid input"
    }
    console.log("Grade:", grade );
    }
    const marks = 13;
    findGrades(marks);

    // Q-2 Get Value
function getValue(char){
    const charValueTable = {
        'p' : 'PrepBytes',
        'p' : 'PrepBytes',
        'z' : 'Zenith',
        'Z' : 'Zenith',
        'E' : 'Expert coder',
        'e' : 'Expert coder',
        'D' : 'Data Structure',
        'd' :  'Data Structure'
    };
    return charValueTable[char] || 'character not found';
}
const inputchar ='E';
const result = getValue(inputchar);
console.log(`Value for character ${inputchar} : ${result}`);

// Q-3 find the maximum out of three numbers
function max_out_of_three(a,b,c){
    let max =0;
    if(a <= b && b >= c){
      max =b;
    }
    else if(a >= b && a >= c){
       max = a;
    }
    else{
        max = c;
    }
    return max;
}
let a=5;
let b= 6;
let c =7;
console.log(max_out_of_three(a,b,c));

// Q-4********************Second smallest

function findSndSmallest(j,k,l){
    let sndSmall=0;
    if(j >= k && j <= l && k || j <= k &&  j >= l) {
        sndSmall=j;
    }
    else if(k >= j && k <= l || k>=l && k<=j){
        sndSmall=k;
}
else {
    sndSmall = l;
}
return sndSmall;
}
let j =2;
let k = 9;
let l = 23;
console.log(findSndSmallest(j,k,l));

// Q-5- Check wether the triangle is Acute or Obtuse
function triangle_check(x,y,z){
    if(x+y+z > 180){
        return 'not a Triangle';
    }
    if(x < 90 && y < 90  && z < 90){
      
        return 'Acute triangle';
    }
    else{
        return 'Obtuse triangle';
    }
}
let x = 60;
let y =100;
let z =20;
console.log(triangle_check(x,y,z));