import { useState } from "react";

interface UseFetchProps {
  url: string;
  method: "GET" | "POST";
  body?: string | FormData | URLSearchParams | null;
}

export const useFetch = <T>({ url, method, body }: UseFetchProps) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, { method, body });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

