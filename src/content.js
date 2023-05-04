
console.log('hello there');
const charLib = ['0', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~', '-', '#', '$', '%', '^', '&', '*', '(', ')', '[', ',]', '{', '}', ':', '<', '>']

const background = ["rgb(117,251,98)", "rgb(63,140,44)","rgb(0,255,65)", "limegreen", ]

//r:117 g:251 b:98
//r:63 g:140 b:44
//r:21 g:58 b:12

function randomChar(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random]
}
function randomLength() {
    return Math.floor(Math.random() * 14) + 2;
}
function randominrange(length) {
    return Math.floor(Math.random() * length);
}


// creates 
function charGenerator(box) {
    for (let i = 0; i < randomLength(); i++) {
        let str = document.createElement('div');
        str.setAttribute('class', 'text');
        str.innerText = randomChar(charLib);
        box.appendChild(str);
    }
}
//charGenerator(square);

// this is sent for my computer set i to like 500 but we could make this a slider
function boxGenerator() {
    for (let i = 0; i < 1500; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'rain');
        // square.style.backgroundColor = 'yellow'
        square.style.zIndex = '-1';
        square.style.position = 'absolute'
        square.style.top = '0px'
        square.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
        square.style.color = randomChar(background);
        square.style.animationDelay = `${Math.random() * -40}s`
        square.style.animationDuration = `${Math.random() * 5}s`
        square.style.opacity = 1;
        square.style.fontSize = '50px';
        square.style.opacity = Math.random() * 0.8 + .2;
        charGenerator(square);
        document.querySelector('body').appendChild(square);
    }
}

// function move(box) {
//     console.log('im moving!')
//     let yPosition = Number(box.style.top.replace('px', ''))
//     box.style.top = `${yPosition += 500}px`
//     //if(yPosition > 1000)box.remove();
//     }


// const throttle = (func, wait) => {
//     let lastInvoked = 0;
//     return () => {
//         const time = Date.now();
//         if (time - lastInvoked > wait) {
//             lastInvoked = time;
//             func();
//         }
//     }
// };


boxGenerator();
