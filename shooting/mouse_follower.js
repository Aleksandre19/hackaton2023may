// Input setup
let input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0
  }
}

// Output setup
let output = {
  x: {
    start: -75,
    end: 25,
    current: 0
  },
  y: {
    start: -70,
    end: 70,
    current: 0
  }
}

// Output range
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

// Input range
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

const onResize = () => {
  // X axis
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;

  // Y axis
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('resize', onResize);