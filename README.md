 
# Restaurant Page Project

[Live Repo](https://nzxzn.github.io/restaurant-page/)

## Introduction

Hey fellow learners! 👋 This is my the Restaurant Page project in The Odin Project's JavaScript course. Get ready to dive into some real-world DOM manipulation and create a dynamic restaurant homepage using JavaScript.

**Note:** We'll be working on creating DOM elements with JavaScript.

## Assignment

Let's break down the steps to conquer this project:

### 1. Project Setup

- Start off the project just like instructed in the webpack tutorial.
- Input command `npm init` in your project directory to create a fresh `package.json` file.
- Install webpack to the `node_modules` directory with `npm install webpack webpack-cli --save-dev`.


### 2. Project Structure

- Set up a `src` directory and drop an `index.js` file in there.
- Create a `dist` directory and place an `index.html` file inside. Don't forget to link `main.js` in a script tag; webpack will handle the creation of `main.js`.
- Craft a `webpack.config.js` file. You can copy-paste from the tutorial!


### 3. Basic DOM Magic

- Sketch an HTML skeleton inside `dist/index.html` with a solo `<div id="content">`.
- Test `src/index.js` with a simple `console.log` or `alert` statement. Run `npx webpack`, then load up `dist/index.html` in a browser to savor the success.

### 4. Restaurant Homepage

- Serve a basic homepage for a restaurant with an image, headline, and some lip-smacking copy. Go ahead and hard-code these into the HTML.
- Use JavaScript to dynamically create elements. Pen down this initial page-load function in its own module, then import and call it in `index.js`.

### 5. Tabbed Browsing

- Employ grid and flexbox for better user interface. 
- Wrap the contents of each tab in its own module, exporting a function to whip up and append the content.
- Serve the tab-switching logic in `index.js`.

### 6. GitHub Pages

- If you're flaunting your project on GitHub Pages, follow the steps in [this gist](https://gist.github.com/cobyism/4730490) to ensure your masterpiece shows up.


There you have it! This is my Restaurant Page project!

Happy coding! 🚀

