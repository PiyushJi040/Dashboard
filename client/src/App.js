import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import UserDashboard from "scenes/dashboard/UserDashboard";
import AdminDashboard from "scenes/dashboard/AdminDashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Overview from "scenes/overview";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/user-dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<div>Geography Page - Coming Soon</div>} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<div>Daily Sales Page - Coming Soon</div>} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/management" element={<div>Management Page - Coming Soon</div>} />
              <Route path="/admin" element={<div>Admin Panel - Coming Soon</div>} />
              <Route path="/performance" element={<div>Performance Page - Coming Soon</div>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
