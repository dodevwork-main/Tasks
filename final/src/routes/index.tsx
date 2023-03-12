import { ComponentType, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <HomePage />, index: true },
        { element: <TaskPage />, path: "task/:id" },
      ],
    },
    { path: "*", element: <Page404 /> },
  ]);

export default Router;

// eslint-disable-next-line react/display-name
const Loadable = (Component: ComponentType) => () =>
  (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const TaskPage = Loadable(lazy(() => import("../pages/TaskPage")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
