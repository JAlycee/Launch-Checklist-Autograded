const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {
const form = document.querySelector("form")
if (form) {
    form.addEventListener("submit",handleSubmit);
}
});
function handleSubmit(event) {
    event.preventDefault();
    let pilot = document.getElementById("pilotInputId").value;
    let copilot = document.getElementById("copilotInputId").value;
    let fuelLevel = document.getElementById("fuelLevelInputId").value;
    let cargoMass = document.getElementById("cargoMassInputId").value;

    formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoMass);


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); //Fetch planets data

    listedPlanetsResponse.then(function (result) {
        //Planets data is available here
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        //Select a planet randomly from list
        let selectedPlanet = pickPlanet(listedPlanets);
        // Call addDestinationInfo to display planet info
            addDestinationInfo(
                document,
                selectedPlanet.name,
                selectedPlanet.diameter,
                selectedPlanet.star,
                selectedPlanet.distance,
                selectedPlanet.moons,
                selectedPlanet.image
            );
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }).catch(function(error){
        console.error("Error fetching planet data:", error);
    });
    
};