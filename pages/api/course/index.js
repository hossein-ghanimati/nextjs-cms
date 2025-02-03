import coursesModel from "@/models/course";
import { throwRouteError } from "@/utils/api/error";
import "@/utils/api/middleWare"
import { send404Response } from "@/utils/api/response";
export default (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        const { img, title } = req.body;
        const course = coursesModel.create({
          img,
          title,
        });
        return res.staus(201).json({
          message: "Course created successfully.",
          data: course,
        });
      default:
        throwRouteError();
        break;
    }
  } catch (error) {
    send404Response(res, error)
  }
};
