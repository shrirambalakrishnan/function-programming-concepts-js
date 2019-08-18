// Impure vs Pure functions

// 1. Must have parameters
// 2. Returns results only based on the parameters passed.
// 3. Do not use any state variables.
// 4. Do not have side-effects.

let counter = 0;

const incrementCounter = () => {
  console.log('------------------ IMPURE ---------------------');
  console.log("Before increment || counter = ", counter);
  counter++;
  console.log("After increment  || counter =", counter);
}

incrementCounter();
incrementCounter();

////////////////////////////////////////////////////////////////////////////////

let pureCounterVal = 0;
const incrementCounterPure = (counter) => {
  console.log('------------------ PURE ---------------------');
  console.log("Before increment || counter = ", counter);
  let incrementedVal = counter + 1;
  console.log("After increment  || counter =", incrementedVal);

  return incrementedVal;
}

pureCounterVal = incrementCounterPure(pureCounterVal)
pureCounterVal = incrementCounterPure(pureCounterVal)
