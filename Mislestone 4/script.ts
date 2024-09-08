const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resume") as HTMLElement;

resumeForm.addEventListener("submit", (e) => {
  e.preventDefault();

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

  resumeContainer.innerHTML = `
    <h3 id="nameField" contenteditable="true">${name}</h3>
    <p id="emailField" contenteditable="true">Email: ${email}</p>

    <h4>Education</h4>
    <p id="educationField" contenteditable="true">${degree} from ${school} (${year})</p>

    <h4>Work Experience</h4>
    <p id="workExperienceField" contenteditable="true">${jobTitle} at ${company} (${workYear})</p>

    <h4>Skills</h4>
    <ul id="skillsField">${skills
      .map((skill) => `<li contenteditable="true">${skill.trim()}</li>`)
      .join("")}</ul>
  `;

  const nameField = document.getElementById("nameField");
  const emailField = document.getElementById("emailField");
  const educationField = document.getElementById("educationField");
  const workExperienceField = document.getElementById("workExperienceField");
  const skillsField = document.querySelectorAll("#skillsField li");

  // Helper function to update form fields based on content
  function updateFormValues() {
    (document.getElementById("name") as HTMLInputElement).value =
      nameField?.textContent || "";
    (document.getElementById("email") as HTMLInputElement).value =
      emailField?.textContent?.replace("Email: ", "") || "";
    const [degreeText, schoolText, yearText] = (
      educationField?.textContent || ""
    ).split(" from ");
    (document.getElementById("degree") as HTMLInputElement).value =
      degreeText || "";
    (document.getElementById("school") as HTMLInputElement).value =
      schoolText?.split(" (")[0] || "";
    (document.getElementById("year") as HTMLInputElement).value =
      yearText?.replace(")", "") || "";
    const [jobText, companyText, workYearText] = (
      workExperienceField?.textContent || ""
    ).split(" at ");
    (document.getElementById("jobTitle") as HTMLInputElement).value =
      jobText || "";
    (document.getElementById("company") as HTMLInputElement).value =
      companyText?.split(" (")[0] || "";
    (document.getElementById("workYear") as HTMLInputElement).value =
      workYearText?.replace(")", "") || "";

    const skillsArray = Array.from(skillsField).map(
      (skill) => skill.textContent?.trim() || ""
    );
    (document.getElementById("skills") as HTMLInputElement).value =
      skillsArray.join(", ");
  }

  nameField?.addEventListener("blur", updateFormValues);
  emailField?.addEventListener("blur", updateFormValues);
  educationField?.addEventListener("blur", updateFormValues);
  workExperienceField?.addEventListener("blur", updateFormValues);
  skillsField.forEach((skill) =>
    skill.addEventListener("blur", updateFormValues)
  );
});
