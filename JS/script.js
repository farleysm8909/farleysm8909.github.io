/* Code adapted from CodePen: https://codepen.io/annalarson/pen/GesqK */
/* Scroll fade-in for photography.html */

window.addEventListener("DOMContentLoaded", function(event) {
  /* Add footer with current date */
  let footerDate = document.getElementsByClassName("date");
  let today = new Date();
  let month = today.getMonth() + 1; //returns num 0-11
  let day = today.getDate(); //returns num 1-31
  let year = today.getFullYear();
  for (let i = 0; i < footerDate.length; i++) { //iterate through each footer on each page
    footerDate[i].innerHTML = `Today's Date: ${month}/${day}/${year}`; //returns string e.g. "12/04/2020"
  }
  /* Fade in page content 
   * Code inspired by tutorial from Digital Ocean
   * https://www.digitalocean.com/community/tutorials/js-simple-page-fade-in */
   //alert(document.body.className);
  document.body.className = ""; /* Remove fade class from body to make transition occur */
});