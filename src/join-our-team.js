export default function addJoin() {
    const form = document.createElement('form');
    form.classList.add('to-join-form');

    const legend = document.createElement('legend');
    legend.textContent = "Complete and submit the form to join our team!";
    form.appendChild(legend);

    const input = ['First Name', 'Last Name', 'Email Address'];

    for (let i = 0; i < input.length; i++) {
        const field = document.createElement('input');
        field.classList.add(input[i].replace(' ', '-').toLowerCase());
        field.placeholder = input[i];
        form.appendChild(field);
    }
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit'
    form.appendChild(submitButton);

    return form
}