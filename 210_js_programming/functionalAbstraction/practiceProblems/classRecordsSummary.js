var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function gradeLookup(grade) {
  var letter;
  if (grade >= 93 && grade <= 100) {
    letter = "(A)";
  } else if (grade >= 85 && grade <= 92) {
    letter = "(B)";
  } else if (grade >= 77 && grade <= 84) {
    letter = "(C)";
  } else if (grade >= 69 && grade <= 76) {
    letter = "(D)";
  } else if (grade >= 60 && grade <= 68) {
    letter = "(E)";
  } else if (grade >= 0 && grade <= 59) {
    letter = "(F)";
  }
  return letter;
}

function calculateExamAvg(examArray) {
  var total = examArray.reduce(function(sum, item) {
    return (sum + item);
  });
  return total / examArray.length;
}

function calculateGrade(examArray, exerciseArray) {
  var averageExam = calculateExamAvg(examArray);
  var totalExercise = exerciseArray.reduce(function(sum, item) {return sum + item});
  var weightedResult = Math.round((averageExam * .65) + (totalExercise * .35));
  return String(weightedResult + ' ' + gradeLookup(weightedResult));
}

function separateExams(examArray) {
  var separatedExams = [];
  var tempArray;
  var i;
  var j;
  for (i = 0; i < examArray[i].length; i += 1) {
    tempArray = [];
    for (j = 0; j < examArray.length; j += 1) {
      tempArray.push(examArray[j][i]);
    }
    separatedExams.push(tempArray);
  }
  return separatedExams;
}

function studentGrades(scores) {
  var grades = [];
  var students = Object.keys(scores);
  students.forEach(function (student) {
    var grade = calculateGrade(scores[student]['scores']['exams'], scores[student]['scores']['exercises']);
    grades.push(grade);
  })
  return grades;
}

function minimumScore(examScores) {
  return examScores.reduce(function (result, current) {
    return current <= result ? current : result;
  });
}

function maximumScore(examScores) {
  return examScores.reduce(function (result, current) {
    return current <= result? result : current;
  });
}

function examStats(scores) {
  var exams = [];
  var examData = Object.keys(scores).map(function (student) {
    return scores[student].scores.exams
  });
  var separatedExams = separateExams(examData);
  separatedExams.forEach(function (examScores) {
    exams.push({
      average: calculateExamAvg(examScores),
      minimum: minimumScore(examScores),
      maximum: maximumScore(examScores),
    })
  });
  return exams;
}

function generateClassRecordSummary(scores) {
  var classRecord = {};
  classRecord['studentGrades'] = studentGrades(scores);
  classRecord['exams'] = examStats(scores);
  return classRecord;
}

generateClassRecordSummary(studentScores);

// returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
