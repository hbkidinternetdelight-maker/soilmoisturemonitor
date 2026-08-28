// Get HTML elements

let button = document.querySelector("#check-btn");

let input = document.querySelector("#moisture-input");

let moistureText = document.querySelector(".moisture");

let progressBar = document.querySelector(".progress-bar");

let status = document.querySelector(".status");

let fieldStatus = document.querySelector("#field-status");

let advice = document.querySelector("#advice");

let time = document.querySelector("#time");


// Run when the button is clicked

button.addEventListener("click", function () {

    // Get the value entered by the farmer
    let moisture = Number(input.value);


    // Check if input is empty
    if (input.value === "") {

        status.textContent =
            "⚠️ Please enter a moisture value.";

        return;
    }


    // Check if value is between 0 and 100
    if (moisture < 0 || moisture > 100) {

        status.textContent =
            "⚠️ Please enter a value between 0 and 100.";

        return;
    }


    // Display moisture percentage
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


    // Show current date and time

    let currentTime = new Date();

    time.textContent = currentTime.toLocaleString();

});
