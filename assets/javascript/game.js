//JQuery waits for doc to load completely before starting JS.
$(document).ready(function() {

//annual bonus given a random amount on click of button
$("#bonus-button").on("click", function() {

    //annual bonus given a random amount between 500 and 1000   
    var annualBonus = Math.floor(Math.random() * 1000 + 500);

    //annual bonus to appear on html
    $("#bonus-amount").append(annualBonus);

    //each pair of Jordans given a random number assignment
    var jordanCost = Math.floor(Math.random() * 1000 + 500);
    console.log(jordanCost);


    })



  


})

// })


/*
- make images clickable but not links to anything
do they need to be buttons?
``
    - each pair of jordans given a random cost



    - be able to add one pairs cost to the next
    - if sum > annual bonus, game over LOSS & loss++
    - if sum = annual bonus, game over WIN & win++
    */



    // function startGame() {

    // }