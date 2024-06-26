const { DataTypes } = require("sequelize");
const sequelize = require("../database.js");
// const Attendance = require("./attendance.model")

const students = sequelize.define("student", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  classSequentialNumber: {
    type: DataTypes.INTEGER,
    defaultValue: 1, // Default to 1 for the first student in a class
},
  matriculationNumber: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true, 
},
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DOB: {
    type: DataTypes.STRING,
  },
  LGA: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,  // phoneNumber changed to string
    allowNull: false,
  },
  yearOfAdmission: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  previousClass: {
    type: DataTypes.STRING,
  },
  className: {
    type: DataTypes.STRING,
  },
  teacher_id: {
    // Use the same data type as in the Tecaher model
    /**
     * @dev This little buy {INTEGER} caused the prod to be down
     */
    type: DataTypes.UUID,
    required: true,
    allowNull: false,
  },
});
// students.hasMany(Attendance, {
//   foreignKey: "attendance_id",
//   as: "attendance",
// });

module.exports = students;
