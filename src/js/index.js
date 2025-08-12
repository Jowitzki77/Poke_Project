import React from "react";
import {createRoot} from "react-dom/client";
import App from "./Components/App";
import "../scss/layout/_main.scss";
import process from 'process';
window.process = process;
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);