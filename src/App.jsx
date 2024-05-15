import Home from "./pages/home/Home";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useSelector } from "react-redux";
import { selectedDark } from "./state/darkModeSlice";
import { selectedUser } from "./state/authSlice";

function App() {
  const dark = useSelector(selectedDark);
  const currentUser = useSelector(selectedUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/users",
      element: <List />,
    },
    {
      path: "/users/:userId",
      element: <Single />,
    },
    {
      path: "/users/new",
      element:<New inputs={userInputs} title="Add New User" />,
    },
    {
      path: "/products",
      element:<List />,
    },
    {
      path: "/products/:productId",
      element:<Single />,
    },
    {
      path: "/products/new",
      element:<New inputs={productInputs} title="Add New Product" />,
    },
  ]);
  
  return (
    <div className={dark ? "app dark" : "app"}>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;

      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" />
      //     <Route path="login" element={<Login />} />
      //     <Route index element={<Home />} />
      //     <Route path="users">
      //       <Route index element={<List />} />
      //       <Route path=":userId" element={<Single />} />
      //       <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
      //     </Route>
      //     <Route path="products">
      //       <Route index element={<List />} />
      //       <Route path=":productId" element={<Single />} />
      //       <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
      //     </Route>
      //   </Routes>
      // </BrowserRouter>