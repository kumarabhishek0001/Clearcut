import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";

import router from "./frontend.routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);
