import React, { useState, useEffect } from "react";
import AppChart from "./AppChart";
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
            variant="h6"
            color="primary"
            gutterBottom
            sx={{ textAlign: "left", marginLeft: "10px" }}
          >
            Recent Applications
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Company</strong>
                </TableCell>
                <TableCell>
                  <strong>Date Applied</strong>
                </TableCell>
                <TableCell>
                  <strong>Job Title</strong>
                </TableCell>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apps.map((app) => (
                <TableRow className="app-row" key={app.id}>
                  <TableCell className="img-cell">
                    <Link to={`/details/${app.id}`} className="table-link">
                      <img
                        className="logo"
                        alt="company-logo"
                        src={app.companyLogo}
                      ></img>
                    </Link>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link to={`/details/${app.id}`} className="table-link">
                      {app.applicationDate}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link to={`/details/${app.id}`} className="table-link">
                      {app.jobTitle}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link to={`/details/${app.id}`} className="table-link">
                      {app.status}
                    </Link>
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
