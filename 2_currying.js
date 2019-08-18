let singleUserName = "Shriram";
let userNames = ["Shriram", "Gowtham", "Kaushik", "Praveen", "Manikandan"];

switch (process.env.CASE) {
  case "1":
    console.log('-------------------------------- Case 1 --------------------------------');

    //`//////////////////////////////////////////////////////////////////
    // Case 1
    // Wecome single user
    const welcomeUserCase1 = (welcomeText, userName) => {
      console.log(`${welcomeText},  ${userName}`);
    }

    welcomeUserCase1("Good Morning!", singleUserName);
    break;
    //////////////////////////////////////////////////////////////////////////


  case "2":
      console.log('-------------------------------- Case 2 --------------------------------');

    ////////////////////////////////////////////////////////////////////////
    // Case 2
    // Welcome multiple users
    const welcomeUserCase2 = (welcomeText, userName) => {
      console.log(`${welcomeText},  ${userName}`);
    }

    userNames.map( (userName) => welcomeUserCase2("Good Morning!", userName) );

    break;
    ////////////////////////////////////////////////////////////////////////

  case "3":
      console.log('-------------------------------- Case 3 --------------------------------');

    ////////////////////////////////////////////////////////////////////////
    // Case 3
    // Welcome multiple users

    // Functional concepts
    // 1. Higher Order function.
    // 2. Closure.
    // 3. Currying.
    // 4. Partial Application

    const welcomeUserCase3 = (welcomeText) => {
      return (userName) => {
        console.log(`${welcomeText},  ${userName}`);
      }
    }

    let goodMorningGreetingCase3 = welcomeUserCase3("Good Morning!");

    console.log(goodMorningGreetingCase3);

    userNames.map( (userName) => goodMorningGreetingCase3(userName) );

    break;
    ////////////////////////////////////////////////////////////////////////

  case "4":
      var curry = require("curry");

      const welcomeUserCase4 = (welcomeText, userName) => {
        console.log(`${welcomeText},  ${userName}`);
      }

      const welcomeUserCase4Curried = curry(welcomeUserCase4);
      console.log('--------- welcomeUserCase4Curried --------', welcomeUserCase4Curried);

      let goodMorningGreetingCase4 = welcomeUserCase4Curried("Good Morning!");
      console.log('--------- goodMorningGreetingCase4 --------', goodMorningGreetingCase4);

      userNames.map( (userName) => goodMorningGreetingCase4(userName) );

      break;
}
