import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

function StatusDropDown({ apps, app, setApps }) {

  const applicationStatusOptions = [
    { value: "Application Sent" },
    { value: "Interviewing" },
    { value: "Application Closed" },
  ];

  function handleUpdateApp(appToUpdate) {
    const updatedApps = (apps || []).map((app) => {
        if (app.id === appToUpdate.id) {
            return appToUpdate
        } else {
            return app
        }
    })
    setApps(updatedApps);
  }

  function handleClick(option) {
    fetch(`http://localhost:8000/applications/${app.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "Application/JSON",
        },
        body: JSON.stringify({
            status: option.value,
        }),
    })
    .then((r) => r.json())
    .then((updatedApp) => handleUpdateApp(updatedApp));
  }

  return (
    <>
    <TextField
      id="application-status"
      select
      label="Application Status"
      variant="outlined"
      name="status"
      value={app.status}
      sx={{ m: 0.5, width: "80%", backgroundColor: "ButtonHighlight" }}
    >
      {applicationStatusOptions.map((option) => (
        <MenuItem key={option.value} value={option.value} onClick={() => handleClick(option)}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
    </>
  );
}

export default StatusDropDown;
