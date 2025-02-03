import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";
import coursesModel from "@/models/course";

export const getStaticProps = async () => {
  const courses = await coursesModel.find()
  return {
    props: {
      courses
    }
  }
}


const Course = (props) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const hideAddCourseModal = () => setShowAddCourseModal(false);

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
            props.courses?.length && props.courses.map(course => <CoursesItem key={course._id} {...course} />)
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
