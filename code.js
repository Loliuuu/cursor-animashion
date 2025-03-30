
//базові налаштування курсору
let currentColor = 'wheat';



document.addEventListener('mousemove', function(e) {
    const wheat  = document.querySelector('.wheat');
    const red    = document.querySelector('.red');
    const pink   = document.querySelector('.pink');
    const green  = document.querySelector('.green');
    const blue   = document.querySelector('.blue');
    const yellow = document.querySelector('.yellow');
    const black  = document.querySelector('.black');

    wheat.addEventListener('mouseenter', () => currentColor = 'wheat');
    red.addEventListener('mouseenter', () => currentColor = 'red');
    pink.addEventListener('mouseenter', () => currentColor = 'pink');
    green.addEventListener('mouseenter', () => currentColor = 'green');
    blue.addEventListener('mouseenter', () => currentColor = 'blue');
    yellow.addEventListener('mouseenter', () => currentColor = 'yellow');
    black.addEventListener('mouseenter', () => currentColor = 'black');

    let createelement = document.createElement('div');
    createelement.className = 'circle'; 

    switch(currentColor) {
        case 'wheat': createelement.style.backgroundColor = 'wheat'; break;
        case 'red': createelement.style.backgroundColor = 'red'; break;
        case 'pink': createelement.style.backgroundColor = 'pink'; break;
        case 'green': createelement.style.backgroundColor = 'green'; break;
        case 'blue': createelement.style.backgroundColor = 'blue'; break;
        case 'yellow': createelement.style.backgroundColor = 'yellow'; break;
        case 'black': createelement.style.backgroundColor = 'black'; break;
    }

    createelement.style.left = `${e.clientX}px`;
    createelement.style.top = `${e.clientY}px`;   

    document.body.appendChild(createelement);

    setTimeout(() => {
        createelement.remove();
    }, 300);
});
