import SidebarProvider from "@/contexts/SidebarContext";
import ToastProvider from "@/contexts/ToastContext";
import routers from "@/routers/routers";
import Sidebar from "@components/Sidebar/Sidebar";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <ToastProvider>
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
    </ToastProvider>
  );
};

export default App;
