import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

function NextInterview({ apps }) {
  const interviews = [];
  apps.map((app) => {
    app.interviews.map((interview) => {
      interviews.push({
        date: interview.date,
        logo: app.companyLogo,
        contact: app.contact,
      });
    });
  });

  let upcomingInterview;
  for (let i = 0; i < interviews.length; i++) {
    if (
      dayjs(interviews[i].date).isAfter(dayjs()) &&
      (!upcomingInterview || dayjs(interviews[i].date).isBefore(dayjs(upcomingInterview.date)))
    ) { 
      upcomingInterview = interviews[i];
    }
  }
  console.log(upcomingInterview)

  return (
    <Card
      sx={{
        boxShadow: 2,
        width: "45%",
        borderRadius: 2,
        textAlign: "center",
        marginLeft: "5px",
        marginTop: "30px",
        backgroundColor: "white",
        alignItems: "center",
        height: "200px",
        flexShrink: "0",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Typography gutterBottom variant="h5" component="div">
            Next Interview:
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <img
              className="logo"
              alt="company-logo"
              src={upcomingInterview?.logo}
            ></img>
          </Typography>
        </Stack>
        <Typography
          color="text.secondary"
          variant="body1"
          sx={{ textAlign: "left" }}
        >
          {dayjs(upcomingInterview?.date).format("MMM D, YYYY")} 
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2, marginTop: "5px" }}>
        <Stack direction="column" spacing={1}>
          <Typography gutterBottom variant="h9" component="div">
            Contact: {upcomingInterview?.contact?.name}
          </Typography>
          <Typography gutterBottom variant="h9" component="div">
            {upcomingInterview?.contact?.email}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}

export default NextInterview;
