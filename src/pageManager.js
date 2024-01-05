import prepareNav from './nav.js';
import prepareMain from './main.js'
import prepareStory from './our-story.js'

const functionMap = {
    'main': prepareMain,
    // 'reserve': prepareReserve,
    // 'menu': prepareMenu,
    'our-story': prepareStory,
    // 'hours-&-location': prepareHours,
    // 'join-our-team': prepareJoin,
}

const clearContent = () => {
    const children = document.getElementsByClassName('window')[0].childNodes;
    if (children.length > 2) {
        children[children.length - 1].innerHTML = '';
    }
}

export default function loadPage() {
    prepareNav();
    // prepareMain();
    const buttons = document.querySelector('.sub-side-nav').querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clearContent();
            const className = button.className;
            if (functionMap[className])
            functionMap[className]();
        });
    });
}