//JQuery waits for doc to load completely before starting JS.
$(document).ready(function() {

//variable to track user's total
var annualBonus = 0;

var counter = 0;    

var wins = 0;

var losses = 0;

var shoes = $("#shoes");

//each pair of Jordans given a number chosen from this array
var jordanPrice = [100, 10, 5, 1];

function gameReset() {
// set counters to zero 
    counter = 0;

    $("#running-total").text(`$ ${counter}`);

    // set getthatcash to zero
    $("#bonus-amount").text("zero")

    //total spent to zero



//reassign values of buttons to rerandomize
var annualBonus = Math.floor(Math.random() * 500) + 100;

$("#bonus-amount").text(`$ ${annualBonus}`);

}

//button click to reset game back to zero
$("#reset-button").on("click", function() {

    gameReset()

})

//annual bonus given a random amount on click of button
$("#bonus-button").on("click", function() {

    //annual bonus given a random amount between 500 and 1000   
    var annualBonus = Math.floor(Math.random() * 500) + 100;
    
    //annual bonus to appear on html
    $("#bonus-amount").text(`$ ${annualBonus}`);


    // var jordanPrice = Math.floor(Math.random() * 100) + 1;

    //for loop to assign values for each Jordan pair
    for (var j = 0; j < jordanPrice.length; j++) {

        //create var for each Jordan
        var imageShoe = $("<img>");

        //each var given class value using method
        imageShoe.addClass("shoe-image");

        //each var given src link to image
        imageShoe.attr("src", "assets/images/jordan-1.png");

        //each var given data attribute equal to array value of jordanCost
        imageShoe.attr("data-jordancost", jordanPrice[j]);

        //each image with all it's classes and attributes added to page
        shoes.append(imageShoe);
    } 

//make images clickable    
shoes.on("click", ".shoe-image", function() {

        var jordanCost = ($(this).attr("data-jordancost"));

        jordanCost = parseInt(jordanCost);

       counter += jordanCost; 

       $("#runningtotal").text(`$ ${counter}`);

       //checking to see if total amount is equal to annualBonus 
       if (counter === annualBonus) {

           alert("You win!");
           wins++;
           $("#win-total").text(wins);
           gameReset();


       //add else if condition    
       } else if (counter >= annualBonus) {

           alert("You lose");
           losses++;
           $("#loss-total").text(losses);
           gameReset();
       }

      
    })

})
    })



  

//hide play again button then once get that cash is pressed, hide get cash and show the play again


