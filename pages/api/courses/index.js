import coursesModel from "@/models/course";
import { throwError, throwErrorText, throwRouteError } from "@/utils/api/error";
import "@/utils/api/middleWare";
import { send404Response } from "@/utils/api/response";
import courseSchema from "@/validator/course";
export default async (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        try {
          let result = null;
          try {
            result = courseSchema.parse(req.body);
          } catch (error) {
            throwErrorText(JSON.parse(error.message)[0].message)
          }
          console.log("result ->", result);
          const course = await coursesModel.create(result);

          return res.status(201).json({
            message: "Course created successfully.",
            data: course,
          });
        } catch (error) {
          throwError(error);
        }
      case "GET": {
        const { q } = req.query;
        const courses = q
          ? await coursesModel
              .find({ title: { $regex: q } }, "-__v")
              .populate("teacher", "name")
          : await coursesModel.find({}, "-__v -updatedAt").populate("teacher", "name");
        return res.status(200).json({
          message: "Courses fetched successfully.",
          data: courses,
        });
      }
      default:
        throwRouteError();
        break;
    }
  } catch (error) {
    send404Response(res, error);
  }
};
