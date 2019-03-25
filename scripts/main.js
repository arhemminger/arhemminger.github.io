/*
============================================
; Title:  My portfolio JavaScript
; Author: Andrew Hemminger
; Date:  10 March 2019
; Description: Main JavaScript code for portfolio site.
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Portfolio'));
console.log("");

// start program

function readML() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("aboutBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function viewML() {
  var moreImg = document.getElementById("viewMore");
  var textBtn = document.getElementById("viewBtn");

  if (moreImg.style.display === "none") {
    moreImg.style.display = "block";
    textBtn.innerHTML = "View less";
  } else {
    moreImg.style.display = "none";
    textBtn.innerHTML = "View more";
  }
}
