import { BrowserRouter, Route, Routes } from "react-router";
import routers from "@/routers/routers";
import { Suspense } from "react";
import SidebarProvider from "@/contexts/SidebarContext";
import Sidebar from "@components/Sidebar/Sidebar";

const App = () => {
  return (
    <SidebarProvider>
      <Sidebar />

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routers.map((router) => (
              <Route
                key={router.path}
                path={router.path}
                element={<router.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SidebarProvider>
  );
};

export default App;
