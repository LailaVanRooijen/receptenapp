import { useEffect, useState } from "react";
import axios from "axios";

interface Parameters {
  [key: string]: string;
}

interface UseAxiosGetReturn {
  data: Recipe[] | Ingredient[] | Ingredient | null;
  loading: boolean;
  error: Error | null;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  recipeIngredients: Ingredient[];
}

interface Ingredient {
  id: number;
  name: string;
}

export const useAxiosGet = <T extends Recipe[] | Ingredient[] | null>(
  url: string,
  parameters?: Parameters
): UseAxiosGetReturn => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url, { params: parameters })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, parameters]);

  return { data, loading, error };
};
