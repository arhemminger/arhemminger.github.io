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

class controller {
  constructor() {
    this.showfirst = false;
  }
  buttonclick() {
   this.showfirst =!this.showfirst;
   var e = document.getElementById("first");
   if (this.showfirst) {
   e.classname = e.classname.replace("hidden", "");
   }
   else{
    e.classname = e.classname + " hidden";
   }
   }
  }
  /*
  addHtml(){
    var e = document.getElementById("html");
    e.innerHTML="<p>some text inserted via JS</p>";
  };
*/
//after the class created

var vm = new controller();
