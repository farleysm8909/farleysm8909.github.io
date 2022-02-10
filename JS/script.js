/* Code adapted from CodePen: https://codepen.io/annalarson/pen/GesqK */
/* Scroll fade-in for photography.html */

window.addEventListener("DOMContentLoaded", function(event) {
  let footerDate = document.getElementsByClassName("date");
  let today = new Date();
  //let month = today.getMonth() + 1; //returns num 0-11
  //let day = today.getDate(); //returns num 1-31
  let year = today.getFullYear();
  for (let i = 0; i < footerDate.length; i++) { //iterate through each footer on each page
    footerDate[i].innerHTML = year; //returns yr e.g. "2022"
  }
});