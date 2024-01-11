export default function addMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'Menu';
    menuDiv.appendChild(title);

    const ramens = [
        ['Yamada-Ya', 'Sea salt, pork bone broth, chashu, pork belly, mushrooms, bamboo shoots, Tokyo onions, nori, soft egg, black garlic oil'],
        ['Kakuni', 'Soy sauce, pork bone broth, pork belly, mushrooms, bamboo shoots, Tokyo onions, nori, soft egg, black sesame oil'],
        ['Spicy', 'Soy sauce, pork bone broth, chashu, pork belly, mushrooms, bamboo shoots, Tokyo onions, nori, soft egg, togarashi bomb, chili oil'],
        ['Spicy Miso', 'Awase miso, roasted garlic, pork bone broth, chashu, pork belly, mushrooms, bamboo shoots, Tokyo onions, soft egg, togarashi bomb, corn, chili oil. Served with']
    ]

    for (let i = 0; i < ramens.length; i++) {
        const ramen = document.createElement('div');
        ramen.classList.add('menu-item');

        const ramenName = document.createElement('p');
        ramenName.classList.add('ramen-name');
        ramenName.textContent = ramens[i][0];
        ramen.appendChild(ramenName);

        const ramenDesc = document.createElement('p');
        ramenDesc.classList.add('ramen-desc');
        ramenDesc.textContent = ramens[i][1];
        ramen.appendChild(ramenDesc);

        menuDiv.appendChild(ramen);
    }

    return menuDiv;
}