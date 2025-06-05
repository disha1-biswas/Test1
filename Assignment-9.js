const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Choose a task:");
console.log("1. Even or Odd Checker");
console.log("2. Positive, Negative, or Zero");
console.log("3. Age-based Eligibility");
console.log("4. Number Range Validator");
console.log("5. Check Number Equality");
console.log("6. Simple Grading System");
console.log("7. Divisibility Checker (5 and 11)");
console.log("8. Find the Largest of Three Numbers");
console.log("9. Leap Year Validator");
console.log("10. Vowel or Consonant");

rl.question("Enter a number between 1-10 to choose a task: ", (choice) => {
  choice = parseInt(choice);

  if (choice === 1) {
    rl.question("Enter a number: ", (num) => {
      num = parseInt(num);
      console.log(num % 2 === 0 ? "Even" : "Odd");
      rl.close();
    });
  } else if (choice === 2) {
    rl.question("Enter a number: ", (num) => {
      num = parseInt(num);
      if (num > 0) {
        console.log("Positive");
      } else if (num < 0) {
        console.log("Negative");
      } else {
        console.log("Zero");
      }
      rl.close();
    });
  } else if (choice === 3) {
    rl.question("Enter your age: ", (age) => {
      age = parseInt(age);
      console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");
      rl.close();
    });
  } else if (choice === 4) {
    rl.question("Enter a number: ", (num) => {
      num = parseInt(num);
      console.log(num >= 10 && num <= 20 ? "In range" : "Out of range");
      rl.close();
    });
  } else if (choice === 5) {
    rl.question("Enter first number: ", (num1) => {
      rl.question("Enter second number: ", (num2) => {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 === num2) {
          console.log("Numbers are equal");
        } else {
          console.log(num1 > num2 ? "First number is larger" : "Second number is larger");
        }
        rl.close();
      });
    });
  } else if (choice === 6) {
    rl.question("Enter your score (0-100): ", (score) => {
      score = parseInt(score);
      if (score >= 90) {
        console.log("Grade A");
      } else if (score >= 75) {
        console.log("Grade B");
      } else if (score >= 50) {
        console.log("Grade C");
      } else {
        console.log("Fail");
      }
      rl.close();
    });
  } else if (choice === 7) {
    rl.question("Enter a number: ", (num) => {
      num = parseInt(num);
      console.log(num % 5 === 0 && num % 11 === 0 ? "Divisible by both 5 and 11" : "Not divisible by both");
      rl.close();
    });
  } else if (choice === 8) {
    rl.question("Enter first number: ", (num1) => {
      rl.question("Enter second number: ", (num2) => {
        rl.question("Enter third number: ", (num3) => {
          num1 = parseInt(num1);
          num2 = parseInt(num2);
          num3 = parseInt(num3);
          if (num1 >= num2 && num1 >= num3) {
            console.log("Largest number is:", num1);
          } else if (num2 >= num1 && num2 >= num3) {
            console.log("Largest number is:", num2);
          } else {
            console.log("Largest number is:", num3);
          }
          rl.close();
        });
      });
    });
  } else if (choice === 9) {
    rl.question("Enter a year: ", (year) => {
      year = parseInt(year);
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
      } else {
        console.log("Not a leap year");
      }
      rl.close();
    });
  } else if (choice === 10) {
    rl.question("Enter an alphabet character: ", (char) => {
      char = char.toLowerCase();
      console.log(["a", "e", "i", "o", "u"].includes(char) ? "Vowel" : "Consonant");
      rl.close();
    });
  } else {
    console.log("Invalid choice");
    rl.close();
  }
});
