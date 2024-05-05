import { ErrorCodes } from "@/models/errors";
import { POKEDEX_API } from "./constants";

interface RequestInitCustom extends RequestInit {
  apiVersion?: string;
}

function createCustomFetch(baseURL: string) {
  return async (input: RequestInfo, init?: RequestInitCustom) => {
    const headers =
      init && init.headers ? new Headers(init.headers) : new Headers();

    let version = "/api/v2/";

    if (init?.apiVersion) {
      version = init?.apiVersion;
    }

    const url = new URL(baseURL + version + input.toString());

    try {
      const response = await fetch(url, {
        ...init,
        headers,
      });

      if (response.status === 401) {
        return Promise.reject(new Error(ErrorCodes.Unauthorized));
      }

      if (response.status === 404) {
        return Promise.reject(new Error(ErrorCodes.NotFound));
      }

      if (response.status === 500) {
        return Promise.reject(new Error(ErrorCodes.InternalServerError));
      }

      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export const customFetch = createCustomFetch(POKEDEX_API ?? "");
