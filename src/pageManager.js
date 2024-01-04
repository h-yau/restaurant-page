import prepareNav from './nav.js';
import prepareMain from './main.js'
import prepareStory from './our-story.js'

export default function loadPage() {
    prepareNav();
    if (true) {
        prepareStory();
        // prepareMain();
    }
}