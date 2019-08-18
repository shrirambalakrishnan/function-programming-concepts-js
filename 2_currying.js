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
}
