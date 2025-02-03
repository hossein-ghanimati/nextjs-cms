import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useActionState } from "react";
import { promiseNotify } from "@/utils/api/toastify";
import { addCourse } from "@/actions/course";

const AddCourseModal = ({ hideAddCourseModal }) => {
  const submit = async (e) => {
    e.preventDefault();
    const courseName = e.target.courseName.value.trim();
    await promiseNotify(
      "Creating Course ...",
      () => addCourse(courseName),
      (data) => {
        console.log("add courseData ->", data);
      }
    );
  }
  return (
    <div className={styles.modal_container} id="add-new-course-modal">
      <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
        <form onSubmit={submit} className={styles.edit_user_form}>
          <div className={styles.input_field}>
            <span>
              <FontAwesomeIcon icon={faTag} />
            </span>
            <input
              type="text"
              name="courseName"
              placeholder="نام دوره"
              spellcheck="false"
            />
          </div>

          <button type="submit" className={styles.update_btn}>
            ثبت دوره
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
