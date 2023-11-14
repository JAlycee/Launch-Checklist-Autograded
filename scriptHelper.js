// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    } if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Is a String";
    } else {
        return "Is a Number";
    }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) ==="Empty") {
        alert("All fields are required!");
        return;
        }
    }

//Check if fuelLevel and cargoLevel are numbers
if (validateInput(fuelLevel) !== "Is a Number" ||
    validateInput(cargoLevel) !== "Is a Number") {
    alert("Fuel level and cargo mass must be numbers!");
    return;

// Update pilot and copilot status (template literal)
document.getElementById("pilotStatus").innerText = 'Pilot ${pilot} is ready';
document.getElementById("copilotStatus").innerText = 'copilot ${copilot} is ready';
}

// Check to see if fuel level is <10,000 kilograms
if (Number(fuelLevel) <10000) {
    isReadyForLaunch = false;
    document.getElementById("fuelStatus").innerText = "There is not enough fuel for this journey";
} else {
    document.getElementById("fuelStatus").innerText ="Fuel level high enough for launch";
}
// Check cargo mass
if (Number(cargoLevel)> 10000) {
    isReadyForLaunch = false;
    document.getElementById("cargoStatus").innerText = "Cargo mass too high for the shuttle to launch";
} else {
    document.getElementById("cargoStatus").innerText = "Cargo mass low enough for launch";
}

// Update launch status
let launchStatus = document.getElementById("launchStatus");
let faultyItems = document.getElementById("faultyItems");

if (isReadyForLaunch) {
    launchStatus.innerText = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
    faultyItems.style.visibility = "hidden"
} else {
launchStatus.innerText = "Shuttle not ready for launch";
launchStatus.style.color = "red";
faultyItems.style.visibility = "visible";
}

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    if (planets.length <5) {
        return null;
    } 
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
    }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;