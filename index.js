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