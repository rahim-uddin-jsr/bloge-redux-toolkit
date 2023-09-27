import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import BlogDetails from "./components/blogDetails.jsx";
import "./index.css";
import { store } from "./redux/store.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "blog/:id", element: <BlogDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
