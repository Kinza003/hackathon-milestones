// get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n    <h1><b>Editable Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b> <span contenteditable=\"true\"> ".concat(name, "</span> <p/>\n    <p><b>Email:</b> <span contenteditable=\"true\"> ").concat(email, "</span> <p/>\n    <p><b>Phone no.:</b> <span contenteditable=\"true\"> ").concat(phone, "</span> <p/>\n\n    <h2>Education</h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h2>Experiance</h2>\n    <p contenteditable=\"true\">").concat(experiance, "</p>\n\n    <h2>Skills</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
