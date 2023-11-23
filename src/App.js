import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import PrivetRoute from "./routes/PrivetRoute";
import Orders from "./components/Orders/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: (
            <PrivetRoute>
              <Home></Home>
            </PrivetRoute>
          ),
        },
        {
          path: "/orders",
          element: (
            <PrivetRoute>
              <Orders></Orders>
            </PrivetRoute>
          ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
