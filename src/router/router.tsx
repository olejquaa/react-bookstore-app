import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { HomePage, SearchPage, NotFoundPage } from "../pages";
import { BookDetailsPage } from "../pages/BookDetailsPage";
import { MainTemplate } from "../templates";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainTemplate />}>
      <Route path={ROUTE.DEV_HOMEPAGE} element={<Navigate to="/" />} />
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />
    </Route>,
  ),
);
