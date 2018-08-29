function createStudent(name, grade) {
  var courses = [];
  function findCourse(courseNum) {
    return courses.filter(function(course) {
      return course.code === courseNum;
    })[0];
  }
  return {
    name: name,
    grade: grade,
    info: function () {
      console.log(this.name + ' is a ' + this.grade + ' year student');
    },
    addCourse: function(course) {
      courses.push(course);
    },
    listCourses: function () {
      console.log(courses);
    },
    addNote: function(courseNum, note) {
      var course = findCourse(courseNum);
      if (course.hasOwnProperty('note')) {
        course.note += (' // ' + note);
      } else {
        course.note = note;
      }
    },
    updateNote: function(courseNum, note) {
      var course = findCourse(courseNum);
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
