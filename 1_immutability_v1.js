///////////////////////////////////////////////////////////////////////
// const
const PI = 3.14;
console.log("PI = ", PI);

// PI = 22/7;
// console.log("PI = ", PI);
///////////////////////////////////////////////////////////////////////

//////////////////////////// HOW DO YOU UPDATE OBJECTS THEN? //////////////////////
const user = {
  id: 1,
  name: "Shriram",
  city: "Chennai"
}

const updatedUser1 = {
  ...user,
  city: "Neyveli"
}

const { id, ...userWithoutID } = user;
const updatedUser2 = {
  ...userWithoutID,
  city: "Delhi",
  username: "shri"
};

console.log("user = ", user);
console.log("updatedUser1 = ", updatedUser1);
console.log("updatedUser2 = ", updatedUser2);
//////////////////////////////////////////////////////////////////
