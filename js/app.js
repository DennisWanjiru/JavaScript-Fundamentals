'use strict';

var user_input, y,
    x = Math.round(Math.random() * 20),
    name = prompt("Hello, What is your Name?");

    //User Input Validation
    // var inputValidation = function  () {
    //     y = Number(user_input);

    //     if(user_input === null || user_input === "") {
    //         alert("You never entered any number. Please try again!");
    //         return "Done!";
    //     } else if(!Number.isInteger(y)) {
    //         alert(user_input + " is not a valid number!");
    //         return;
    //     }
    // }

    function thirdAttempt () {
        if (user_input < x) {
            user_input = prompt(user_input + " is too low. Give it a third attempt"); 
        } else {
            user_input = prompt(user_input + " is too high. Give it a third attempt");
        }    

        y = Number(user_input);

        //User Input Validation
        if(user_input === null || user_input === "") {
            alert("You never entered any number. Please try again!");
            return "Done!";
        } else if(!Number.isInteger(y)) {
            alert(user_input + " is not a valid number!");
            return;
        }

        if (user_input == x) {
            alert("Good! You got it in three attempt");
        } else  {
            alert("Sorry! My number is " + x);
        }
    }

    function secondAttempt() {
        if( user_input > x) {
            user_input = prompt(user_input + " is too high. Give it a second attempt");
        } else {
            user_input = prompt(user_input + " is too low. Give it a second attempt");
        }

        y = Number(user_input);

        //User Input Validation
        if(user_input === null || user_input === "") {
            alert("You never entered any number. Please try again!");
            return "Done!";
        } else if(!Number.isInteger(y)) {
            alert(user_input + " is not a valid number!");
            return;
        }


        //First Condition == /*Second Level */
        if (user_input == x) {
            alert("Congrats! You got it in two attempt");
        } 
        
        //Second Condition greater than x /*Second Level */
        else if (user_input > x) {
            thirdAttempt();
        }
            
        //Third Condition Less than x *Second Level */
        else if (user_input < x) {           
            thirdAttempt();
        } 
    }

    if(name === "null" || name === "") {
        name = "friend";
    }
    
    alert("Welcome " + name + ". So I have this number in my head between 0 and 20. I want you to give it a max of 3 guesses. Can you do that? ");

    //Function to detemine the coreect answer!
    function getAnswer() {
        user_input = prompt("First Attempt!");

        y = Number(user_input);

        //User Input Validation
        if(user_input === null || user_input === "") {
            alert("You never entered any number. Please try again!");
            return "Done!";
        } else if(!Number.isInteger(y)) {
            alert(user_input + " is not a valid number!");
            return;
        }

        //First Condition == /*First Level */
        if (user_input == x) {
            alert("Genius! You got it in a single attempt");
        } 
        
        //Second Condition greater than x /*First Level */
        else if (user_input > x) {
            secondAttempt();
        } 

        //Second Condition greater than x /*First Level */
        else if (user_input < x) {
            secondAttempt();
        }

    } getAnswer();
// }




        








