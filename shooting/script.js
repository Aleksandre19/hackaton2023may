const container = document.getElementById('container')
const sniper = document.getElementById('sniper-target')
// Hide cursor
document.body.style.cursor = 'none';

// Get X and Y coordinates based on the device type.
const getPos = (event) => {

  const evt = {
    x: event.type.includes('mouse') ? event.pageX : event.touches[0].clientX ,
    y: event.type.includes('mouse') ? event.pageY : event.touches[0].clientY
  }

  return evt;
}


const asignTargetToMouse = (event) => {
    sniper.style.left = `${getPos(event).x - 30}px`;
    sniper.style.top = `${getPos(event).y - 30}px`;
}

container.addEventListener('mousemove', (event) => {
    asignTargetToMouse(event);
})


