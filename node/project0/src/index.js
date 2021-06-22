const msPerFrame = 7;
const accumulatedTime = 30;
let inter =
  // accumulatedTime - Math.floor(accumulatedTime / msPerFrame) * msPerFrame;
  accumulatedTime % msPerFrame;

let currentFrameCompletion = inter / msPerFrame;
const framesToCatchUp = Math.floor(accumulatedTime / msPerFrame);

console.log("msPerFrame", msPerFrame);
console.log("accumulatedTime", accumulatedTime);
console.log("inter", inter);
console.log("currentFrameCompletion", currentFrameCompletion);
console.log("framesToCatchUp", framesToCatchUp);
console.log(accumulatedTime / msPerFrame);

let a = accumulatedTime / msPerFrame;
console.log(a - Math.floor(a));
console.log((accumulatedTime % msPerFrame) / msPerFrame);
