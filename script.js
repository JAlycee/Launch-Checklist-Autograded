// Write your JavaScript code here!
document.getElementById("").addEventListener("submit", function(event) {
    event.preventDefault();
    let pilot = document.getElementById("pilotInputId").value;
    let copilot = document.getElementById("copilotInputId").value;
    let fuelLevel = document.getElementById("fuelLevelInputId").value;
    let cargoMass = document.getElementById("cargoMassInputId").value;

})

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });