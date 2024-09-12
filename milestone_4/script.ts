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
    <h1><b>Editable Resume</b></h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b> <span contenteditable="true"> ${name}</span> <p/>
    <p><b>Email:</b> <span contenteditable="true"> ${email}</span> <p/>
    <p><b>Phone no.:</b> <span contenteditable="true"> ${phone}</span> <p/>

    <h2>Education</h2>
    <p contenteditable="true">${education}</p>

    <h2>Experiance</h2>
    <p contenteditable="true">${experiance}</p>

    <h2>Skills</h2>
    <p contenteditable="true">${skills}</p>
    `;

    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error(`The resume display element is missing`);
    }
})