const container = document.getElementById('container')
const sniper = document.getElementById('sniper-target')
const laser = document.getElementById('laser')
const style = window.getComputedStyle(laser);
// Hide cursor
document.body.style.cursor = 'none';

// Get X and Y coordinates based on the device type.
const getPos = (event) => {

  const evt = {
    x: event.type.includes('mouse') ? event.pageX : event.touches[0].clientX,
    y: event.type.includes('mouse') ? event.pageY : event.touches[0].clientY
  }

  return evt;
}


const asignTargetToMouse = (event) => {
    sniper.style.left = `${getPos(event).x - 30}px`;
    sniper.style.top = `${getPos(event).y - 30}px`;
}


const grabElementRotation = () => {
    const transform = style.transform;
    const match = /matrix\((.+)\)/.exec(transform);
    const values = match[1].split(', ').map(parseFloat);
    const a = values[0];
    const b = values[1];
    const rotationInRadians = Math.atan2(b, a);
    const rotationInDegrees = rotationInRadians * (180 / Math.PI);
    return rotationInDegrees
}


const moveLaser = (event, coursorX, coursorY) => {
    laser.style.left = `${(coursorX - grabElementRotation()) - 25}px`;
    laser.style.top = `${coursorY + grabElementRotation()}px`;
}


const fadeIn = (event) => {
    const coursorX = getPos(event).x
    const coursorY = getPos(event).y
    laser.style.opacity = '0';
    laser.style.transition = 'opacity 0.5s ease-in-out';
    laser.style.opacity = '1';
    laser.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'opacity') {
            moveLaser(event, coursorX, coursorY)
        }
    })
}


const shoot = (event) => {
    fadeIn(event)
}


const fractions = (event) => {
    const fractions = {}
    // Input X axis
    input.mouseX.current = getPos(event).x
    fractions.x = input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    // Input Y axis
    input.mouseY.current = getPos(event).y;
    fractions.y = input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
    
    return fractions
}

const followToMouse = (event) => {
    output.x.current = output.x.start + (fractions(event).x * output.x.range);
    laser.style.transformOrigin = 'center bottom';
    laser.style.transform = `rotate(${output.x.current}deg)`;
}

container.addEventListener('mousemove', (event) => {
    asignTargetToMouse(event);
    followToMouse(event);
})

container.addEventListener('mousedown', (event) => {
    shoot(event)
})


