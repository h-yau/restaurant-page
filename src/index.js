function addNavContainer() {
    const navContainer = document.createElement('header');
    navContainer.classList.add('nav-container');
    
    const sideNav = document.createElement('div');
    sideNav.classList.add('side-nav');

    navContainer.appendChild(sideNav);

    



    return navContainer;
}

document.getElementById('content').appendChild(addNavContainer());