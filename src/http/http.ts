import { ENV } from "../env";

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions {
  route: string;
  method?: HTTPMethods;
  body?: BodyInit;
}

const http = async <T>({ route, method, body }: FetchOptions): Promise<T> => {
  const response = await fetch(`${ENV.Q_API_BASE_URL}/${route}`, {
    body,
    headers: {
      "Content-Type": "application/json",
    },
    method: method ?? ENV.Q_DEFAULT_METHOD,
  });

  if (response.ok) {
    return response.json();
  } else {
    throw response?.body ?? response;
  }
};

export default http;
