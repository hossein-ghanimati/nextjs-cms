import Course from "@/components/templates/index/Course";

import coursesModel from "@/models/course";

export const getStaticProps = async () => {
  const response = await coursesModel.find()
  const courses = JSON.parse(JSON.stringify(response))
  return {
    props: {
      courses
    }
  }
}

const index = (props) => {
  return <Course courses={props.courses}/>;
};

export default index;
