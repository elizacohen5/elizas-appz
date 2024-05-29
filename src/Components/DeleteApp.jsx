import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function DeleteApp({ app, apps, setApps }) {

    function handleDeleteClick() {
        fetch(`http://localhost:8000/applications/${app.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => handleDeleteApp(app));
    }

    function handleDeleteApp(deletedApp) {
        const updatedApps = (apps || []).filter((app) => {
           return app.id !== deletedApp.id
        });
        setApps(updatedApps)
    }

  return (
    <div>
      <DeleteForeverIcon className="delete-icon" onClick={handleDeleteClick} />
    </div>
  );
}
export default DeleteApp;
