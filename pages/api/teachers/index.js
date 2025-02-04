import teachersModel from "@/models/teacher";
import "@/utils/api/middleWare";
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const teachers = await teachersModel.find()
      return res.status(200).json({
        message: "Teachers Get SuccessFully",
        data: teachers
      });
    case "POST":
      const teacher = await teachersModel.create({
        name: req.body.name,
      })
      return res.status(201).json({
        message: "Teacher Created SuccessFully",
        data: teacher
      });
      break;
  
    default:
      break;
  }
}