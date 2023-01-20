import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "ui";
import "./firebase";
import { Provider } from "react-redux";
import { store } from "store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
