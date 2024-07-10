import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEnrolledCourses from "../../../Services/operations/profileAPI";

export const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const fetchEnrolledCourses = async () => {
    try {
      const response = await getEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("ENROLLED_COURSE_DATA", error);
    }
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  console.log("enrolledCourses", enrolledCourses);

  return (
    <div className="flex flex-col text-white">
      <h1>Enrolled Courses</h1>
      <div className="flex gap-x-10"></div>
      {!enrolledCourses ? (
        <div>Loading....</div>
      ) : enrolledCourses.length? (
        <div>
          <div>
            <p>Course name</p>
            <p>Duration</p>
            <p>Percentage Complete</p>
          </div>
          {enrolledCourses.map((course, index) => (
            <div key={index} className="flex gap-x-10 mb-4">
              <div className="flex gap-x-5">
                <img
                  src={course.thumbnail}
                  alt="thumbnail"
                  className="w-16 h-16"
                />
                <div className="flex flex-col gap-y-2">
                  <h1>{course.heading}</h1>
                  <p>{course.description}</p>
                </div>
              </div>
              <p>{course.duration}</p>
              <div className="flex flex-col items-start">
                <p>{course.percentageComplete}%</p>
                <ProgressBar
                  completed={course.percentageComplete}
                  maxCompleted={100}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white">You have not enrolled in any course yet.</div>
      )}
    </div>
  );
};
