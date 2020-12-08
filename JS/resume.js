// Adapted from Josh Hanson's code demo for assignment 5
// jQuery says the document is ready
$(document).ready(function() {
  // automatically make AJAX happen to populate table (no on-click necessary)
  makeRequest("https://farleysm8909.github.io/languages.json");
});

function makeRequest(url) {
  let httpRequest = new XMLHttpRequest();
  // alert if there was a problem making the variable
  if (!httpRequest) {
    alert("Error! Unable to make XMLHttpRequest object");
    return false;
  }
  // This will run once the httpRequest's state has changed
  httpRequest.onreadystatechange = function() {
    //check if response is done
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      //check if status = 200, success, call function to update DOM
      if (httpRequest.status === 200) {
        //Parse the response and grab the array 
        let mySkills = JSON.parse(httpRequest.responseText).my_skills;
        populateTable(mySkills);
      } else {
        //AJAX call unsuccessful
        alert("Error! Status is " + httpRequest.status + ", not 200.");
      }
    }
  }
  httpRequest.open("GET", url); 
  httpRequest.send(); //send request
}

function populateTable(skills) {
  let tableBody = document.getElementById("tbody");
  if (Array.isArray(skills)) {
    // Populate table
    skills.forEach(skill) => {
      $("#tableBody").append(`
        <tr>
          <td> ${skill.language} </td>
          <td> ${skill.years} </td>
          <td> ${skill.industryExp} </td>
          <td> ${skill.rank} </td>
        </tr>
      `);
    }
  } else {
    // The response is not an array, show error
    alert("Error! The response returned is not an array.");
  }
}