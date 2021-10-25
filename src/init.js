import gameState from "./gameState.js";

const TICK_RATE = 3000;

function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame); // function from a browser
  }

  requestAnimationFrame(nextAnimationFrame); //nextAnimationFrame()
}

init();
