import React, { useState } from "react";
import Buttonss from "../../components/Buttons";
import StudentList from "../../components/StudentList";
import CompanyForm from "../../components/CompanyForm";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { Card } from "@material-ui/core";
import "./index.css";
import Test from "../../components/test";
import Navbar from "../../components/Navbar";

const ViewPage = () => {
  const [openStudentList, setopenStudentList] = useState(false);
  const [openDrive, setOpenDrive] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openAddCompany, setOpenAddCompany] = useState(false);
  const [openTest, setopenTest] = useState(true);
  console.log(`before pass openAddCompany`, openAddCompany);
  return (
    <>
      {/* <Navbar /> */}

      <Grid container spacing={3}>
        <Grid item sm={4}>
          <div className="b">
            <Buttonss
              openStudentList={openStudentList}
              setopenStudentList={setopenStudentList}
              openAddCompany={openAddCompany}
              setOpenAddCompany={setOpenAddCompany}
            />
          </div>
        </Grid>
        <Grid item sm={4}>
          {openStudentList && <StudentList />}
          {openAddCompany && <CompanyForm />}
          {/* <CompanyForm /> */}
          {/* {console.log(`openAddCompany: ${openAddCompany}`)} */}
        </Grid>
        <Grid item sm={4}>
          {openTest && <Test />}
        </Grid>
      </Grid>
    </>
  );
};

export default ViewPage;
