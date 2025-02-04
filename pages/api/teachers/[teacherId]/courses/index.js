import coursesModel from "@/models/course";
import "@/utils/api/middleWare";
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const courses = await coursesModel.find({
        teacher: req.query.teacherId
      }).populate("teacher");
      return res.status(201).json({
        message: "Teacher Courses Get SuccessFully",
        data: courses
      });
      break;
  
    default:
      break;
  }
}