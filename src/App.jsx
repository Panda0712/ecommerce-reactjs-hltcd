import SidebarProvider from "@/contexts/SidebarContext";
import StoreProvider from "@/contexts/StoreContext";
import ToastProvider from "@/contexts/ToastContext";
import routers from "@/routers/routers";
import Sidebar from "@components/Sidebar/Sidebar";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import OurShopProvider from "@/contexts/OurShopContext";

const App = () => {
  return (
    <OurShopProvider>
      <StoreProvider>
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
      </StoreProvider>
    </OurShopProvider>
  );
};

export default App;
