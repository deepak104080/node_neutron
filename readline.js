const readline = require('readline');

//process - global object of Node

const read1 = readline.createInterface({input: process.stdin, output: process.stdout});

// read1.question('Enter your name.', (userInput) => {
//     console.log('User has entered - ', userInput);
//     read1.close();
// })

let num1 = 5;
let num2 = 6;
let count = 0;

read1.question(`\nEnter the sum of ${num1} and ${num2}\n`, (userInput) => {
    console.log('Sum entered by user - ', userInput);
    if(userInput == num1 + num2) {
        console.log('\n Your answer is correct.\n');
        read1.close();
    }
    else {
        read1.setPrompt('\n Your answer is incorrect. Plz enter again.');
        read1.prompt();
        count = count + 1;
        read1.on('line', (userInput) => {
            if(userInput == num1 + num2) {
                console.log(`\n Your answer is correct in attempt - ${count + 1}\n`);
                read1.close();
            }
            else {
                if(count >5) {
                    console.log('\n You have exceeded max attempts.\n');
                    read1.close();
                }
                count = count + 1;
                read1.setPrompt('\n Your answer is incorrect. Plz enter again.');
                read1.prompt();
            }
        })
    }
})


read1.on('close', () => {
    console.log('\n You have reached next level.');
})