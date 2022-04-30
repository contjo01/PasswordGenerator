/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict'

const BASE_URL = "https://contjo01.pythonanywhere.com"

// So when user selects "digits", "lower", "upper", etc they won't be able to choose a
// passphrase separator, only when choosing "passphrase" in validationCustom01

document.getElementById("validationCustom01").onchange = function function1 () {
    document.getElementById("validationCustom04").setAttribute("disabled", "disabled")
    if (this.value == 'passphrase')
      document.getElementById("validationCustom04").removeAttribute("disabled");
};

// Get the data from my API as for now I'm using all the parameters, later I will add
// if and else so that user can get the data without specifying parameters like the
// number of passwords

async function requestData() {
    var pool = document.getElementById("validationCustom01").value;
    var passwordLength = document.getElementById("validationCustom02").value;
    var numberOfpasswords = document.getElementById("validationCustom03").value;
    return fetch(`${BASE_URL}/${pool}/${passwordLength}/${numberOfpasswords}`)
    .then(response => response.json())
    .then(json => printData(json(passwords)))
    .catch(error => console.log(error))
}

// Print data in HTML file

function printData(data) {
    let responseDiv = document.querySelector("#response");
    responseDiv.innerHTML = data;
}
