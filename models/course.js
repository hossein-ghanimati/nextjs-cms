import "@/utils/api/middleWare"

const { default: mongoose } = require("mongoose");
import "./teacher";

export const schema = mongoose?.Schema({
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  img: {
    type: String,
    default: "/images/courses/js.png"
  },
  title: {
    type: String,
    minLength: 3,
    required: true,
  }
}, {
  timestamps: true,
})

export default mongoose?.models.Course || mongoose?.model("Course", schema)