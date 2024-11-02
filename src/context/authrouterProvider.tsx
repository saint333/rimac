import { createContext, useCallback, useState, useEffect, useMemo, ReactNode } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import SplashScreen from "../components/splashscreen";

const AuthContext = createContext({
  isAuthenticated: false,
});

function AuthRouteProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<null | Record<string, string>>(null);

  const getAuthService = useCallback(() => {
    return JSON.parse(localStorage.getItem("authService") || "{}");
  }, []);

  const setAuthService = useCallback((authService: string) => {
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
    }, 1500);
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
