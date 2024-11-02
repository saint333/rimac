import {
  createContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import SplashScreen from "../components/splashscreen";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: Record<string, string> | null;
  setAuthService: (authService: Record<string, string>) => void;
  resetAuthService: () => void;
  getAuthService: () => void;
}>({
  isAuthenticated: false,
  user: null,
  setAuthService: () => {},
  resetAuthService: () => {},
  getAuthService: () => {},
});

function AuthRouteProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<null | Record<string, string>>(null);

  const getAuthService = useCallback(() => {
    return JSON.parse(localStorage.getItem("authService") || "{}");
  }, []);

  const setAuthService = useCallback((authService: Record<string, string>) => {
    if (authService) {
      localStorage.setItem("authService", JSON.stringify(authService));
      setUser(authService);
      setIsAuthenticated(true);
    }
  }, []);

  const resetAuthService = useCallback(() => {
    localStorage.removeItem("authService");
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const combinedAuth = useMemo(
    () => ({
      isAuthenticated,
      user,
      setAuthService,
      resetAuthService,
      getAuthService,
    }),
    [isAuthenticated, user, setAuthService, resetAuthService, getAuthService]
  );

  useEffect(() => {
    const authService = getAuthService();
    if (Object.values(authService).length !== 0) {
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
    <AuthContext.Provider value={combinedAuth}>{children}</AuthContext.Provider>
  );
}

export { AuthRouteProvider, AuthContext };
