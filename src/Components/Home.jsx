import React, { useState, useEffect } from "react";
import AppChart from "./AppChart";
import StatusDropDown from "./StatusDropDown";
import DeleteApp from "./DeleteApp";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Home() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/applications")
      .then((r) => r.json())
      .then((apps) => setApps(apps));
  }, []);

  return (
    <>

      <Box
        sx={{
          boxShadow: 2,
          width: "90%",
          borderRadius: 2,
          textAlign: "center",
          margin: "auto",
          marginTop: "30px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AppChart apps={apps} />
      </Box>
      <React.Fragment>
        <Box
          sx={{
            boxShadow: 2,
            width: "90%",
            borderRadius: 2,
            textAlign: "center",
            margin: "auto",
            marginTop: "30px",
            backgroundColor: "white",
            flexShrink: "0"
          }}
        >
          <Typography
            component="h2"
            variant="h5"
            color="primary"
            gutterBottom
            sx={{ marginLeft: "10px", paddingTop: "20px", paddingBottom: "10px" }}
          >
            Recent Applications
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow >
                <TableCell sx={{textAlign: "center"}}>
                  <strong>Company</strong>
                </TableCell>
                <TableCell sx={{textAlign: "center"}}>
                  <strong>Date Applied</strong>
                </TableCell>
                <TableCell sx={{textAlign: "center"}}>
                  <strong>Job Title</strong>
                </TableCell>
                <TableCell sx={{textAlign: "center"}}>
                  <strong>Status</strong>
                </TableCell>
                <TableCell sx={{textAlign: "center"}}>
                <strong>Remove</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apps.map((app) => (
                <TableRow className="app-row" key={app.id}>
                  <TableCell className="img-cell" sx={{textAlign: "center"}}>
                    <Link to={`/details/${app.id}`} className="table-link">
                      <img
                        className="logo"
                        alt="company-logo"
                        src={app.companyLogo}
                      ></img>
                    </Link>
                  </TableCell>
                  <TableCell sx={{textAlign: "center"}}>
                    {" "}
                    <Link to={`/details/${app.id}`} className="table-link">
                      {app.applicationDate}
                    </Link>
                  </TableCell>
                  <TableCell sx={{textAlign: "center"}}>
                    {" "}
                    <Link to={`/details/${app.id}`} className="table-link">
                      {app.jobTitle}
                    </Link>
                  </TableCell>
                  <TableCell sx={{textAlign: "center"}}>
                    {" "}
                      <StatusDropDown app={app} apps={apps} setApps={setApps} />
                  </TableCell>
                  <TableCell sx={{textAlign: "center"}}>
                    {" "}
                     <DeleteApp />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </React.Fragment>
 
    </>
  );
}

export default Home;
