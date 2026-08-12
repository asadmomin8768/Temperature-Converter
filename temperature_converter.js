function convertTemp() {

    let temp = parseFloat(document.getElementById("temperature").value);
    
    let option = document.getElementById("conversion").value;

    let result;

    if (isNaN(temp)) {

        document.getElementById("result").innerHTML = "Please enter a valid Temperature.";

        return;

    }

    if (option == "cf") {

        result = (temp * 9 / 5) + 32;

        document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + "°F";

    }

    else if (option == "fc") {

        result = (temp - 32) * 5 / 9;

        document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + "°C";

    }

    else if (option == "ck") {

        result = temp + 273.15;

        document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + "K";

    }

    else {

        result = temp - 273.15;

        document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + "°C";

    }

}