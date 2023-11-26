// Write your helper functions here!
const fetch = require('node-fetch');
('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =
    `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    return testInput === "" ? "Empty" : isNaN(testInput) ? "Not a Number" : "Is a Number";
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let copilotStatus = document.getElementById("copilotStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let status = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let fuelStatus = document.getElementById("fuelStatus");    
    
    // Re-written, excludes if/else because it's not working- ternary operators instead.
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";
    status.style.color = fuelLevel < 10000 || cargoLevel >= 10000 ? "red" : "green";
    status.innerHTML = fuelLevel < 10000 || cargoLevel >= 10000 ? "Shuttle Not Ready for Launch" : "Shuttle is Ready for Launch";
    fuelStatus.innerHTML = fuelLevel < 10000 ? "Fuel level too low for launch" :  "Fuel level high enough for launch";
    cargoStatus.innerHTML = cargoLevel >= 10000 ? "Cargo mass too heavy for launch" : "Cargo mass low enough for launch";
}

async function myFetch() {
    try {
        let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here or rethrow it if needed
        throw error;
    }
}

function pickPlanet(planets) { 
    let randomIndex = Math.floor(Math.random() * planets.length); //Math.random-decimal b/t 0-1 * length of planets array Math.floor(round down to whole number) Then return random index.
    return planets[randomIndex];
    }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;