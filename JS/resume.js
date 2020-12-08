// Adapted from Josh Hanson's code demo for assignment 5
// jQuery says the document is ready
$(document).ready(function() {
  // automatically make AJAX happen to populate table (no on-click necessary)
  makeRequest();
});

function makeRequest() {
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
        populateTable();
      } else {
        alert("Error! Status is " + httpRequest.status + ", not 200.");
      }
    } else {
      alert("Error! There was a problem with the request.");
    }
  }
  httpRequest.open("GET", "languages.json"); 
  httpRequest.send(); //send request
}

function populateTable() {
  document.write(httpRequest.responseText);
}