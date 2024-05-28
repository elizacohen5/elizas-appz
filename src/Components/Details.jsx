// will dynamically render information for each individual application
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

function Details() {
  const [app, setApp] = useState({});
  const params = useParams();
  const appId = params.id;

  useEffect(() => {
    fetch(`http://localhost:8000/applications/${appId}`)
      .then((r) => r.json())
      .then((data) => setApp(data))
      .catch((error) => console.error(error));
  }, [appId]);

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
          paddingBottom: "30px",
          backgroundColor: "white",
        }}
      >
        <img src={app.companyLogo} className="details-img" />
        <Typography
          variant="h6"
          color="primary"
          gutterBottom
          marginTop="10px"
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

        {(app.interviews || []).map((interview) => {
          const formattedDate = dayjs(interview?.date).format("MMM D, YYYY");
          return (
            <Typography
              variant="h6"
              color="black"
              gutterBottom
              sx={{ textAlign: "auto" }}
            >
              {`Round ${interview?.round}: ${formattedDate}`}
            </Typography>
          );
        })}
        <Typography
          variant="h6"
          color="black"
          gutterBottom
          sx={{ textAlign: "auto", marginTop: "30px" }}
        >
          Contact Information:
        </Typography>
        <Typography
          variant="h6"
          color="black"
          gutterBottom
          sx={{ textAlign: "auto", marginTop: "10px" }}
        >
          {app?.contact?.name}: <a href="mailto:{app.contact.email}">{app?.contact?.email}</a>
        </Typography>
      </Box>
    </>
  );
}

export default Details;
