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

  // TODO: Calculate student's percentage in a course
  getStudentPercentage(courseId, studentId) {
    // Your implementation here
    // Should return percentage (0-100) based on assignments
  },

  // TODO: Get class average for a course
  getClassAverage(courseId) {
    // Your implementation here
    // Should return average percentage for all students
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
