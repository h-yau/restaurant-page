import './styles.css';

function addNavContainer() {
    const navContainer = document.createElement('header');
    navContainer.classList.add('nav-container');
    
    const sideNav = document.createElement('div');
    sideNav.classList.add('side-nav');

    navContainer.appendChild(sideNav);

    const logo = document.createElement('a');
    logo.href = "/";
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

    siteLocation.appendChild(googleMapLink);

    const address = ['111 Fake St,', 'San Francisco, CA 12345'];

    for (let i = 0; i < address.length; i++) {
        const p = document.createElement('p');
        p.textContent = address[i];
        googleMapLink.appendChild(p);
    }
    
    const subSideNav = document.createElement('div');
    subSideNav.classList.add('sub-side-nav');
    
    sideNav.appendChild(subSideNav);

    const listItems = ['RESERVE', 'MENU', 'OUR STORY', 'HOURS & LOCATION', 'JOIN OUR TEAM'];

    for (let i = 0; i < listItems.length; i++) {
        const button = document.createElement('button');
        button.classList.add(listItems[i].replaceAll(' ', '-').toLowerCase());
        button.textContent = listItems[i];

        subSideNav.appendChild(button);
    }

    return navContainer;
}

function addMain() {

    const main = document.createElement('main');
    main.classList.add('main');

    function importAllImages(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAllImages(require.context('./', false, /\.(png|jpe?g|svg)$/));
    
    Object.entries(images).forEach(([name, path]) => {

        const photoDiv = document.createElement('div');

        const photo = document.createElement('img');
        photo.classList.add(name);
        photo.src = path;

        photoDiv.appendChild(photo);
        main.appendChild(photoDiv);
    });

    return main;
}




document.getElementById('content').appendChild(addNavContainer());
document.getElementById('content').appendChild(addMain());
document.getElementById('content').classList.add('window');