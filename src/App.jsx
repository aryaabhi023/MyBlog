import { useEffect, useState } from "react";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Component";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="w-full bg-white">
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
