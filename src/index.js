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

    



    return navContainer;
}

document.getElementById('content').appendChild(addNavContainer());