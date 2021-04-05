/*
Create a Blood Alcohol Content (BAC) calculator using jQuery. This form should use
appropriate form elements, such as <input type="number"> The form should be accessible.
Make sure that every input field has an associated label field.
 */
$(document).ready(function() {
    $("button").on("click", BACcalculator);
    $("#numBeers").on("change", updateDrinks);
    $("#numGlasses").on("change", updateDrinks);
    $("#numShots").on("change", updateDrinks);
});

//amount of alcohol consumed per beer
const alcPerBeer = 0.54;
//amount of alcohol consumed per glass of wine
const alcPerWine = 0.6;
//amount of alcohol consumed per shot
const alcPerShot = 0.6;

let numBeers = 0;
let numGlasses = 0;
let numShots = 0;
let totalDrinks = 0;

updateDrinks();

function updateDrinks () {
    //Determine the number of beers consumed
    numBeers = parseFloat($("#numBeers").val());
    console.log("Number of Beers: " + numBeers);
    let beerLiqOz = numBeers * alcPerBeer;
    //Determine the glasses of wine consumed(number)
    numGlasses = parseFloat($("#numGlasses").val());
    console.log("Glasses of wine: " + numGlasses);
    let wineLiqOz = numGlasses * alcPerWine;
    numShots = parseFloat($("#numShots").val());
    console.log("Number of Shots: " + numShots);
    let shotsLiqOz = numShots * alcPerShot;

    //Determine the total liquid ounces of alcohol consumed
    totalDrinks = beerLiqOz + wineLiqOz + shotsLiqOz;
    console.log($("#totalDrinks").text())
    $("#totalDrinks").text(totalDrinks);
}

function BACcalculator () {
    updateDrinks();

    //Calculate absorption rate
    let absorptionRate = (totalDrinks * 7.5)
    //Determine the person's weight
    let totalWeight = parseFloat($("#weight").val());
    console.log("Your total weight: " + totalWeight);
    let bac = absorptionRate / totalWeight;
    //Determine number of hours it has been since their first drink
    let numHours = parseFloat($("#numHours").val());
    console.log("Number of Hours Since First Drink: " + numHours );
    let finalBAC = bac - (numHours * 0.015);

    //finalTotal = final result of BAC test
    $("#bac").text(finalBAC.toFixed(3));

    //Should you drive home?
    if (finalBAC < 0.08) {
        alert("Have a good evening and drive safe!");
    }
    else {
        let waitTime = (finalBAC - 0.08) / 0.015;
        alert(`Please stick around for another ${waitTime.toFixed(3)} hours before leaving.`)
    }
}
    //How long should you wait before driving home?

    //$("#newTotal").text(newTotal.toFixed(2));

   // $(".output").show();
