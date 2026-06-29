import { getAccessToken, getRefreshToken, setAccessToken, clearTokens } from "./tokens";

export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export class ApiError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

async function parseError(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as { message?: string };
    if (body.message) return body.message;
  } catch {
    // ignore
  }
  return `서버 오류 (${response.status})`;
}

/**
 * 범용 API 요청 함수.
 * 브라우저 환경에서는 localStorage에서 JWT를 읽어 `Authorization: Bearer <token>` 헤더를 자동으로 추가한다.
 * 서버(SSR) 환경에서는 토큰 없이 요청한다.
 */
export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) ?? {}),
  };

  if (typeof window !== "undefined") {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`;
    if (refreshToken) headers["X-Refresh-Token"] = refreshToken;
  }

  const response = await fetch(`${API_BASE}${path}`, { ...options, headers });

  if (typeof window !== "undefined") {
    const newToken = response.headers.get("New-Access-Token");
    if (newToken) setAccessToken(newToken);

    if (response.status === 401) {
      clearTokens();
      throw new ApiError(401, "인증이 필요합니다. 다시 로그인해 주세요.");
    }
  } else if (response.status === 401) {
    throw new ApiError(401, "인증이 필요합니다.");
  }

  if (!response.ok) throw new ApiError(response.status, await parseError(response));
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

/** 인증이 반드시 필요한 엔드포인트용 별칭 (apiFetch와 동일, 클라이언트 전용) */
export const authFetch = apiFetch;
