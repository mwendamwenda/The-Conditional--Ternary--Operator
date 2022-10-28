// console.log('The-Conditional')

const age = 40;
// age >= 18 ? console.log('i like to drink wine') : //this is like else statement
// console.log('i would like to take water');// the conditional operator has 3 parts i.e the condtion,the if and the else part

const drink = age >= 18 ?  'wine': 'Water';
console.log(drink);

//for if statement

let drink2;
if(age >= 18){
    drink2 = 'wine'
}else{
    drink2 = 'water'
}
console.log(drink2);
//we can use the tenery operator on template literals
 //eg
 console.log(`i like drinking ${age >= 18 ?  'wine': 'Water'}`)