import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

function Form() {
  const [formData, setFormData] = useState({
    applicationDate: "",
    jobTitle: "",
    company: "",
    companyLogo: "",
    status: "",
    contact: {
      name: "",
      email: "",
    },
    interviews: [{ round: "", date: dayjs(), id: uuidv4() }],
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleContactChange(event) {
    setFormData({
      ...formData,
      contact: {
        ...formData.contact,
        [event.target.name]: event.target.value,
      },
    });
  }

  function handleInterviewRoundChange(event) {
    setFormData({
      ...formData,
      interviews: formData.interviews.map((interview) => {
        if (event.target.id !== interview.id) {
          return interview;
        } else {
          return {
            ...interview,
            round: event.target.value,
          };
        }
      }),
    });
  }

  function handleInterviewDateChange(id, value) {
    setFormData({
      ...formData,
      interviews: formData.interviews.map((interview) => {
        if (id !== interview.id) {
          return interview;
        } else {
          return {
            ...interview,
            date: value,
          };
        }
      }),
    });
  }

  function handleAddInterviewButtonClick() {
    setFormData({
      ...formData,
      interviews: [...formData.interviews, { round: "", date: dayjs(), id: uuidv4() }],
    });
  }

  const navigate = useNavigate();

  function handleSubmit(event) {
    console.log("hi");
    event.preventDefault();
    fetch("http://localhost:8000/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        applicationDate: dayjs().format("MMM D, YYYY"),
        accepted: false
      }),
    })
      .then((r) => r.json())
      .then(() => navigate("/"));
  }

  const applicationStatusOptions = [
    { value: "Application Sent" },
    { value: "Interviewing" },
    { value: "Application Closed" },
  ];

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
        <TextField
          id="company-name"
          label="Company Name"
          variant="outlined"
          name="company"
          value={formData.company}
          onChange={handleChange}
          sx={{ m: 0.5, width: "40%" }}
        />
        <TextField
          id="job-title"
          label="Job Title"
          variant="outlined"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          sx={{ m: 0.5, width: "40%" }}
        />
        <TextField
          id="company-logo"
          label="Company Logo"
          variant="outlined"
          name="companyLogo"
          value={formData.companyLogo}
          onChange={handleChange}
          sx={{ m: 0.5, width: "40%" }}
        />
        <TextField
          id="application-status"
          select
          label="Application Status"
          variant="outlined"
          name="status"
          value={formData.status}
          onChange={handleChange}
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

        <div id="interview-rows">
          {formData.interviews.map((interview) => {
            return (
              <Box key={interview.id}>
                <TextField
                  id={interview.id}
                  label="Interview No."
                  variant="outlined"
                  name="round"
                  value={interview.round}
                  onChange={handleInterviewRoundChange}
                  sx={{ m: 0.5, width: "40%" }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Interview Date"
                    name="date"
                    value={interview.date}
                    onChange={(newValue) => handleInterviewDateChange(interview.id, newValue)}
                    sx={{ m: 0.5, width: "40%" }}
                  />
                </LocalizationProvider>
              </Box>
            );
          })}
        </div>

        <Button
          variant="text"
          onClick={handleAddInterviewButtonClick}
          sx={{
            marginBottom: "30px",
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "20px",
          }}
        >
         <Typography fontWeight="bold"> + Add New{" "} </Typography>
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
          name="name"
          value={formData.contact.name}
          onChange={handleContactChange}
          sx={{ m: 0.5, width: "40%" }}
        />
        <TextField
          id="contact-email"
          label="Email"
          variant="outlined"
          name="email"
          value={formData.contact.email}
          onChange={handleContactChange}
          sx={{ m: 0.5, width: "40%", marginBottom: "40px" }}
        />

        <Button
          variant="contained"
          sx={{ marginBottom: "40px", marginLeft: "35%", marginRight: "35%" }}
          type="submit"
          onClick={handleSubmit}
        >
          Submit Application
        </Button>
      </Box>
    </>
  );
}

export default Form;
