import { profileEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";

const { GET_USER_ENROLLED_COURSES_API, GET_USER_DETAILS_API } =
  profileEndpoints;

export default async function getEnrolledCourses(token) {
  try {
    const response = await apiConnector("GET", GET_USER_ENROLLED_COURSES_API,null, {
      Authorization: `Bearer ${token}`,
    });
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Enrolled Courses fetched Successfully");
  } catch (error) {
    console.log("GET_ENROLLED_COURSE_API FAILED", error);
  }
}
