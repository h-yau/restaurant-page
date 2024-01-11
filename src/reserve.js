export default function addReserve() {
    const reservePage = document.createElement('form');
    reservePage.classList.add('reserve-form');

    const fieldset = document.createElement('fieldset');
    reservePage.appendChild(fieldset);

    const legend = document.createElement('legend');
    legend.textContent = 'Reverse a table with us!';
    fieldset.appendChild(legend);

    const fields = ['Name', 'Email Address', 'Phone Number', 'Date', 'Time'];

    for (let i = 0; i < fields.length; i++) {
        const input = document.createElement('input');
        input.classList.add(fields[i].replace(' ', '-').toLowerCase());
        input.placeholder = fields[i];
        fieldset.append(input);
    }

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Reserve';
    fieldset.append(submitButton);

    submitButton.addEventListener('click', () => {
        alert('Reserved! See you soon!');
        window.location.href = './';
    });


    return reservePage;
}