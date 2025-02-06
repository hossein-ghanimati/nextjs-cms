const { default: mongoose } = require("mongoose");
import { schema as CourseSchema } from "./course";
const schema = mongoose?.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  }
}, {
  timestamps: true,
})

schema.virtual({
  courses: {
    ref: "Course",
    localField: "_id",
    foreignField: "teacher",
  }
})

export default mongoose?.models.Teacher || mongoose?.model("Teacher", schema)