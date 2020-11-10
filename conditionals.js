var numClicks =  0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

	function countClick(event) {
	    event.preventDefault();

		// Increment a variable that tracks the
		// number of button clicks
        numClicks++;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(numClicks);

		// When the count gets to 10, reset it to 0
        if (numClicks === 10)
        {
            numClicks = 0;
        }
    }


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var birthYearInput = parseInt($("#birthYear").val());
        var age = 2020 - birthYearInput;
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18)
        {
            $("#birthYearOutput").text("Child");
        }
        // If they are 18 or over, print "Adult" instead
        else
        {
            $("#birthYearOutput").text("Adult");
        }
    }

    function calcSalesTax(event) {
        event.preventDefault();
        var tax = 0;
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var userPurchaseAmount = $("#purchaseAmount").val();
        // Get the state from the text box with ID "state"
        var userState = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if (userState === "WI")
        {
            tax = .05;
        }
        else if (userState === "IL")
        {
            tax = .08;
        }
        else if (userState === "MN")
        {
            tax = .075;
        }
        else if (userState === "MI")
        {
            tax = .055;
        }
        else
        {
            alert("Error");
        }
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        var salesTaxAmount = userPurchaseAmount * tax
        $("#salesTaxOutput").text(salesTaxAmount);
        // If the user enters a state not listed above,
        // print "Error" instead
    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        var userCatsAge = parseInt($("#catAge").val());
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if(userCatsAge <2)
        {
            $("#catAgeOutput").text("kitten chow");
        }
        else if(userCatsAge < 11)
        {
            $("#catAgeOutput").text("adult chow");
        }
        else if(userCatsAge > 10)
        {
            $("#catAgeOutput").text("senior chow");
        }
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"
    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var faceDesc;
        var suitDesc;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if(faceValue === 1)
        {
            faceDesc = "Ace";
        }
        else if(faceValue === 2)
        {
            faceDesc = "2";
        }
        else if(faceValue === 3)
        {
            faceDesc = "3";
        }
        else if(faceValue === 4)
        {
            faceDesc = "4";
        }
        else if(faceValue === 5)
        {
            faceDesc = "5";
        }
        else if(faceValue === 6)
        {
            faceDesc = "6";
        }
        else if(faceValue === 7)
        {
            faceDesc = "7";
        }
        else if(faceValue === 8)
        {
            faceDesc = "8";
        }
        else if(faceValue === 9)
        {
            faceDesc = "9";
        }
        else if(faceValue === 10)
        {
            faceDesc = "10";
        }
        else if(faceValue === 11)
        {
            faceDesc = "Jack";
        }
        else if(faceValue === 12)
        {
            faceDesc = "Queen";
        }
        else if(faceValue === 13)
        {
            faceDesc = "King";
        }
        else
        {
            alert("Card not identified")
        }
        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if (suit === 1)
        {
            suitDesc = "Clubs";
        }
        else if (suit === 2)
        {
            suitDesc = "Spades";
        }
        else if (suit === 3)
        {
            suitDesc = "Hearts";
        }
        else if (suit === 4)
        {
            suitDesc = "Diamonds";
        }
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(`${faceDesc} of ${suitDesc}`);
    }

});