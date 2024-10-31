import { createContext, useCallback } from "react";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import SplashScreen from "../components/splashscreen";

const AuthContext = createContext({
  isAuthenticated: false,
});

function AuthRouteProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const getAuthService = useCallback(() => {
    return localStorage.getItem("authService");
  }, []);

  const setAuthService = useCallback((authService) => {
    if (authService) {
      localStorage.setItem("authService", authService);
    }
  }, []);

  const resetAuthService = useCallback(() => {
    localStorage.removeItem("authService");
  }, []);

  const combinedAuth = useMemo(
    () => ({
      isAuthenticated,
      user,
      setAuthService,
      resetAuthService,
    }),
    [isAuthenticated, user, setAuthService, resetAuthService]
  );

  useEffect(() => {
    const authService = getAuthService();
    if (authService) {
      setIsAuthenticated(true);
      setUser(authService);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [getAuthService]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={combinedAuth}>
      <BrowserRouter>
        <Routes>{children}</Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export { AuthRouteProvider };
