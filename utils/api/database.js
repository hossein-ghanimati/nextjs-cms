const { default: mongoose } = require("mongoose")
const uri = process.DB_URI
export const connectToDB = async () => {
  if (mongoose?.connection[0]?.readyState) {
    return false
  }

  try {
    mongoose.connect(uri)
    console.log("Connected To Database Successfully.")
  } catch (error) {
    console.log(`Database Connection Failed. ${error.message}`)
  }
}