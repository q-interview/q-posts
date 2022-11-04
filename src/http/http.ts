import { API_BASE_URL } from "../consts/env";

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions {
  url: string;
  method?: HTTPMethods;
  body?: BodyInit;
}

const http = async <T>({ url, method, body }: FetchOptions): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    body,
    headers: {
      "Content-Type": "application/json",
    },
    method: method ?? "GET",
  });

  if (response.ok) {
    return response.json();
  } else {
    throw response?.body ?? response;
  }
};

export default http;
