var toggleButton = document.getElementById("toggleSkills");
var skillsSection = document.getElementById("skills");
if (toggleButton && skillsSection) {
    toggleButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none" ||
            skillsSection.style.display === "") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    });
}
