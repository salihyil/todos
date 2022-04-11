import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "store";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Edit from "components/Edit";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="todos/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
