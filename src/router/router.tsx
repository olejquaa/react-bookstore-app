import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { RequireAuth } from "components";
import {
  AccountPage,
  BookDetailsPage,
  CartPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  ResetPasswordPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "pages";

import { MainTemplate } from "templates";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainTemplate />}>
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />

      <Route element={<RequireAuth />}>
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
  { basename: "/react-bookstore-app" },
);
