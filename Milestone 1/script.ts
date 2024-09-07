const toggleButton = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skills");

if (toggleButton && skillsSection) {
  toggleButton.addEventListener("click", () => {
    if (
      skillsSection.style.display === "none" ||
      skillsSection.style.display === ""
    ) {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  });
}
