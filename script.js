// Dummy moisture value for testing
// Later this will come from the ESP32 sensor

let moisture = 30;


// Get HTML elements

let button = document.querySelector("#check-btn");

let moistureText = document.querySelector(".moisture");

let progressBar = document.querySelector(".progress-bar");

let status = document.querySelector(".status");

let fieldStatus = document.querySelector("#field-status");

let advice = document.querySelector("#advice");

let time = document.querySelector("#time");


// Run when farmer clicks the button

button.addEventListener("click", function () {

    // Display moisture

    moistureText.textContent = moisture + "%";


    // Update progress bar

    progressBar.style.width = moisture + "%";


    // Check soil condition

    if (moisture < 30) {

        status.textContent = "🔴 Dry";

        fieldStatus.textContent =
            "The soil moisture level is low.";

        advice.textContent =
            "Irrigation may be needed.";

    }

    else if (moisture <= 70) {

        status.textContent = "🟢 Normal";

        fieldStatus.textContent =
            "The soil has a suitable moisture level.";

        advice.textContent =
            "No immediate irrigation is required.";

    }

    else {

        status.textContent = "🔵 Wet";

        fieldStatus.textContent =
            "The soil contains a high amount of moisture.";

        advice.textContent =
            "Avoid unnecessary irrigation.";

    }


    // Show current time

    let currentTime = new Date();

    time.textContent = currentTime.toLocaleString();

});