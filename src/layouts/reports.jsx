import { Routes, Route } from "react-router-dom";
import routes from "@/routes";
import { Sidenav } from "@/widgets/layout";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Reports() {
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavType } = controller;
  return (
    <div className="relative min-h-screen w-full bg-blue-gray-50/50">
        <Sidenav routes={routes} brandImg={
          sidenavType === "dark" ? "./img/icon_60x60_dark.png" : "./img/icon_60x60.jpg"
        }/>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "reports" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
    </div>
  );
}

Reports.displayName = "/src/layout/reports.jsx";

export default Reports;
