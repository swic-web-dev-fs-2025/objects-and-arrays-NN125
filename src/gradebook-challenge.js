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
    // Your implementation here
    // Should return percentage (0-100) based on assignments

    const getCourse = gradeBook.courses.find((c) => c.id === courseId);
    if (!getCourse) return null;
    const getStudent = getCourse.students.find((s) => s.id === studentId);
    if (!getStudent || !getStudent.assignments.length) return null;

    const totalPoints = getStudent.assignments.reduce(
      (sum, a) => sum + a.points,
      0
    );
    const totalMaxPoints = getStudent.assignments.reduce(
      (sum, a) => sum + a.maxPoints,
      0
    );

    return totalMaxPoints > 0
      ? Math.round((totalPoints / totalMaxPoints) * 100)
      : null;
  },

  getClassAverage(courseId) {
    const getCourse = gradeBook.courses.find((c) => c.id === courseId);
    if (!getCourse || !getCourse.students.length) return null;

    const percentages = getCourse.students
      .map((getStudent) =>
        gradeBook.getStudentPercentage(courseId, getStudent.id)
      )
      .filter((p) => p !== null);

    if (!percentages.length) return null;

    const average =
      percentages.reduce((sum, p) => sum + p, 0) / percentages.length;

    return Math.round(average);
  },

  // TODO: Add new assignment to all students (immutably!)
  addAssignment(courseId, assignmentName, maxPoints) {
    // Your implementation here
    // Should return new gradebook object with assignment added
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
console.info("Updated gradebook:", updatedGradeBook);
