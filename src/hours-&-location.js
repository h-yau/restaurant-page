export default function addHoursPage() {
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours-location');

    const title = document.createElement('p');
    title.textContent = 'Hours & Location';
    title.classList.add('title');
    hoursDiv.appendChild(title);

    const hours = document.createElement('p');
    hours.textContent = "09:00 am - 09:00 pm Daily";
    hoursDiv.appendChild(hours);

    const location = document.createElement('p');
    location.textContent = '111 Fake St, San Francisco, CA 12345';
    hoursDiv.appendChild(location);

    return hoursDiv;
}