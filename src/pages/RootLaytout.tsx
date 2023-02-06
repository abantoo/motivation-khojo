import { Outlet } from "react-router-dom";
import TopNavigation from "../components/Nav";

function RootLayout() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen flex flex-col text-white">
        <TopNavigation />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
