const calcPercentage = (scoreOutOfTen) => {
  return ( scoreOutOfTen / 10 ) * 100;
}

const calculateGrade = (percentage) => {
  switch (true) {
    case percentage == 100:
      return 'A+';
      break;

    case percentage >= 90:
      return "A";
      break;

    case percentage >= 80:
      return "B";
      break;

    case percentage >= 70:
      return "C";
      break;

    case percentage >= 60:
      return "D";
      break;

    case percentage >= 50:
      return "E";
      break;

    default:
      return "F";

  }
}

let students        = ["Shriram", "Balakrishnan"]
let scoresOutOfTen  = [10, 8]

students.forEach( (student, index) => {
  studentPercentage = calcPercentage( scoresOutOfTen[index] );
  studentGrade      = calculateGrade(studentPercentage)

  console.log(`${student} got grade '${studentGrade}' in English`)
});
