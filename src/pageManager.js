import prepareNav from './nav.js';
import prepareMain from './main.js';
import prepareStory from './our-story.js';
import prepareJoin from './join-our-team.js';
import prepareReserve from './reserve.js';
import prepareMenu from './menu.js';
import prepareHours from './hours-&-location.js';

const functionMap = {
    'main': prepareMain,
    'reserve': prepareReserve,
    'menu': prepareMenu,
    'our-story': prepareStory,
    'hours-&-location': prepareHours,
    'join-our-team': prepareJoin,
}

const clearContent = () => {
    const container = document.getElementsByClassName('window')[0];
    const children = container.childNodes;
    if (children.length > 2 && children[children.length - 1].className != 'nav-container') {
        children[children.length - 1].innerHTML = '';
        children[children.length - 1].className = '';
    }
}

export default function loadPage() {
    prepareNav();
    prepareMain();
    const buttons = document.querySelector('.sub-side-nav').querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clearContent();
            const className = button.className;
            if (null != functionMap[className]) {
                const content = functionMap[className]();
                document.querySelector('main').appendChild(content);
            }

        });
    });
}