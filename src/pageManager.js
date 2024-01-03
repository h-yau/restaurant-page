import prepareNav from './nav.js';
import prepareMain from './main.js'
import prepareStory from './ourStory.js'

export default function loadPage() {
    prepareNav();
    if (true) {
        prepareStory();
        // prepareMain();
    }
}