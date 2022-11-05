import { API_BASE_URL } from "../consts/env";

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions {
  route: string;
  method?: HTTPMethods;
  body?: BodyInit;
}

const http = async <T>({ route, method, body }: FetchOptions): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}/${route}`, {
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
