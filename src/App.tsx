import { RouterProvider, HashRouter } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  return (
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  );
};
