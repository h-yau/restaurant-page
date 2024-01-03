import preparePg from './nav.js';

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




preparePg();
document.getElementById('content').appendChild(addMain());
