import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cover from "./pages/Cover";
import Timeline from "./pages/Timeline";
import UserTimeLine from "./pages/UserTimeline";
import { UserProvider } from "./contexts/AuthContext";
import useToken from "./hooks/useToken";
import NewReview from "./pages/NewReview";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/home"
              element={
                <ProtectedRouteGuard>
                  <Timeline />
                </ProtectedRouteGuard>
              }
            />
            <Route
              path="/user/:id"
              element={
                <ProtectedRouteGuard>
                  <UserTimeLine />
                </ProtectedRouteGuard>
              }
            />
            <Route
              path="/new-review"
              element={
                <ProtectedRouteGuard>
                  <NewReview />
                </ProtectedRouteGuard>
              }
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
}
