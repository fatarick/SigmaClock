function getTime() {
    return new Date().toLocaleTimeString();
}

function getDate() {
    return new Date().toLocaleDateString();
}

function putTime() {
    setInterval(() => {
        document.getElementById('time').innerHTML = getTime();
    }, 500);
}

function putDate() {
    setInterval(() => {
        document.getElementById('date').innerHTML = getDate();
    }, 500);
}

putTime();
putDate();

function setDarkMode(cssLinkIndex) {
    var oldLink = document.getElementsByTagName('link').item(cssLinkIndex);

    var newLink = document.createElement('link');
    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('type', 'text/css');
    newLink.setAttribute('href', 'stylesb.css');

    document.getElementsByTagName('head').item(0).replaceChild(newLink, oldLink);
}

function setLightMode(cssLinkIndex) {
    var oldLink = document.getElementsByTagName('link').item(cssLinkIndex);

    var newLink = document.createElement('link');
    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('type', 'text/css');
    newLink.setAttribute('href', 'styles.css');

    document.getElementsByTagName('head').item(0).replaceChild(newLink, oldLink);
}

