var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var profilePicureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var EducationElement = document.getElementById("Education");
    var ExperienceElement = document.getElementById("Experience");
    var SkillsElement = document.getElementById("Skills");
    var usernameElement = document.getElementById("username");
    if (profilePicureInput &&
        nameElement &&
        phoneElement &&
        emailElement &&
        EducationElement &&
        ExperienceElement &&
        SkillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var Education = EducationElement.value;
        var Experience = ExperienceElement.value;
        var Skills = SkillsElement.value;
        var username = usernameElement.value;
        // Profile Picture
        var profilePicureFile = profilePicureInput.files && profilePicureInput.files[0];
        var profilePictureURL = "";
        if (profilePicureFile) {
            profilePictureURL = URL.createObjectURL(profilePicureFile);
        }
        // Create resume output
        var resumeOutput = "\n      <h2>Resume</h2>\n      ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n      <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n      <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n      <p><strong>Phone Number:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n      <h3>Education</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(Education, "</p>\n      <h3>Experience</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(Experience, "</p>\n      <h3>Skills</h3>\n      <p id=\"edit-skills\" class=\"editable\">").concat(Skills, "</p>\n    ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = "resumes/".concat(username.replace(/\s+/g, "_"), "_cv.html");
        downloadLink.textContent = "Download Your Resume";
        // Resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
"";
