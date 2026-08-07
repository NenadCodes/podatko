import { supabase } from "./supabase";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL env var");
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function apiFetch<T>(
  path: string,
  params?: Record<string, string>
): Promise<T> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;

  const url = new URL(path, API_BASE_URL);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
  }

  const res = await fetch(url.toString(), {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      if (body?.error) message = body.error;
    } catch {
      // response wasn't JSON, keep default message
    }
    throw new ApiError(message, res.status);
  }

  return res.json();
}

export type Role = "admin" | "client";

export type Property = { slug: string; name: string };

export type PropertiesResponse = {
  success: true;
  role: Role;
  properties: Property[];
};

export type SearchConsoleSummary = {
  success: true;
  property: string;
  data: {
    total_clicks: number;
    total_impressions: number;
    avg_ctr: number;
    avg_position: number;
  };
};

export type SearchConsoleQueryRow = {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
};

export type TopQueriesResponse = {
  success: true;
  property: string;
  rows: SearchConsoleQueryRow[];
};

export type Ga4Summary = {
  success: true;
  property: string;
  data: {
    sessions: number;
    new_users: number;
    page_views: number;
    total_users: number;
  };
};

export type Ga4PageRow = { page: string; views: number };

export type TopPagesResponse = {
  success: true;
  property: string;
  rows: Ga4PageRow[];
};

export const getProperties = () =>
  apiFetch<PropertiesResponse>("/properties");

export const getSearchConsoleSummary = (property: string) =>
  apiFetch<SearchConsoleSummary>("/search-console/summary", { property });

export const getTopQueries = (property: string) =>
  apiFetch<TopQueriesResponse>("/search-console/top-queries", { property });

export const getGa4Summary = (property: string) =>
  apiFetch<Ga4Summary>("/ga4/summary", { property });

export const getTopPages = (property: string) =>
  apiFetch<TopPagesResponse>("/ga4/top-pages", { property });
