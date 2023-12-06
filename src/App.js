import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElment: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos", element: <Videos /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
