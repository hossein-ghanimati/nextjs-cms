const { default: mongoose } = require("mongoose");

const shema = mongoose?.Schema({
  img: {
    type: String,
    default: "/images/courses/js.png"
  },
  title: {
    type: String,
    minLength: 3,
    required: true,
  },
  updatedAt: {
    type: String,
    default: (new Date).toLocaleString(),
  },
  createAt: {
    type: String,
    default: (new Date).toLocaleString(),
  }
})

export default mongoose?.models.Course || mongoose?.model("Course", shema)