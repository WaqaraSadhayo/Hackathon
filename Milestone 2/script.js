// Get form and resume elements
var resumeForm = document.getElementById("resumeForm");
var resumeContainer = document.getElementById("resume");
resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var degree = document.getElementById("degree").value;
    var school = document.getElementById("school").value;
    var year = document.getElementById("year").value;
    var jobTitle = document.getElementById("jobTitle")
        .value;
    var company = document.getElementById("company")
        .value;
    var workYear = document.getElementById("workYear")
        .value;
    var skills = document.getElementById("skills").value.split(",");
    // Generate resume content
    resumeContainer.innerHTML = "\n    <h3>".concat(name, "</h3>\n    <p>Email: ").concat(email, "</p>\n    \n    <h4>Education</h4>\n    <p>").concat(degree, " from ").concat(school, " (").concat(year, ")</p>\n\n    <h4>Work Experience</h4>\n    <p>").concat(jobTitle, " at ").concat(company, " (").concat(workYear, ")</p>\n\n    <h4>Skills</h4>\n    <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "</ul>\n  ");
});
