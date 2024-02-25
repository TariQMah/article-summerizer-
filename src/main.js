import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
//@ts-ignore
import App from "./App.tsx";
import { Provider } from "react-redux";
//@ts-ignore
import { store } from "./services/store.ts";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(App, {}) }) }));
