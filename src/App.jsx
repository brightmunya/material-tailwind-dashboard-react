import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth, Reports } from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/reports/*" element={<Reports />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
