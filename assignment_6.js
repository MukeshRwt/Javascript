// Q- 1 Count character 
function countCharecter(str){
    let countA = 0;
    let countD= 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='A'){
            countA++;
        }
        else if(str[i]==='D'){
            countD++;
        }
    }
    return[ countA, countD];
}
let str ='AbDAAaDd';
const result1 = countCharecter(str);
console.log(result1.join(" "));

// Q-2- Count the Heads
function CountHead(str){
    let count =0;
    for(let i=0;i<str.length;i++){
        let letter = str[i].toLocaleLowerCase();
        if(str[i]===letter){
            count++;

        }
    }
    console.log('head count ->',count);
}
let string2 ='prepbytes';
CountHead(string2);




// Q-3- program to count the number of vowels 

const vowels = ["a", "e", "i", "o", "u"]

function count_Vowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

const string = 'prepbytes'

const result = count_Vowel(string);

console.log(result);


// Q4 - find length 
function length(strign){
    let length=strign.length;
    return  `length of string = ${length}`;
}
let string4 = "CeDqe";
console.log(length(string4));


// Q -5 find the winner 
function Game_winner(score){
    let player1 ='Aditiya';
    let player2 ='Danish';
    let countA = 0;
    let countD= 0;
    let winner = ' ';
    for(let i=0;i<score.length;i++){
        if(score[i]==='A'){
            countA++;
        }
        else if(score[i]==='D'){
            countD++;
        }
    }
    if(countA>countD){
        winner =' Aditya';
    }
    else if(countA<countD){
    winner = 'Danish';
    }
    else{
        winner = 'Draw';
    }
    return `Winner --> ${winner}`;
  }
  let score = 'ADDAAADD';
  console.log(Game_winner(score))


//   Q-6- join String

function JoinString(s,p){
    let concatestring =s.concat(p);
    return `Concatenated String -> ${concatestring}`
}
let s ='Hello my name '
let p = 'is Mukesh Rawat'
let res6 = JoinString(s,p);
console.log(res6);


// Q - 7  plaindrome check 
function Plain_check(word){
    let wordrev = word.split('').reverse().join('');
   if(word === wordrev){
    return 'Yes';
   }
   else{
     return 'No';
   }
   
 }
 let word ='naman';
 let res = Plain_check(word)
 console.log(res);

 // Q- 8 Reverse the String 
function Revese_String(String){
    let  revString =String.split('').reverse().join('');
  return `Reverse String is - ${revString}`;
  }
  let String = 'i am utkarsh raj';
  console.log(Revese_String(String));


// Q -9 match the String 
function String_match(str1,str2){
    if(str1 ===str2){
        return 'yes'
    }
    else{
        return 'no';
    }
    }
    let str1='Prepbytes';
    let str2='Prepbytes';
    console.log(String_match(str1,str2));


    // Q- 10 String Replace 
function Replace(Str){
    let Replacestr =Str.replace('you', 'Prepbyte');
    return `updated String -> ${Replacestr}`
    }
    let Str ='Hi i am you';
    console.log(Replace(Str));

// Q- 11 Split the String 
function Split_the_String(sTr){
    let splitsTr =sTr.split('')
    return `Splitted String -> ${splitsTr}`
    
}
let sTr ='i am mukesh rawat'
console.log(Split_the_String(sTr));


// Q -12 Count vowels and consonants

function vowels_consonants_count(string){
    let count = 0;
    for(let i = 0;i< string.length;i++){
        let letter = string[i].toLocaleLowerCase();
        if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u'){
            count++
        }
    }
    return `Consonants count ->${string.length-count}, Vowels Count -> ${count}`
    }
    let string13 = "Prepbytes";
    let res13 = vowels_consonants_count(string13)
    console.log(res13);