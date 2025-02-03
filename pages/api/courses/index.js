import coursesModel from "@/models/course";
import { throwError, throwRouteError } from "@/utils/api/error";
import "@/utils/api/middleWare";
import { send404Response } from "@/utils/api/response";
export default async (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        try {
          const { title } = req.body;
          const course = await coursesModel.create({
            title,
          });

          return res.status(201).json({
            message: "Course created successfully.",
            data: course,
          });
        } catch (error) {
          throwError(error)
        }
      default:
        throwRouteError();
        break;
    }
  } catch (error) {
    send404Response(res, error);
  }
};
