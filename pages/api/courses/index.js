import coursesModel from "@/models/course";
import { throwError, throwRouteError } from "@/utils/api/error";
import "@/utils/api/middleWare";
import { send404Response } from "@/utils/api/response";
export default async (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        try {
          const { title, teacher } = req.body;
          const course = await coursesModel.create({
            title,
            teacher
          });

          return res.status(201).json({
            message: "Course created successfully.",
            data: course,
          });
        } catch (error) {
          throwError(error);
        }
      case "GET": {
        const {q} = req.query;
        const courses = q ? await coursesModel.find({title: {$regex: q}}).populate("teacher") :  await coursesModel.find().populate("teacher");
        return res.status(200).json({
          message: "Courses fetched successfully.",
          data: courses,
        })
      }
      default:
        throwRouteError();
        break;
    }
  } catch (error) {
    send404Response(res, error);
  }
};
