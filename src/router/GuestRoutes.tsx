import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import { MainLayout } from "@/components/layouts/main-layout/MainLayout";
import { PageLoader } from "@/components/PageLoader";

// Delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const NotFound = lazy(() => import("@/pages/NotFound"));
const Login = lazy(() =>
  delay(500).then(() => import("@/pages/auth/login/Login"))
);
const Register = lazy(() =>
  delay(500).then(() => import("@/pages/auth/register/Register"))
);

export const GuestRoutes = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <PageLoader>
            <Login />
          </PageLoader>
        ),
      },
      {
        path: "register",
        element: (
          <PageLoader>
            <Register />
          </PageLoader>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <PageLoader>
        <NotFound />
      </PageLoader>
    ),
  },
]);
