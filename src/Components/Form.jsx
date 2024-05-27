import React, { useState } from "react";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

function Form() {
  const [interviewForm, setInterviewForm] = useState([
    <TextField
      key="interview-number-0"
      id="interview-number-0"
      label="Interview No."
      variant="outlined"
      sx={{ m: 0.5, width: "40%" }}
    />,
    <LocalizationProvider key="interview-date-0" dateAdapter={AdapterDayjs}>
      <DatePicker label="Interview Date" sx={{ m: 0.5, width: "40%" }} />
    </LocalizationProvider>,
  ]);
  const [applicationStatus, setApplicationStatus] = useState("");

  function handleAddInterviewButtonClick() {
    const newInterviewForm = interviewForm.concat([
      <TextField
        key={`interview-number-${interviewForm.length}`}
        id={`interview-number-${interviewForm.length}`}
        label="Interview No."
        variant="outlined"
        sx={{ m: 0.5, width: "40%" }}
      />,
      <LocalizationProvider
        key={`interview-date-${interviewForm.length}`}
        dateAdapter={AdapterDayjs}
      >
        <DatePicker label="Interview Date" sx={{ m: 0.5, width: "40%" }} />
      </LocalizationProvider>,
    ]);
    setInterviewForm(newInterviewForm);
  }

  const applicationStatusOptions = [
    {
      value: "Application Sent",
    },
    {
      value: "Interviewing",
    },
    {
      value: "Application Closed",
    },
  ];

  const handleApplicationStatusChange = (event) => {
    setApplicationStatus(event.target.value);
  };

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
        <Typography
          variant="h5"
          color="primary"
          gutterBottom
          sx={{ textAlign: "auto" }}
        >
          New Application
        </Typography>
        <Box
          component="form" /* This is a form. Add submit event listener here */
          autoComplete="off"
        >
          <TextField
            id="company-name"
            label="Company Name"
            variant="outlined"
            sx={{ m: 0.5, width: "40%" }}
          />
          <TextField
            id="job-title"
            label="Job Title"
            variant="outlined"
            sx={{ m: 0.5, width: "40%" }}
          />
          <TextField
            id="company-logo"
            label="Company Logo"
            variant="outlined"
            sx={{ m: 0.5, width: "40%" }}
          />
          <TextField
            id="application-status"
            select
            label="Application Status"
            variant="outlined"
            value={applicationStatus}
            onChange={handleApplicationStatusChange}
            sx={{ m: 0.5, width: "40%" }}
          >
            {applicationStatusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <Typography
            color="252d3b"
            gutterBottom
            variant="h6"
            sx={{ paddingTop: "20px" }}
          >
            {" "}
            Interviews{" "}
          </Typography>

          <div id="interview-rows">{interviewForm}</div>

          <Button
            variant="contained"
            onClick={handleAddInterviewButtonClick}
            sx={{
              marginBottom: "30px",
              marginLeft: "50px",
              marginRight: "50px",
              marginTop: "20px",
            }}
          >
            Add New{" "}
          </Button>
          <Typography
            color="252d3b"
            gutterBottom
            variant="h6"
            sx={{ paddingTop: "20px" }}
          >
            {" "}
            Contact Information{" "}
          </Typography>
          <TextField
            id="contact-name"
            label="Name"
            variant="outlined"
            sx={{ m: 0.5, width: "40%" }}
          />
          <TextField
            id="contact-phone-number"
            label="Phone Number"
            variant="outlined"
            sx={{ m: 0.5, width: "40%", marginBottom: "40px" }}
          />
        </Box>
        <Button variant="contained" sx={{ marginBottom: "40px" }}>
          Submit Application
        </Button>
      </Box>
    </>
  );
}

export default Form;
