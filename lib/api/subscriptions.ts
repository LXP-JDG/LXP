import { authFetch } from "../api";

export interface Subscription {
  subscriptionId: number;
  memberId: number;
  status: "INACTIVE" | "ACTIVE" | "EXPIRED" | "SUSPENDED" | "DISCARDED";
  createdAt: string;
  expiresAt: string;
  activatedAt: string | null;
}

export function createSubscription(): Promise<Subscription> {
  return authFetch("/api/subscriptions", { method: "POST" });
}

export function getSubscription(subscriptionId: number): Promise<Subscription> {
  return authFetch(`/api/subscriptions/${subscriptionId}`);
}

export function cancelSubscription(subscriptionId: number): Promise<void> {
  return authFetch(`/api/subscriptions/${subscriptionId}/cancel`, { method: "POST" });
}
