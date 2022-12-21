import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage, SearchPage, NotFoundPage } from "../pages";
import { MainTemplate } from "../templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainTemplate />}>
      <Route path="/react-bookstore-app" element={<HomePage />} />
      <Route path="about" element={<SearchPage />} />
      <Route path="error" element={<NotFoundPage />} />
    </Route>,
  ),
);
