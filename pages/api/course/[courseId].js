import { throw404Error, throwError, throwRouteError } from "@/utils/api/error";
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
  const courseID = req.query.courseId;
  try {
    switch (res.method) {
      case "PUT": {
        try {
          const { title, img } = req.body;
          await coursesModel.updateOne(
            { _id: courseID },
            {
              img,
              title,
              updatedAt: new Date().toLocaleString(),
            }
          );
          const updatedCourse = await coursesModel.findById(courseID);
          return res.json({
            message: "Course updated successfully",
            data: updatedCourse,
          });
        } catch (error) {
          throwError(error);
        }
      }

      case "DELETE": {
        try {
          await coursesModel.deleteOne({ _id: courseID });
          return res.json({
            message: "Course deleted successfully",
          });
        } catch (error) {
          throwError(error);
        }
      }

      default:
        throwRouteError();
        break;
    }
  } catch (error) {
    send404Response(res, error);
  }
};
