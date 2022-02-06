import React from "react";
import { useFetch } from "../../hooks/useFetch";
import API from "../../API";

const JobApplicant = ({ JobPostID, setopenJobApplicants, setJobPostID }) => {
  const { content, loading, error } = useFetch();
  // const { content, loading } = useFetch(
  //   API.fetchJobApplicants(),
  //   "applications"
  // );

  API.fetchStudents(studentUID), `${studentUID}Details`;
  let student = [];
  if (!loading) {
    student = content.data;
  }
  console.log(student);
  return (
    <>
      <button
        onClick={() => {
          setJobPostID("");
          setopenJobApplicants(false);
        }}
      >
        Close Job Application
      </button>

      <h3>Job Applicants</h3>
      {Array.isArray(student?.skills) && (
        <>
          <ul>
            {student?.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default JobApplicant;
