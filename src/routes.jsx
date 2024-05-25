import App from "./App";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Details from "./Components/Details";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        // This is eventually going to be a dynamic route, appending the id for each application
        // can reference the react-router canvas lesson for implementation
        path: "/details",
        element: <Details />,
      },
    ],
  },
];

export default routes;
