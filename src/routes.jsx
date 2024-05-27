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
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
];

export default routes;
