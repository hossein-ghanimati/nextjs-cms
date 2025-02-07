
import { z } from "zod";
const courseSchema = z.object({
  teacher: z.string(),
  img: z.string().default("/images/courses/js.png"),
  title: z.string().min(3),
});

// type courseSchema = z.infer<typeof courseSchema>;
export default courseSchema

