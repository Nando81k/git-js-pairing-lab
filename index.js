// //Code your solutions in this file

// const fiveToOneHundred = () =>{
//     for(let i = 5; i <= 100; i++) {
//         console.log(i)
//     }
// }

// fiveToOneHundred();

const multiplesOfThree = () => {
    for(let i = 3; i <= 100; i++){
        if (i % 3 === 0) {
            i + 3
            console.log(i)
        }
    }
}

multiplesOfThree();


const multiplesOfThreeOrFive = () => { // initializing the arrow function
    for(let i = 3; i <= 100; i++){ //set the mutliple value of 3 and also telling it not exceed 100
        if (i % 3 === 0 || i % 5 === 0) { //if statement because we are looking for multiples of 3 or 5
            console.log(i) // console logging i because we have value set to it(3)
        }
    }
}

multiplesOfThreeOrFive();// calling the the variable


const untilNum = (num) => {
    for (let i = 0; i <= num ; i++) 
        console.log(i);
}

untilNum(60);

const multiply = (num1, num2) => {
    console.log(num1 * num2)
    return num1 * num2
}

multiply(5, 10023)

const add = (num1, num2) => {
    let sum = num1 + num2
    if(num1 === num2) {
        console.log(sum * 3)
        return sum * 3
    } else {
        console.log(sum)
        return sum
    }
}

add(3, 3);
add(5, 10);

const isNegative = (number) => {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isNegative(3));






const betweenTwentyAndFourty = (num) => {
    return num >= 20 && num <= 40 ;
}

console.log(betweenTwentyAndFourty(21));



const largest = (num1, num2, num3) => {
    if ( num1 > num2 && num1 > num3 ) {
        return num1;
    } else if (num2 > num3){
        return num2;
    } else {
        return num3;}
    }

    console.log(largest(4, 6, 8))