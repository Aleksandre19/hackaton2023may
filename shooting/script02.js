const container = document.getElementById('container')

const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

const degToRad = (deg) => {
    return deg / 180 * Math.PI;
}


// Get X and Y coordinates based on the device type.
const getPos = (event) => {
  const evt = {
    x: event.type.includes('mouse') ? event.pageX : event.touches[0].clientX,
    y: event.type.includes('mouse') ? event.pageY : event.touches[0].clientY
  }
  return evt;
}

const defineElement = (container, className) => {
    const elm = document.createElement('div');
    elm.className = className;
    container.appendChild(elm);
}


// const createElement = () => {
//     defineElement(container, 'sparkle-container');
// }
// createElement();
// const sparkleContainer = document.querySelector('.sparkle-container')



// const singleSparkle = [];
const sparkleNumber = 8;
const createSingleSparkle = (quantitly) => {
    for (let i = 0; i < quantitly; i++){
        defineElement(container, 'single-sparkle')
    }
}
createSingleSparkle(sparkleNumber);

const grabSparkles = () => {
    const sparkleCollection = document.querySelectorAll('.single-sparkle');
    const sparkles = Array.from(sparkleCollection);
    return sparkles
}

const slice = degToRad(360 / sparkleNumber);
const radius = 20;
let x, y;
let j = 0;
const asignTargetToMouse = (event) => {
    grabSparkles().forEach(sparkle => {
        const cx = getPos(event).x;
        const cy = getPos(event).y;
        const angle = slice * j;
        let deg = (360 /  sparkleNumber) * j;
        x = cx + radius * Math.cos(angle);
        y = cy + radius * Math.sin(angle);
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.transformOrigin = `center top`;
        sparkle.style.transform = `rotate(${deg}deg)`;
        j++;
    })
}


let i = 0;
const sparklesProperties = (opacity) => {
    grabSparkles().forEach(sparkle => {
        let deg = (360 /  sparkleNumber) * i;
        // const rotate = randomRange(0, 360)
        // sparkle.style.top = `${randomRange(min, max)}px`;
        // sparkle.style.left = `${randomRange(min, max)}px`;
        // sparkle.style.top = `${randomRange(min, max)}px`;
        // sparkle.style.left = `${randomRange(min, max)}px`;
        sparkle.style.opacity = `${opacity}`;
        // sparkle.style.height = `${height}px`;
        sparkle.style.transformOrigin = `center top`;
        sparkle.style.transform = `rotate(${deg}deg)`;
        i++;
    })
}
//sparklesProperties(1);

const transitionProperties = (sparkle) => {
    sparkle.style.transition = `left 0.2s ease-in-out, top 0.5s ease-in-out, opacity 0.5s ease-in-out`;
}

const sparklesTransition = () => {
    grabSparkles().forEach(sparkle => {
        sparkle.isTransitioning = false;
        transitionProperties(sparkle);

        sparkle.addEventListener('transitionend', (event) => {
            if (!sparkle.isTransitioning) {
                sparklesProperties(0, 40, 0, 5);
            }
            sparkle.isTransitioning = true;
        });
    });
}


const scatteringPartikles = () => {
    sparklesTransition();
    sparklesProperties(-100, 100, 1, 50 );
}




container.addEventListener('mousemove', (event) => {
    asignTargetToMouse(event);
    //sparklesProperties(sparkleNumber)
})

container.addEventListener('click', () => {
    //scatteringPartikles();
})


