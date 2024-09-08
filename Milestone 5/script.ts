import { jsPDF } from "jspdf"; // Make sure you have installed jsPDF via npm or yarn

const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resume") as HTMLElement;
const downloadButton = document.getElementById(
  "downloadPDF"
) as HTMLButtonElement;
const shareLinkButton = document.getElementById(
  "shareLink"
) as HTMLButtonElement;

let name = "";
let email = "";
let degree = "";
let school = "";
let year = "";
let jobTitle = "";
let company = "";
let workYear = "";
let skills: string[] = [];

resumeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  name = (document.getElementById("name") as HTMLInputElement).value;
  email = (document.getElementById("email") as HTMLInputElement).value;
  degree = (document.getElementById("degree") as HTMLInputElement).value;
  school = (document.getElementById("school") as HTMLInputElement).value;
  year = (document.getElementById("year") as HTMLInputElement).value;
  jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
  company = (document.getElementById("company") as HTMLInputElement).value;
  workYear = (document.getElementById("workYear") as HTMLInputElement).value;
  skills = (document.getElementById("skills") as HTMLInputElement).value.split(
    ","
  );

  // Display resume in the container
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

// Generate and Download PDF
downloadButton.addEventListener("click", () => {
  const doc = new jsPDF();

  doc.text(`Name: ${name}`, 10, 10);
  doc.text(`Email: ${email}`, 10, 20);
  doc.text(`Education: ${degree} from ${school} (${year})`, 10, 30);
  doc.text(`Work Experience: ${jobTitle} at ${company} (${workYear})`, 10, 40);

  skills.forEach((skill, index) => {
    doc.text(`Skill ${index + 1}: ${skill.trim()}`, 10, 50 + index * 10);
  });

  doc.save(`${name}_resume.pdf`);
});

// Shareable Link
shareLinkButton.addEventListener("click", () => {
  // Example: create a unique URL based on the user's name
  const uniqueURL = `https://username.vercel.app/resume/${encodeURIComponent(
    name.toLowerCase()
  )}`;
  navigator.clipboard
    .writeText(uniqueURL)
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch((err) => {
      console.error("Error copying link: ", err);
    });
});
