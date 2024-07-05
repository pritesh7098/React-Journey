import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  // Use state hook to manage loading state
  const [loading, setLoading] = useState(true);

  // Use dispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Use effect hook for fetching user data
  useEffect(() => {
    // Fetch the current user data
    authService
      .getCurrentUser()
      .then((userData) => {
        // If user data is present, dispatch action to set user data
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false)); // Set loading to false after fetching user data
  }, []);

  // Render the app content
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-slate-300">
      <div className="w-full block"> </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null; // Return null when loading
}

export default App;
