import { apiFetch, authFetch } from "../api";

export interface CourseSummary {
  courseId: number;
  instructorId: number;
  title: string;
  status: "PUBLIC" | "PRIVATE";
  thumbnailUrl: string | null;
}

export interface CourseDetail extends CourseSummary {
  description: string;
  lectures: CourseLecture[];
  missions: CourseMission[];
}

export interface CourseLecture {
  lectureId: number;
  title: string;
  status: "PUBLIC" | "PRIVATE";
}

export interface CourseMission {
  missionId: number;
  title: string;
  status: "PUBLIC" | "PRIVATE";
}

export interface CoursesPage {
  courses: CourseSummary[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface CourseCreateRequest {
  title: string;
  description: string;
  thumbnailUrl?: string;
}

export function getCourses(params: { keyword?: string; page?: number; size?: number } = {}): Promise<CoursesPage> {
  const q = new URLSearchParams();
  if (params.keyword) q.set("keyword", params.keyword);
  if (params.page !== undefined) q.set("page", String(params.page));
  if (params.size !== undefined) q.set("size", String(params.size));
  const qs = q.toString();
  return apiFetch(`/api/courses${qs ? `?${qs}` : ""}`);
}

export function getCourse(courseId: number): Promise<CourseSummary> {
  return apiFetch(`/api/courses/${courseId}`);
}

export function getCourseDetail(courseId: number): Promise<CourseDetail> {
  return apiFetch(`/api/courses/${courseId}/detail`);
}

export function createCourse(data: CourseCreateRequest): Promise<void> {
  return authFetch("/api/courses", { method: "POST", body: JSON.stringify(data) });
}

export function updateCourse(courseId: number, data: CourseCreateRequest): Promise<void> {
  return authFetch(`/api/courses/${courseId}`, { method: "PATCH", body: JSON.stringify(data) });
}

export function publishCourse(courseId: number): Promise<void> {
  return authFetch(`/api/courses/${courseId}/publish`, { method: "POST" });
}

export function unpublishCourse(courseId: number): Promise<void> {
  return authFetch(`/api/courses/${courseId}/unpublish`, { method: "POST" });
}

export function addLecture(courseId: number, data: { title: string; contentUrl: string }): Promise<void> {
  return authFetch(`/api/courses/${courseId}/lectures`, { method: "POST", body: JSON.stringify(data) });
}

export function publishLecture(courseId: number, lectureId: number): Promise<void> {
  return authFetch(`/api/courses/${courseId}/lectures/${lectureId}/publish`, { method: "POST" });
}

export function unpublishLecture(courseId: number, lectureId: number): Promise<void> {
  return authFetch(`/api/courses/${courseId}/lectures/${lectureId}/unpublish`, { method: "POST" });
}

export function addMission(courseId: number, data: { title: string; content: string }): Promise<void> {
  return authFetch(`/api/courses/${courseId}/missions`, { method: "POST", body: JSON.stringify(data) });
}

export function publishMission(courseId: number, missionId: number): Promise<void> {
  return authFetch(`/api/courses/${courseId}/missions/${missionId}/publish`, { method: "POST" });
}

export function unpublishMission(courseId: number, missionId: number): Promise<void> {
  return authFetch(`/api/courses/${courseId}/missions/${missionId}/unpublish`, { method: "POST" });
}
