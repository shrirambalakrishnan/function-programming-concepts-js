const welcomeUser = (welcomeText, userName) => {
  console.log(`${welcomeText},  ${userName}`);
}

let singleUserName = "Shriram";
let userNames = ["Shriram", "Gowtham", "Kaushik", "Praveen", "Manikandan"];

switch (process.env.CASE) {
  case "1":
    //`//////////////////////////////////////////////////////////////////
    // Case 1
    // Wecome single user
    welcomeUser("Good Morning!", singleUserName);
    break;
    //////////////////////////////////////////////////////////////////////////


  case "2":
    ////////////////////////////////////////////////////////////////////////
    // Case 2
    // Welcome multiple users
    userNames.map( (userName) => welcomeUser("Good Morning!", userName) );

    break;
    ////////////////////////////////////////////////////////////////////////

  case "3":
    ////////////////////////////////////////////////////////////////////////
    // Case 3
    // Welcome multiple users
    let userNames = ["Shriram", "Gowtham", "Kaushik", "Praveen", "Manikandan"]

    // Override welcomeUser
    const welcomeUser = (welcomeText) => {
      return (userName) => {
        console.log(`${welcomeText},  ${userName}`);
      }
    }

    let goodMorningGreeting = welcomeUser("Good Morning!");

    console.log(goodMorningGreeting);

    userNames.map( (userName) => goodMorningGreeting(userName) );
    ////////////////////////////////////////////////////////////////////////

}
