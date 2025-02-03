import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";
import { editCourse, removeCourse } from "@/actions/course";
import { promiseNotify } from "@/utils/api/toastify";



const Course = (props) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const hideAddCourseModal = () => setShowAddCourseModal(false);
  const removeCourseHandler = async (id) => {
    await promiseNotify("Deleting course ...", 
      () => removeCourse(id),
      () => {}
    )
  }

  const editCourseHandler = async (id, title) => {
    await promiseNotify("Editing course ...", 
      () => editCourse(id, title),
      () => {}
    )
  }
  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>
          {
            props.courses?.length && props.courses.map(course => <CoursesItem key={course._id} {...course} onDelete={async() => await removeCourseHandler(course._id)} editHandler={async courseName => await editCourseHandler(course._id, courseName)} />)
          }
        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={hideAddCourseModal} />
      )}
    </>
  );
};



export default Course;
