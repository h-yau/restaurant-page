function addNavContainer() {
    const navContainer = document.createElement('header');
    navContainer.classList.add('nav-container');
    
    const sideNav = document.createElement('div');
    sideNav.classList.add('side-nav');

    navContainer.appendChild(sideNav);

    const logo = document.createElement('a');
    logo.classList.add('logo');
    
    sideNav.appendChild(logo);

    const logoText = document.createElement('p');
    logoText.textContent = 'Ramen House';
    logoText.classList.add('logo-text');

    logo.appendChild(logoText);

    const siteLocation = document.createElement('div');
    siteLocation.classList.add('site-location');

    sideNav.appendChild(siteLocation);

    const googleMapLink = document.createElement('a');
    googleMapLink.href = "https://maps.app.goo.gl/GD9BNZ7fBhJxeE9u6";

    sideNav.appendChild(googleMapLink);

    const address = ['111 Fake St,', 'San Francisco, CA 12345'];

    for (let i = 0; i < address.length; i++) {
        const p = document.createElement('p');
        p.textContent = address[i];
        googleMapLink.appendChild(p);
    }
    
    const subSideNav = document.createElement('ul');
    subSideNav.classList.add('sub-side-nav');
    
    sideNav.appendChild(subSideNav);

    const listItems = ['RESERVE', 'MENU', 'OUR STORY', 'HOURS & LOCATION', 'JOIN OUR TEAM'];

    for (let i = 0; i < listItems.length; i++) {
        const li = document.createElement('li');
        li.classList.add(listItems[i].replaceAll(' ', '-').toLowerCase());
        li.textContent = listItems[i];

        subSideNav.appendChild(li);
    }


    return navContainer;
}

document.getElementById('content').appendChild(addNavContainer());