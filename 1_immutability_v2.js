// Update arrays
switch (process.env.CASE) {

  case "1":
    const users = [
      { name: "Shriram", username: "shri", city: "Chennai" },
      { name: "Balakrishnan", username: "bala", city: "Neyveli" },
    ]

    const newUser = {
      name: "Praveen", username: "ninja", city: "Tirupur"
    }

    const updatedUsers = [...users, newUser];

    console.log("users = ", users);
    console.log("newUser = ", newUser);
    console.log("updatedUsers = ", updatedUsers);

  case "2":
    const doubleFn = (number) => {
      return number * 2;
    }

    const numbersArray = [1, 2, 3, 4, 5];
    const doublednumbersArray = numbersArray.map( (number) =>  doubleFn(number) );

    console.log("numbersArray = ", numbersArray);
    console.log("doublednumbersArray = ", doublednumbersArray);
}


// const addToCounter = (counterInitVal) => {
//   let sum = counterInitVal;
//   return (number) => {
//     sum = sum + number;
//     return sum;
//   }
// }
// addToCounterFunc = addToCounter(0);
// let sumUntilIndex = [1, 2, 3, 4, 5].map( (num) => addToCounterFunc(num) )
// console.log(`sumUntilIndex = ${sumUntilIndex}`);
