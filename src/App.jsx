import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { FEATURES } from "@/lib/featureRegistry";
import AppLayout from "@/components/AppLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

import DisorderSelection from "./pages/onboarding/DisorderSelection";

import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginUser from "./pages/LoginUser";
import LoginGuardian from "./pages/LoginGuardian";
import LoginSupport from "./pages/LoginSupport";
import NotFound from "./pages/NotFound";
import UserSettings from "./pages/user/UserSettings";
import GuardianDashboard from "./pages/guardian/GuardianDashboard";
import SupportDashboard from "./pages/support/SupportDashboard";
import ToolWorkspace from "./pages/ToolWorkspace";

// ── ASD ────────────────────────────────────
import ASDPage from "./pages/ASDPage";
import ASDRoutinePage from "./pages/asd/ASDRoutinePage";
import ASDSensoryPage from "./pages/asd/ASDSensoryPage";
import ASDStoriesPage from "./pages/asd/ASDStoriesPage";
import ASDMeltdownPage from "./pages/asd/ASDMeltdownPage";
import ASDEmotionPage from "./pages/asd/ASDEmotionPage";

// ── Number Confidence Builder ───────────────
import DyscalculiaPage from "./pages/DyscalculiaPage";

const queryClient = new QueryClient();

function ShellRoutes() {
  return (
    <AppLayout>
      <Routes>
        {/* Support-only */}
        <Route
          path="/support-dashboard"
          element={
            <ProtectedRoute role="support">
              <SupportDashboard />
            </ProtectedRoute>
          }
        />

        {/* Guardian-only */}
        <Route
          path="/guardian-dashboard"
          element={
            <ProtectedRoute role="guardian">
              <GuardianDashboard />
            </ProtectedRoute>
          }
        />

        {/* User-only */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute role="user">
              <UserSettings />
            </ProtectedRoute>
          }
        />

        {/* Any authenticated user */}
        <Route
          path="/"
          element={
            <ProtectedRoute role="user">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tool/:moduleId"
          element={
            <ProtectedRoute role="user">
              <ToolWorkspace />
            </ProtectedRoute>
          }
        />

        {/* ── ASD Module ────────────────────────── */}
        <Route
          path="/asd"
          element={
            <ProtectedRoute role="user">
              <ASDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/asd/routine"
          element={
            <ProtectedRoute role="user">
              <ASDRoutinePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/asd/sensory"
          element={
            <ProtectedRoute role="user">
              <ASDSensoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/asd/stories"
          element={
            <ProtectedRoute role="user">
              <ASDStoriesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/asd/meltdown"
          element={
            <ProtectedRoute role="user">
              <ASDMeltdownPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/asd/emotion"
          element={
            <ProtectedRoute role="user">
              <ASDEmotionPage />
            </ProtectedRoute>
          }
        />

        {/* ── Number Confidence Builder ─────────── */}
        <Route
          path="/dyscalculia"
          element={
            <ProtectedRoute feature={FEATURES.DYSCALCULIA}>
              <DyscalculiaPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
}

/* =====================================================
   App Root
===================================================== */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public — no layout, no auth required */}
            <Route path="/login" element={<Login />} />
            <Route path="/login-user" element={<LoginUser />} />
            <Route path="/login-guardian" element={<LoginGuardian />} />
            <Route path="/login-support" element={<LoginSupport />} />

            <Route
              path="/onboarding/disorders"
              element={
                <ProtectedRoute>
                  <DisorderSelection />
                </ProtectedRoute>
              }
            />

            <Route path="/*" element={<ShellRoutes />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
