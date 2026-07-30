console.log("app.js loaded");

// Get reference to the student info <p>
const studentInfo = document.getElementById("student-info");
console.log("studentInfo element:", studentInfo);

// Set your name + ID dynamically
studentInfo.textContent = "Student: Adam Evans - ID: 100142217";
console.log("studentInfo text set to:", studentInfo.textContent);