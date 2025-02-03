import {
  throw404Error,
  throwError,
  throwErrorText,
  throwRouteError,
} from "@/utils/api/error";
import "@/utils/api/middleWare";
import { send404Response } from "@/utils/api/response";
import coursesModel from "@/models/course";

// case "GET":
//         try {
//           const course = await coursesModel.findById(courseID)
//           if (!course) {
//             throw404Error("Course", courseID)
//           }
//           return res.json({
//             message: "Course fetched successfully",
//             data: course
//           })
//         } catch (error) {
//           throwError(error)
//         }
export default async (req, res) => {
  try {
    const courseID = req.query.courseId;

    switch (req.method) {
      case "PUT":
        const { title } = req.body;
        const wannaEditCourse = await coursesModel.findByIdAndUpdate(courseID, {
          title,
          updatedAt: new Date().toLocaleString(),
        });

        if (!wannaEditCourse) {
          throw404Error("Course", courseID);
        }
        if (wannaEditCourse.title === title) {
          throwErrorText("Course already updated");
        }
        const editedCourse = await coursesModel.findById(courseID);
        return res.json({
          message: "Course updated successfully",
          data: editedCourse,
        });

      case "DELETE": {
        const deletedCourse = await coursesModel.findByIdAndDelete(courseID);
        if (!deletedCourse) {
          throw404Error("Course", courseID);
        }
        return res.json({
          message: "Course deleted successfully",
        });
      }
      default:
        break;
    }
  } catch (error) {
    send404Response(res, error);
  }
};
