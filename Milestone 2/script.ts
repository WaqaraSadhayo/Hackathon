// Get form and resume elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resume") as HTMLElement;

resumeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const year = (document.getElementById("year") as HTMLInputElement).value;
  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)
    .value;
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const workYear = (document.getElementById("workYear") as HTMLInputElement)
    .value;
  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.split(",");

  // Generate resume content
  resumeContainer.innerHTML = `
    <h3>${name}</h3>
    <p>Email: ${email}</p>
    
    <h4>Education</h4>
    <p>${degree} from ${school} (${year})</p>

    <h4>Work Experience</h4>
    <p>${jobTitle} at ${company} (${workYear})</p>

    <h4>Skills</h4>
    <ul>${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}</ul>
  `;
});
