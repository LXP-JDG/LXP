"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { clearTokens, getAccessToken, setTokens } from "./tokens";

export type UserRole = "MEMBER" | "INSTRUCTOR" | "ADMIN";

interface AuthUser {
  email: string;
  role: UserRole;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (email: string, accessToken: string, refreshToken: string, role: UserRole) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    if (getAccessToken()) {
      // 토큰이 있으면 인증 상태로 초기화 (이메일/역할은 재로그인 시 갱신됨)
      setUser({ email: "", role: "MEMBER" });
    }
  }, []);

  const signIn = useCallback(
    (email: string, accessToken: string, refreshToken: string, role: UserRole) => {
      setTokens(accessToken, refreshToken);
      setUser({ email, role });
    },
    [],
  );

  const signOut = useCallback(() => {
    clearTokens();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: user !== null, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
