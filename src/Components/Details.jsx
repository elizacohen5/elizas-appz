// will dynamically render information for each individual application
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Details() {

  const [app, setApp] = useState({});
  const params = useParams();
  const appId = params.id

  useEffect(() =>{
    fetch(`http://localhost:8000/applications/${appId}`)
    .then(r => r.json())
    .then(data => setApp(data))
    .catch(error => console.error(error));
  }, [appId]);

//   if(!app.status){
//     return <h1>Loading...</h1>;
//   };

  return (
    <>
      <Box
        sx={{
          boxShadow: 2,
          width: "95%",
          borderRadius: 2,
          textAlign: "center",
          margin: "auto",
          marginTop: "30px",
          paddingTop: "40px",
          backgroundColor: "white",
        }}
      >
        <img src={app.companyLogo} 
            className="details-img"
        />
        <Typography
          variant="h6"
          color="primary"
          gutterBottom
          sx={{ textAlign: "auto" }}
        >
         Application Date: {app.applicationDate}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          gutterBottom
          sx={{ textAlign: "auto" }}
        >
         Job Title: {app.jobTitle}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          gutterBottom
          sx={{ textAlign: "auto" }}
        >
         Status: {app.status}
        </Typography>
        <Typography
          variant="h6"
          color="black"
          gutterBottom
          sx={{ textAlign: "auto", marginTop: "20px" }}
        >
         Interviews:
        </Typography>
        <Typography
          variant="h6"
          color="black"
          gutterBottom
          sx={{ textAlign: "auto" }}
        >
         Round 1: {app.interviews?.[0].date}
        </Typography>
        <Typography
          variant="h6"
          color="black"
          gutterBottom
          sx={{ textAlign: "auto", paddingBottom: "20px" }}
        >
           Round 2: {app.interviews?.[1].date}
        </Typography>
      </Box>
    </>
  );
}

export default Details;
