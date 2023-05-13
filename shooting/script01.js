const container = document.getElementById('container')

const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
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
const createSingleSparkle = (quantitly) => {
    for (let i = 0; i < quantitly; i++){
        defineElement(container, 'single-sparkle')
    }
}
createSingleSparkle(20);

const grabSparkles = () => {
    const sparkleCollection = document.querySelectorAll('.single-sparkle');
    const sparkles = Array.from(sparkleCollection);
    return sparkles
}

const asignTargetToMouse = (event) => {
    grabSparkles().forEach(sparkle => {
        sparkle.style.left = `${getPos(event).x}px`;
        sparkle.style.top = `${getPos(event).y}px`;
    })
}


const sparklesProperties = (opacity, height) =>{
    grabSparkles().forEach(sparkle => {
        // const rotate = randomRange(0, 360)
        // sparkle.style.top = `${randomRange(min, max)}px`;
        // sparkle.style.left = `${randomRange(min, max)}px`;
        // sparkle.style.top = `${randomRange(min, max)}px`;
        // sparkle.style.left = `${randomRange(min, max)}px`;
        sparkle.style.opacity = `${opacity}`;
        // sparkle.style.height = `${height}px`;
        // sparkle.style.transformOrigin = `center bottom`;
        // sparkle.style.transform = `rotate(${rotate}deg)`;
    })
}
sparklesProperties(1, 5);

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
})

container.addEventListener('click', () => {
    scatteringPartikles();
})


