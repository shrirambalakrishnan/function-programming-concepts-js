const R = require('ramda');

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

switch (process.env.CASE) {
  case "1":
    console.log('---------------------- CASE 1 ----------------------');

    students.forEach( (student, index) => {
      studentPercentage = calcPercentage( scoresOutOfTen[index] );
      studentGrade      = calculateGrade(studentPercentage);

      console.log(`${student} got grade '${studentGrade}' in English`)
    });

    break;

  case "2":
    console.log('---------------------- CASE 2 ----------------------');

    console.log('~~~~~~~~~~~~~~~~~~~ compose ~~~~~~~~~~~~~~~~~~');
    const gradeCalculator = R.compose(calculateGrade, calcPercentage);
    console.log("gradeCalculator = ", gradeCalculator);

    students.forEach( (student, index) => {
      grade = gradeCalculator( scoresOutOfTen[index] );
      console.log(`${student} got grade '${grade}' in English`);
    });

    console.log('~~~~~~~~~~~~~~~~~~~ pipe ~~~~~~~~~~~~~~~~~~');
    const gradeCalculator2 = R.pipe(calcPercentage, calculateGrade);
    console.log("gradeCalculator2 = ", gradeCalculator2);

    students.forEach( (student, index) => {
      let grade2 = gradeCalculator2( scoresOutOfTen[index] );
      console.log(`${student} got grade '${grade2}' in English`);
    });

    break;
}
