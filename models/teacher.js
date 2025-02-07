import "@/utils/api/middleWare"

const { default: mongoose } = require("mongoose");
import  "./course";
const schema = mongoose?.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  }
}, {
  timestamps: true,
})

schema?.virtual({
  courses: {
    ref: "Course",
    localField: "_id",
    foreignField: "teacher",
  }
})

export default mongoose?.models.Teacher || mongoose?.model("Teacher", schema)