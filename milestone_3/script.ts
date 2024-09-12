// get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//handle form submission
form.addEventListener('submit', (event : Event) => {
    event.preventDefault();   // prevent page reload

    // collect input value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance = (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generate the resume content dynamically
    const resumeHTML = `
    <h1><b>Resume</b></h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b> ${name}<p/>
    <p><b>Email:</b> ${email}<p/>
    <p><b>Phone no.:</b> ${phone}<p/>

    <h2>Education</h2>
    <p>${education}</p>

    <h2>Experiance</h2>
    <p>${experiance}</p>

    <h2>Skills</h2>
    <p>${skills}</p>
    `;

    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error(`The resume display element is missing`);
    }
})