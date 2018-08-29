function createSchool() {
  var students = [];
  return {
    addStudent: function(student) {
      var allowedGrades = ['1st', '2nd', '3rd', '4th', '5th'];
      if (allowedGrades.includes(student.grade)) {
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },
    enrollStudent: function(student, course) {
      student.addCourse(course);
    },
    addGrade: function(student, courseNum, grade) {
      student.findCourse(courseNum).grade = grade;
    },
    getReportCard: function(student) {
      student.listCourses().forEach(function(course) {
        if (course.grade) {
          console.log(course.name + ': ' + course.grade);
        } else {
          console.log(course.name + ': In progress');
        }
      });
    },
    courseReport: function(courseName) {
      var totalScores = 0;
      var studentTotal = 0;
      var results = [];
      students.forEach(function(student) {
        var studentCourse = student.courses.filter(function(course) {
          return course.name === courseName;
        })[0];
        console.log(studentCourse);
        if (studentCourse === undefined) { ;}
        else if (studentCourse.grade === undefined) { ;}
        else if (studentCourse !== undefined) {
          totalScores += studentCourse.grade;
          studentTotal += 1;
          results.push((student.name + ': ' + studentCourse.grade));
        }
      });

      if (results.length > 0) {
        console.log('=' + courseName + ' Grades=')
        results.forEach(function(nameGrade) {
          console.log(nameGrade);
        });
        console.log('---');
        console.log('Course Average: ' + (totalScores / studentTotal));
      } else {
        return undefined;
      }
    },
  };
}

function createStudent(name, grade) {
  var courses = [];
  return {
    name: name,
    grade: grade,
    courses: courses,
    findCourse: function(courseNum) {
      return courses.filter(function(course) {
        return course.code === courseNum;
      })[0];
    },
    info: function () {
      console.log(this.name + ' is a ' + this.grade + ' year student');
    },
    addCourse: function(course) {
      courses.push(course);
    },
    listCourses: function () {
      return courses;
    },
    addNote: function(courseNum, note) {
      var course = this.findCourse(courseNum);
      if (course.hasOwnProperty('note')) {
        course.note += (' // ' + note);
      } else {
        course.note = note;
      }
    },
    updateNote: function(courseNum, note) {
      var course = this.findCourse(courseNum);
      course.note = note;
    },
    viewNotes: function() {
      courses.forEach(function(course) {
        if (course.hasOwnProperty('note')) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },
  };
}

var foo = createStudent('Foo', '1st');
var bar = createStudent('Bar', '2nd');
var qux = createStudent('Qux', '3rd');
var sam = createStudent('Sam', '6th');

var school = createSchool();
// var math = { name: 'Math', code: 101 };
// var advancedMath = { name: 'Advanced Math', code: 102 };
// var physics = { name: 'Physics', code: 202 };

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);
school.addStudent(sam); // Invalid Year

school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);


school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');  // undefined
