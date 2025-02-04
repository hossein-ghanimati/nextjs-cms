const { default: mongoose } = require("mongoose");

const shema = mongoose?.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  }
}, {
  timestamps: true,
})

export default mongoose?.models.Teacher || mongoose?.model("Teacher", shema)