import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountStatsPage from "../pages/accountStatsPage";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";
import Transfer from "../pages/transferPage";
import SearchTransferPage from "../pages/searchTransferPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="AccountStats" element={<AccountStatsPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="searchtransfer" element={<SearchTransferPage />} />
      </Routes>
    </BrowserRouter>
  );
}
