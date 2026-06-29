import { apiFetch } from "../api";
import { getRefreshToken } from "../tokens";

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SignupResponse {
  id: number;
  email: string;
  role: "MEMBER" | "INSTRUCTOR" | "ADMIN";
}

export function login(email: string, password: string): Promise<LoginResponse> {
  return apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function signup(email: string, password: string): Promise<SignupResponse> {
  return apiFetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function logout(): Promise<void> {
  const refreshToken = getRefreshToken();
  return apiFetch("/api/auth/logout", {
    method: "POST",
    headers: refreshToken ? { "X-Refresh-Token": refreshToken } : {},
  });
}
