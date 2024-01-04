import prepareNav from './nav.js';
import prepareMain from './main.js'
import prepareStory from './our-story.js'

export default function loadPage() {
    prepareNav();
    const buttons = document.querySelector('.sub-side-nav').querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const className = button.className;
            console.log(className);
        })
    })
}