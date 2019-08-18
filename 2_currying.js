const welcomeUser = (welcomeText, userName) => {
  console.log(`${welcomeText},  ${userName}`);
}

switch (process.env.CASE) {
  case "1":
    //`//////////////////////////////////////////////////////////////////
    // Case 1
    // Wecome single user
    welcomeUser("Good Morning!", "Shriram");
    break;
    //////////////////////////////////////////////////////////////////////////


  case "2":
    ////////////////////////////////////////////////////////////////////////
    // Case 2
    // Welcome multiple users
    let userNames = ["Shriram", "Gowtham", "Kaushik", "Praveen", "Manikandan"]

    userNames.map( (userName) => welcomeUser("Good Morning!", userName) );

    break;
    ////////////////////////////////////////////////////////////////////////
}
