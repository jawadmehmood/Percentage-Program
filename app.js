var totalMarks = 700;

var engMarks = +prompt("Enter your English marks");
var urduMarks = +prompt("Enter your Urdu marks");
var islMarks = +prompt("Enter your Islamiat marks");
var chemMarks = +prompt("Enter your Chemistry marks");
var phyMarks = +prompt("Enter your Physics marks");
var mathMarks = +prompt("Enter your Mathematics marks");
var compMarks = +prompt("Enter your Computer marks");

var obtainedMarks = engMarks + urduMarks + islMarks + chemMarks + phyMarks + mathMarks + compMarks;

var percentage = (obtainedMarks / totalMarks) * 100;

console.log("You have got: " + percentage + "%");