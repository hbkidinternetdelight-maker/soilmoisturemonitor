let button = document.querySelector("#check-btn");

let moistureText = document.querySelector(".moisture");

let progressBar = document.querySelector(".progress-bar");

let status = document.querySelector(".status");

let fieldStatus = document.querySelector("#field-status");

let advice = document.querySelector("#advice");

let sensorStatus = document.querySelector("#sensor-status");

let time = document.querySelector("#time");


button.addEventListener("click", function () {

    /*
    REAL SENSOR CODE WILL BE ADDED HERE.

    The ESP32 will send the soil moisture
    value to the website/backend.
    */


    status.textContent =
        "📡 Waiting for sensor reading...";


    fieldStatus.textContent =
        "Checking soil moisture sensor...";


    advice.textContent =
        "Please wait for the sensor reading.";


    sensorStatus.textContent =
        "🟡 Checking Connection...";


    // For now, no fake moisture value is shown.

    setTimeout(function () {

        sensorStatus.textContent =
            "🔴 Sensor not connected";

        status.textContent =
            "⚠️ Connect the ESP32 and soil moisture sensor.";

        fieldStatus.textContent =
            "No sensor reading available.";

        advice.textContent =
            "Connect the sensor to receive moisture data.";

    }, 1500);

});
