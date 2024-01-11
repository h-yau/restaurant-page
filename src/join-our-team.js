export default function addJoin() {
    const form = document.createElement('form');
    form.classList.add('to-join-form');

    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);

    const legend = document.createElement('legend');
    legend.textContent = "Complete and submit the form to join our team!";
    fieldset.appendChild(legend);

    const input = ['First Name', 'Last Name', 'Email Address'];

    for (let i = 0; i < input.length; i++) {
        const field = document.createElement('input');
        field.classList.add(input[i].replace(' ', '-').toLowerCase());
        field.placeholder = input[i];
        fieldset.appendChild(field);
    }
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit'
    fieldset.appendChild(submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Submitted! We will contact you shortly!');
        window.location.href = './';
    })
    return form
}