import React from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProfileButton = styled(Button)(({ theme }) => ({
  marginBottom: "15px",
  textTransform: "none",
  borderRadius: "10px",
  background: "#1E4786",
  color: "white",
}));

const Buttonss = (props) => {
  const {
    openStudentList,
    setopenStudentList,
    openAddCompany,
    setOpenAddCompany,
  } = props;
  // const { openStudentList } = props.openStudentList;

  const handleClick = (i) => {
    setopenStudentList(false);
    setOpenAddCompany(false);

    if (i === 1) {
      setopenStudentList(true);
    } else if (i === 2) {
      setOpenAddCompany(true);
      console.log("Setting  openAddCompany", openAddCompany);
    }
  };
  return (
    <>
      <Link to="/View" style={{ textDecoration: "none" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="column" justify-justifyContent="space-evenly">
            <ProfileButton variant="contained">VIEW DRIVES</ProfileButton>
            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(1);
              }}
            >
              VIEW STUDENT LIST
            </ProfileButton>

            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(2);
              }}
            >
              NEW DRIVE
            </ProfileButton>
            <ProfileButton
              variant="contained"
              onClick={() => {
                // setopenStudentList(!openStudentList);
              }}
            >
              SAMPLE BUTTON
            </ProfileButton>
            {/* <Button
            onClick={() => setopenStudentList(!openStudentList)}
            title="VIEW STUDENT LIST"
            />
            <Button title="ADD COURSES" />
          <Button title="ADD COMPANY" /> */}
          </Stack>
        </Stack>
      </Link>
    </>
  );
};

export default Buttonss;
