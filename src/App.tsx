import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/RootLaytout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FeedPage from "./pages/Feed";
import Users from "./pages/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="feed" element={<FeedPage />} />
      <Route path="motivators" element={<Users />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
