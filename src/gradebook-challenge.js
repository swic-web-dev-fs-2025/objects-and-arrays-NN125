const gradeBook = {
  courses: [
    {
      id: "CS277",
      name: "Web Development",
      students: [
        {
          id: 1,
          name: "Maria",
          assignments: [
            { name: "Project 1", points: 85, maxPoints: 100 },
            { name: "Quiz 1", points: 18, maxPoints: 20 },
          ],
        },
        {
          id: 2,
          name: "John",
          assignments: [
            { name: "Project 1", points: 92, maxPoints: 100 },
            { name: "Quiz 1", points: 19, maxPoints: 20 },
          ],
        },
      ],
    },
  ],

  getStudentPercentage(courseId, studentId) {
    const getCourse = gradeBook.courses.find(
      (course) => course.id === courseId
    );
    if (!getCourse) return null;
    const getStudent = getCourse.students.find(
      (student) => student.id === studentId
    );
    if (!getStudent || !getStudent.assignments.length) return null;

    const totalPoints = getStudent.assignments.reduce(
      (sum, accumulation) => sum + accumulation.points,
      0
    );
    const totalMaxPoints = getStudent.assignments.reduce(
      (sum, accumulation) => sum + accumulation.maxPoints,
      0
    );

    const pointMath = (totalPoints / totalMaxPoints) * 100;

    return Math.round(pointMath);
  },

  getClassAverage(courseId) {
    const getCourse = gradeBook.courses.find(
      (course) => course.id === courseId
    );
    if (!getCourse || !getCourse.students.length) return null;

    const percentages = getCourse.students
      .map((getStudent) =>
        gradeBook.getStudentPercentage(courseId, getStudent.id)
      )
      .filter((percent) => percent !== null);

    if (!percentages.length) return null;

    const average =
      percentages.reduce((sum, percent) => sum + percent, 0) /
      percentages.length;

    return Math.round(average);
  },

  // The new ESLint rules are freaking out over the 3 parameters being here, even though that's part of the starting code. So I'm ignoring it.
  // eslint-disable-next-line max-params
  addAssignment(courseId, assignmentName, maxPoints) {
    const updatedGradeBook = {
      ...gradeBook,
      courses: gradeBook.courses.map((course) => {
        if (course.id !== courseId) return course;
        return {
          ...course,
          students: course.students.map((student) => ({
            ...student,
            assignments: [
              ...student.assignments,
              { name: assignmentName, points: 0, maxPoints },
            ],
          })),
        };
      }),
    };
    // Only return the data, not the methods
    return updatedGradeBook;
  },
};

// Test your implementations
console.info("=== Grade Book Testing ===");

// Test student percentage
const mariaPercentage = gradeBook.getStudentPercentage("CS277", 1);
console.info("Maria's percentage:", mariaPercentage);

// Test class average
const classAverage = gradeBook.getClassAverage("CS277");
console.info("Class average:", classAverage);

// Test adding assignment
const updatedGradeBook = gradeBook.addAssignment("CS277", "Homework 1", 50);
console.info("Updated gradebook:", JSON.stringify(updatedGradeBook, null, " "));
