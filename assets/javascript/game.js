//JQuery waits for doc to load completely before starting JS.
$(document).ready(function() {

//variable to track user's total
var counter = 0;    

var wins = 0;

var losses = 0;

//annual bonus given a random amount on click of button
$("#bonus-button").on("click", function() {

    //annual bonus given a random amount between 500 and 1000   
    var annualBonus = Math.floor(Math.random() * 1000) + 500;
    

    //annual bonus to appear on html
    $("#bonus-amount").append(annualBonus);

    //each pair of Jordans given a random number assignment between 10 and 100
    var jordanCost = Math.floor(Math.random() * 100) + 10;

    //make images clickable
    $(".shoe-image").on("click", function() {

       counter += 10; 

       alert("You clicked this shoe " + counter + "times.");


    })

  
    })


      

        //output how many times the shoe is clicked
        // $(".clicks").append(counter);

        //if (counter === annualBonus) {
        //     wins++;
        //     alert("You win!");
        // } else if (counter > annualBonus) {
            // losses++;
            // alert("You lose!")
        





    // $("#ones").append(jordanCost);


    })



  //function newGame() {
//       wraps whole game together; keep things in this
//   }






/*

    - each pair of jordans given a random cost



    - be able to add one pairs cost to the next
    - if sum > annual bonus, game over LOSS & loss++
    - if sum = annual bonus, game over WIN & win++
    */



    // function startGame() {

    // }

    // wins and losses happen outside of game loop because they aren't changing; just keep going forever.

    // start counts at 0 for random generator