// Write your helper functions here!
const fetch = require('node-fetch');
require('cross-fetch/polyfill');

function addDestinationInfo(document, list, name, diameter, star, distance, moons, imageUrl) {
    const listElement = document.getElementById(list);
    if (listElement) {
        listElement.style.display = "block"; 
    }
    const missionTargetDiv = document.getElementById("missionTarget");
    missionTargetDiv.innerHTML = `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}">
            `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }else if (isNaN(testInput)) {
        return "Not a Number";
    }else {
        return "Is a Number";
    }
}

function formSubmission(document, pilot, coPilot, fuelLevel, cargoMass) {
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const coPilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const faultyItems = document.getElementById("faultyItems");

    let readyForLaunch = true;

    if (validateInput(pilot) === "Empty" || validateInput(coPilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
        readyForLaunch = false;
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(coPilot) === "Is a Number") {
        alert("Pilot and Co-Pilot names should be strings!");
        readyForLaunch = false;
    }

    if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoMass) !== "Is a Number") {
        alert("Fuel level and cargo mass should be numbers!");
        readyForLaunch = false;
    }

    pilotStatus.textContent = `Pilot ${pilot} is ready`;
    coPilotStatus.textContent = `Co-pilot ${coPilot} is ready`;

    if (Number(fuelLevel) < 10000) {
        fuelStatus.textContent = "Fuel level too low for launch";
        readyForLaunch = false;
    } else {
        fuelStatus.textContent = "Fuel level high enough for launch";
    }

    if (Number(cargoMass) > 10000) {
        cargoStatus.textContent = "Cargo mass too large for launch";
        readyForLaunch = false;
    } else {
        cargoStatus.textContent = "Cargo mass low enough for launch";
    }

    faultyItems.style.visibility = readyForLaunch ? "hidden" : "visible";
    launchStatus.textContent = readyForLaunch ? "Shuttle is ready for launch" : "Shuttle not ready for launch";
    launchStatus.style.color = readyForLaunch ? "green" : "red";
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