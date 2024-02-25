import React from "react";
import ReactDOM from "react-dom/client";
//@ts-ignore
import App from "./App.tsx";
import { Provider } from "react-redux";
//@ts-ignore
import { store } from "./services/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
