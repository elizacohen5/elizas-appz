import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  console.log(apps);

  return (
    <>
      <React.Fragment>
        <Box
          sx={{
            boxShadow: 2,
            width: "90%",
            borderRadius: 2,
            textAlign: "center",
            margin: "auto",
            marginTop: "30px"
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
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
                <TableRow key={app.id}>
                  <TableCell className="img-cell">
                    <img className="logo" alt="company-logo" src={app.companyLogo}></img>
                  </TableCell>
                  <TableCell>{app.applicationDate}</TableCell>
                  <TableCell>{app.jobTitle}</TableCell>
                  <TableCell>{app.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </React.Fragment>
      {/* dynamically link each list item to the details page for that item. Use the 
            Canvas react-router lesson for help */}
      <NavLink to="/details">Details</NavLink>
    </>
  );
}

export default Home;
