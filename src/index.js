function test() {
    const element = document.createElement('div');
    element.textContent = "I'm here!";

    return element;
}

document.body.appendChild(test());