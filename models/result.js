const mongoose = require("mongoose");

// const studentAttendanceSchema = new mongoose.Schema({
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student' // Assuming you have a Student model
//     },
//     attendance: {
//         type: String, // You can change this according to your requirements
//         enum: ['present', 'absent', 'late'] // Example attendance statuses
//     }
// });

// const classSchema = new mongoose.Schema({
//     classNumber: Number,
//     attendance: [studentAttendanceSchema] // Array of student attendance
// });

// const yearSchema = new mongoose.Schema({
//     year: String, // You caan change this according to your requirements
//     classes: [classSchema] // Array of classes for each year
// });

const YearlyAttendance = mongoose.model("YearlyAttendance", yearSchema);

// const yearSchema = new mongoose({
//   year: Date.year(),
//   class: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Class"
//   }
// });



module.exports = {
    Class,

}
