document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const profilePicureInput = document.getElementById("profilePicture") as HTMLInputElement;
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const EducationElement = document.getElementById("Education") as HTMLInputElement;
  const ExperienceElement = document.getElementById("Experience") as HTMLInputElement;
  const SkillsElement = document.getElementById("Skills") as HTMLInputElement;
  const usernameElement = document.getElementById("username") as HTMLInputElement;

  if (
    profilePicureInput &&
    nameElement &&
    phoneElement &&
    emailElement &&
    EducationElement &&
    ExperienceElement &&
    SkillsElement &&
    usernameElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const Education = EducationElement.value;
    const Experience = ExperienceElement.value;
    const Skills = SkillsElement.value;
    const username = usernameElement.value;

    // Profile Picture
    const profilePicureFile = profilePicureInput.files && profilePicureInput.files[0];
    let profilePictureURL = "";

    if (profilePicureFile) {
      profilePictureURL = URL.createObjectURL(profilePicureFile);
    }

    // Create resume output
    const resumeOutput = `
      <h2>Resume</h2>
      ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
      <p><strong>Name:</strong><span id="edit-name" class="editable">${name}</span></p>
      <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
      <p><strong>Phone Number:</strong><span id="edit-phone" class="editable">${phone}</span></p>
      <h3>Education</h3>
      <p id="edit-education" class="editable">${Education}</p>
      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${Experience}</p>
      <h3>Skills</h3>
      <p id="edit-skills" class="editable">${Skills}</p>
    `;

    const downloadLink = document.createElement("a");
    downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
    downloadLink.download = `resumes/${username.replace(/\s+/g, "_")}_cv.html`;
    downloadLink.textContent = "Download Your Resume";

    // Resume output
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      resumeOutputElement.appendChild(downloadLink);
     
    }
  } else {
    console.error("One or more form elements are missing");
  }
});
``
